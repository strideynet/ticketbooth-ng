package main

import (
	"database/sql"
	"fmt"
	"github.com/go-sql-driver/mysql"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/jmoiron/sqlx"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"net"
	http2 "net/http"
	"os"
	"tb/admin"
	adminv1 "tb/api/admin/v1"
	storev1pb "tb/api/store/v1"
	"tb/settings"
	"tb/store"
)

func run() error {
	logger, err := zap.NewProduction()
	if err != nil {
		return err
	}
	defer logger.Sync()

	// Setup listeners
	httpPort := ":8090"
	httpLis, err := net.Listen("tcp", httpPort)
	if err != nil {
		return err
	}

	grpcPort := ":8091"
	grpcLis, err := net.Listen("tcp", grpcPort)
	if err != nil {
		return err
	}

	// Setup SQLX connection
	var db *sqlx.DB
	{
		dbConfig := mysql.NewConfig()
		dbConnector, err := mysql.NewConnector(dbConfig)
		if err != nil {
			return err
		}

		db = sqlx.NewDb(sql.OpenDB(dbConnector), "sql")
	}

	// Setup GRPC handlers
	srv := grpc.NewServer()

	_ = settings.NewSQLRepo(db)

	storeHandler := store.NewGRPCHandler()
	storev1pb.RegisterStoreServer(srv, storeHandler)

	adminHandler := admin.NewGRPCHandler()
	adminv1.RegisterAdminServer(srv, adminHandler)

	reflection.Register(srv)

	// Setup grpcweb multiplexing
	wrapped := grpcweb.WrapServer(srv,
		grpcweb.WithOriginFunc(func(origin string) bool {
			return true
		}),
	)
	http := http2.Server{
		Handler: http2.HandlerFunc(func(writer http2.ResponseWriter, request *http2.Request) {
			// TODO: Inject metrics et al here
			switch request.URL.Path {
			case "/health/live":
				writer.WriteHeader(200)
				fmt.Fprint(writer, "LIVE")
			case "/health/ready":
				writer.WriteHeader(200)
				fmt.Fprint(writer, "READY")
			case "/.well-known/security.txt":
				writer.WriteHeader(418)
				fmt.Fprint(writer, `Hey! Thanks for looking to get in touch.

Contact: mailto:noah@noahstride.co.uk
Expires: 2025-01-01T06:21:00.000Z
Preferred-Languages: en

If I'm unresponsive via email, assume I am dead.
`)
			case "/":
				writer.WriteHeader(404)
				fmt.Fprintf(writer, `Welcome to ticketbooth-ng.

Not all those who wonder are lost, but you are!

See:
- /health/live
- /health/ready
- /.well-known/security.txt
- port %s for GRPC
- port %s for grpc web.
				`, grpcPort, httpPort)
			default:
				wrapped.ServeHTTP(writer, request)
			}
		}),
	}

	// Listen on grpc & http
	var stopChan chan error
	go func() {
		logger.Info("http listening", zap.String("port", httpPort))
		err := http.Serve(httpLis)
		stopChan <- err
	}()

	go func() {
		logger.Info("grpc listening", zap.String("port", grpcPort))
		err := srv.Serve(grpcLis)
		stopChan <- err
	}()

	return <-stopChan
}

func main() {
	err := run()
	if err != nil {
		fmt.Printf("fatal err: %s", err)
		os.Exit(1)
	}
}
