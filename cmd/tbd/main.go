package main

import (
	"context"
	"fmt"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"net"
	http2 "net/http"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"os"
	adminv1 "tb/api/admin/v1"
)

func run() error {
	logger, err := zap.NewProduction()
	if err != nil {
		return err
	}
	defer logger.Sync()

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

	srv := grpc.NewServer()
	adminv1.RegisterAdminServer(srv, &adminServer{})
	reflection.Register(srv)

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

	var stopChan chan error
	go func() {
		err := http.Serve(httpLis)
		stopChan <- err
	}()

	go func() {
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

type adminServer struct {
	adminv1.UnimplementedAdminServer
}

func (as *adminServer) ServerInfo(context.Context, *adminv1.ServerInfoRequest) (*adminv1.ServerInfoResponse, error) {
	hostname, err := os.Hostname()
	if err != nil {
		return nil, err
	}
	return &adminv1.ServerInfoResponse{
		Version:  "indev",
		HostName: hostname,
	}, nil
}