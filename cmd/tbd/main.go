package main

import (
	"go.uber.org/zap"
	"golang.org/x/tools/go/ssa/interp/testdata/src/fmt"
	"os"
)

func run() error {
	logger, err := zap.NewProduction()
	if err != nil {
		return err
	}
	defer logger.Sync()

	return nil
}

func main() {
	err := run()
	if err != nil {
		fmt.Printf("fatal err: %s", err)
		os.Exit(1)
	}
}
