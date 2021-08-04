/**
 * @fileoverview gRPC-Web generated client stub for tb.settings.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as settings_v1_settings_pb from '../../settings/v1/settings_pb';


export class SettingsClient {
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

  methodInfoGet = new grpcWeb.AbstractClientBase.MethodInfo(
    settings_v1_settings_pb.GetResponse,
    (request: settings_v1_settings_pb.GetRequest) => {
      return request.serializeBinary();
    },
    settings_v1_settings_pb.GetResponse.deserializeBinary
  );

  get(
    request: settings_v1_settings_pb.GetRequest,
    metadata: grpcWeb.Metadata | null): Promise<settings_v1_settings_pb.GetResponse>;

  get(
    request: settings_v1_settings_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: settings_v1_settings_pb.GetResponse) => void): grpcWeb.ClientReadableStream<settings_v1_settings_pb.GetResponse>;

  get(
    request: settings_v1_settings_pb.GetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: settings_v1_settings_pb.GetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tb.settings.v1.Settings/Get',
        request,
        metadata || {},
        this.methodInfoGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tb.settings.v1.Settings/Get',
    request,
    metadata || {},
    this.methodInfoGet);
  }

}

