/**
 * @fileoverview gRPC-Web generated client stub for tb.orders.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as orders_v1_orders_pb from '../../orders/v1/orders_pb';


export class OrdersClient {
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

  methodInfoList = new grpcWeb.AbstractClientBase.MethodInfo(
    orders_v1_orders_pb.ListResponse,
    (request: orders_v1_orders_pb.ListRequest) => {
      return request.serializeBinary();
    },
    orders_v1_orders_pb.ListResponse.deserializeBinary
  );

  list(
    request: orders_v1_orders_pb.ListRequest,
    metadata: grpcWeb.Metadata | null): Promise<orders_v1_orders_pb.ListResponse>;

  list(
    request: orders_v1_orders_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: orders_v1_orders_pb.ListResponse) => void): grpcWeb.ClientReadableStream<orders_v1_orders_pb.ListResponse>;

  list(
    request: orders_v1_orders_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: orders_v1_orders_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tb.orders.v1.Orders/List',
        request,
        metadata || {},
        this.methodInfoList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tb.orders.v1.Orders/List',
    request,
    metadata || {},
    this.methodInfoList);
  }

}

