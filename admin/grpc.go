package admin

import (
	"context"
	"os"
	adminv1pb "tb/api/admin/v1"
)

type grpc struct {
	adminv1pb.UnimplementedAdminServer
}

func NewGRPCHandler() *grpc {
	return &grpc{}
}

func (a *grpc) ServerInfo(context.Context, *adminv1pb.ServerInfoRequest) (*adminv1pb.ServerInfoResponse, error) {
	hostname, err := os.Hostname()
	if err != nil {
		return nil, err
	}
	return &adminv1pb.ServerInfoResponse{
		Version:  "indev",
		HostName: hostname,
	}, nil
}