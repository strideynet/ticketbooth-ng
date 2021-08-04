package admin

import (
	"context"
	"os"
	adminv1 "tb/api/admin/v1"
)

type grpc struct {
	adminv1.UnimplementedAdminServer
}

func GRPC() *grpc {
	return &grpc{}
}

func (a *grpc) ServerInfo(context.Context, *adminv1.ServerInfoRequest) (*adminv1.ServerInfoResponse, error) {
	hostname, err := os.Hostname()
	if err != nil {
		return nil, err
	}
	return &adminv1.ServerInfoResponse{
		Version:  "indev",
		HostName: hostname,
	}, nil
}