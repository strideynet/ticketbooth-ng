package settings

import (
	"context"
	"github.com/jmoiron/sqlx"
	"time"
)

type repo interface {
	Get(ctx context.Context) (*model, error)
}

type model struct {
	ID string `db:"string"`
	CreatedAt time.Time `db:"created_at"`
	MaxParticipants int `db:"max_participants"`

	SalesDisabled bool `db:"sales_disabled"`
	SalesOpenAt time.Time `db:"sales_open_at"`
}

type sqlRepo struct {
	db *sqlx.DB
}

func NewSQLRepo(db *sqlx.DB) *sqlRepo {
	return &sqlRepo{
		db:db,
	}
}

func (r *sqlRepo) Get(ctx context.Context) (*model, error) {
	m := &model{}
	if err := r.db.GetContext(ctx, m, "SELECT * FROM settings ORDER BY created_at DESC LIMIT 1;"); err != nil {
		return nil, err
	}
	return m, nil
}