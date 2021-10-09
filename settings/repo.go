package settings

import (
	"context"
	"time"

	"github.com/jmoiron/sqlx"
)

type Model struct {
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

func (r *sqlRepo) Get(ctx context.Context) (*Model, error) {
	m := &Model{}
	if err := r.db.GetContext(ctx, m, "SELECT * FROM settings ORDER BY created_at DESC LIMIT 1;"); err != nil {
		return nil, err
	}
	return m, nil
}