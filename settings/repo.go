package settings

import (
	"context"
	"github.com/jmoiron/sqlx"
	"time"
)

type model struct {
	MaxParticipants int `db:"max_participants"`

	SalesDisabled bool `db:"sales_disabled"`
	SalesOpenAt time.Time `db:"sales_open_at"`
}

type repo struct {
	db *sqlx.DB
}

func (r *repo) Get(ctx context.Context) (*model, error) {
	return &model{
		MaxParticipants: 600,
		SalesDisabled: false,
		SalesOpenAt: time.Now(),
	}, nil
}