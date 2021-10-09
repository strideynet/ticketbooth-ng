/**
 * @fileoverview gRPC-Web generated client stub for tb.store.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as store_v1_store_pb from '../../store/v1/store_pb';


export class StoreClient {
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

  methodInfoGetSettings = new grpcWeb.AbstractClientBase.MethodInfo(
    store_v1_store_pb.GetSettingsResponse,
    (request: store_v1_store_pb.GetSettingsRequest) => {
      return request.serializeBinary();
    },
    store_v1_store_pb.GetSettingsResponse.deserializeBinary
  );

  getSettings(
    request: store_v1_store_pb.GetSettingsRequest,
    metadata: grpcWeb.Metadata | null): Promise<store_v1_store_pb.GetSettingsResponse>;

  getSettings(
    request: store_v1_store_pb.GetSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: store_v1_store_pb.GetSettingsResponse) => void): grpcWeb.ClientReadableStream<store_v1_store_pb.GetSettingsResponse>;

  getSettings(
    request: store_v1_store_pb.GetSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: store_v1_store_pb.GetSettingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tb.store.v1.Store/GetSettings',
        request,
        metadata || {},
        this.methodInfoGetSettings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tb.store.v1.Store/GetSettings',
    request,
    metadata || {},
    this.methodInfoGetSettings);
  }

}

