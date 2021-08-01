package main

import (
	"fmt"
	"github.com/spf13/cobra"
	"os"
)

func run() error {
	rootCmd := &cobra.Command{
		Use: "tbcli",
		Short: "admin CLI for tbcli, useful for little hacks",
	}

	if err := rootCmd.Execute(); err != nil {
		return err
	}
	return nil
}

func main() {
	err := run()
	if err != nil {
		fmt.Printf("Error: %s", err)
		os.Exit(1)
	}
}