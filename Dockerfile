# syntax = docker/dockerfile:1.0-experimental
FROM golang:1.16 as builder

WORKDIR /workspace
COPY go.mod go.sum ./
RUN go mod download

# Copy the go source
COPY . .
# Build
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 GO111MODULE=on go build -a -o tbd ./cmd/tbd
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 GO111MODULE=on go build -a -o tbcli ./cmd/tbcli

# Create a final image
FROM alpine:3.13.5

WORKDIR /
RUN addgroup --gid 1000 -S tb && adduser -S tb -G tb --uid 1000

COPY --from=builder /workspace/tbd .
COPY --from=builder /workspace/tbcli .

USER tb:tb
ENTRYPOINT ["/tbd"]