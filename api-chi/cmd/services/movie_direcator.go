package services

import (
	"api-chi/cmd/config"
	"api-chi/cmd/models"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

type MovieDirecatorService struct {
	Conn *pgxpool.Pool
}

func (s *MovieDirecatorService) Open() error {
	config.LoadConfig()
	conn, err := pgxpool.New(config.CTX, config.POSTGRES_URL)
	if err != nil {
		return err
	}

	// Assign connection
	s.Conn = conn
	return nil
}

func (s *MovieDirecatorService) Close() {
	s.Conn.Close()
}

func (s *MovieDirecatorService) Create(input *models.MovieDirecator) (string, error) {
	// Execute SQL
	sql := "SELECT * FROM create_movie_direcator(@name);"
	args := pgx.NamedArgs{
		"name": input.Name,
	}
	value := ""
	err := s.Conn.QueryRow(config.CTX, sql, args).Scan(&value)
	if err != nil {
		return value, err
	}

	// If success return nil
	return value, nil
}

func (s *MovieDirecatorService) Update(input *models.MovieDirecator) (models.MovieDirecator, error) {
	// Execute SQL
	sql := "SELECT * FROM update_movie_direcator(@id, @name);"
	args := pgx.NamedArgs{
		"id":   input.Id,
		"name": input.Name,
	}
	value := models.MovieDirecator{}
	err := s.Conn.QueryRow(config.CTX, sql, args).Scan(&value.Id, &value.Name)
	if err != nil {
		return value, err
	}

	// If success return nil
	return value, nil
}

func (s *MovieDirecatorService) Remove(id *string) (string, error) {
	// Execute SQL
	sql := "SELECT * FROM remove_movie_direcator(@id);"
	args := pgx.NamedArgs{
		"id": *id,
	}
	value := ""
	err := s.Conn.QueryRow(config.CTX, sql, args).Scan(&value)
	if err != nil {
		return value, err
	}

	// If success return nil
	return value, nil
}

func (s *MovieDirecatorService) Count() (int, error) {
	// Execute SQL
	sql := "SELECT * FROM count_movie_direcator();"
	value := 0
	err := s.Conn.QueryRow(config.CTX, sql).Scan(&value)
	if err != nil {
		return value, err
	}

	// If success return nil
	return value, nil
}
