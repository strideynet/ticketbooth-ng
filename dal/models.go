package dal

import (
	"database/sql"
	"time"
)

type Participant struct {
	ID string

	FirstName    string
	LastName     string
	Nickname     string
	OrderID      string
	MobileNumber string
	DateOfBirth  time.Time

	CreatedAt time.Time
	UpdatedAt time.Time
}

type Order struct {
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

type Settings struct {
	ID              string    `db:"string"`
	CreatedAt       time.Time `db:"created_at"`
	MaxParticipants int       `db:"max_participants"`

	SalesDisabled bool      `db:"sales_disabled"`
	SalesOpenAt   time.Time `db:"sales_open_at"`
}
