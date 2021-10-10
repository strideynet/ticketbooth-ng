package orders

import (
	"database/sql"
	"time"
)

type Model struct {
	ID string `db:"id"`

	Email string `db:"email"`

	PaypalTransactionID sql.NullString `db:"paypal_transaction_id"`

	// Value in pennies
	Value int `db:"value"`

	PreviousYears sql.NullInt64 `db:"previous_years"`

	OrderNote string `db:"order_note"`
	PartyName string `db:"party_name"`

	CreatedAt time.Time `db:"created_at"`
	UpdatedAt time.Time `db:"updated_at"`
}
