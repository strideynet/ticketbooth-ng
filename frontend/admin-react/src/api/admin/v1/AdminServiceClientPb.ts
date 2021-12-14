/**
 * @fileoverview gRPC-Web generated client stub for tb.admin.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as admin_v1_admin_pb from '../../admin/v1/admin_pb';


export class AdminClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoServerInfo = new grpcWeb.MethodDescriptor(
    '/tb.admin.v1.Admin/ServerInfo',
    grpcWeb.MethodType.UNARY,
    admin_v1_admin_pb.ServerInfoRequest,
    admin_v1_admin_pb.ServerInfoResponse,
    (request: admin_v1_admin_pb.ServerInfoRequest) => {
      return request.serializeBinary();
    },
    admin_v1_admin_pb.ServerInfoResponse.deserializeBinary
  );

  serverInfo(
    request: admin_v1_admin_pb.ServerInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_admin_pb.ServerInfoResponse>;

  serverInfo(
    request: admin_v1_admin_pb.ServerInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: admin_v1_admin_pb.ServerInfoResponse) => void): grpcWeb.ClientReadableStream<admin_v1_admin_pb.ServerInfoResponse>;

  serverInfo(
    request: admin_v1_admin_pb.ServerInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: admin_v1_admin_pb.ServerInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tb.admin.v1.Admin/ServerInfo',
        request,
        metadata || {},
        this.methodInfoServerInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tb.admin.v1.Admin/ServerInfo',
    request,
    metadata || {},
    this.methodInfoServerInfo);
  }

}

