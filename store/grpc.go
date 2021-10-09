package store

import (
	"context"
	"fmt"
	storev1pb "tb/api/store/v1"
	"tb/settings"
)

type grpc struct {
	storev1pb.UnimplementedStoreServer
	settings settingsFetcher
}

type settingsFetcher interface {
	Get(ctx context.Context) (*settings.Model, error)
}

func NewGRPCHandler(settings settingsFetcher) *grpc {
	return &grpc{
		settings: settings,
	}
}

func (g *grpc)GetSettings(ctx context.Context, req *storev1pb.GetSettingsRequest) (*storev1pb.GetSettingsResponse,error) {
	stngs, err := g.settings.Get(ctx)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch settings: %s", err)
	}

	return &storev1pb.GetSettingsResponse{
		MaxParticipants: int64(stngs.MaxParticipants),
		SalesDisabled:   false,
		SalesOpenAt:     nil,
		SalesState:      storev1pb.GetSettingsResponse_UNKNOWN,
	}, nil
}