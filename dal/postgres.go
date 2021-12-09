package dal

import (
	"github.com/jackc/pgx/v4/pgxpool"
)

type Postgres struct {
	conn *pgxpool.Pool
}

func NewPostgres(conn *pgxpool.Pool) *Postgres {
	return &Postgres{
		conn: conn,
	}
}
