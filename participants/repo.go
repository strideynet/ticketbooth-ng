package participants

import "time"

type Model struct {
	ID string `db:"id"`

	FirstName string `db:"first_name"`
	LastName string `db:"last_name"`
	Nickname string `db:"nickname"`
	OrderID string `db:"order_id"`
	MobileNumber string `db:"mobile_number"`
	DateOfBirth time.Time `db:"date_of_birth"`

	CreatedAt time.Time `db:"created_at"`
	UpdatedAt time.Time `db:"updated_at"`
}