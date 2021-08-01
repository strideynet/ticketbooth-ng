# ticketbooth-ng
Next generation of FOSS ticket sales solution for BBB

## Developing

```shell
brew install protobuf
go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.26
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1
brew tap bufbuild/buf
brew install buf

buf generate -v

```