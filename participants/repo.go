package participants

import "database/sql"

type Model struct {
	FirstName string `db:"first_name"`
	LastName string `db:"last_name"`
	Nickname string `db:"nickname"`
	OrderID string `db:"order_id"`
	MobileNumber string `db:"mobile_number"`

	PlateNumber sql.NullInt64
}