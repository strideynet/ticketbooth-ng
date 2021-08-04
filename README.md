# ticketbooth-ng
Next generation of FOSS ticket sales solution for BBB

## Architecture

- Two client applications (see clients/), one for consumers and one for administration
  - Clients written in Vue3 + Typescript
- Both communicate to a single GRPC (grpc-web capable) Go API
- API backs onto SQL database.

## Developing

```shell
brew install protobuf
go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.26
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1
brew tap bufbuild/buf
brew install buf

buf generate -v

```

## The Go

This repo really realises and demonstrates a lot of my current thoughts around API design and go code structure.

That is:

- Fuck off internal/. This is an application not a library, it's pretty clear there's no encouragement for other projects to consume this, so I shouldn't need to bury loads of stuff abitrarily in another folder.
- Fuck off pkg/. For the same reasons. Nothing here is consumable or not consumable.
- Domain driven as much as is sensible ? The handler, repo etc all live in the same package, but are distinct structures, hence keeping business logic and handler logic seperate. Some various helpery bits may be pulled out. Why be dogmatic when you can be pragmatic and write code that solves stakeholder problems.