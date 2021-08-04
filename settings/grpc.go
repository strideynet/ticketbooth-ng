package settings

import (
	"context"
	"go.uber.org/zap"
	"google.golang.org/protobuf/types/known/timestamppb"
	settingsv1 "tb/api/settings/v1"
)



type grpc struct {
	l *zap.Logger
	settingsv1.UnimplementedSettingsServer
	repo interface {
		Get(ctx context.Context) (*model, error)
	}
}

func GRPC() *grpc {
	return &grpc{}
}

func (g *grpc) Get(ctx context.Context, req *settingsv1.GetRequest) (*settingsv1.GetResponse, error) {
	data, err := g.repo.Get(ctx)
	if err != nil {
		return nil, err
	}

	return &settingsv1.GetResponse{
		MaxParticipants: int64(data.MaxParticipants),
		SalesOpenAt: timestamppb.New(data.SalesOpenAt),
		SalesDisabled: data.SalesDisabled,
	}, nil
}