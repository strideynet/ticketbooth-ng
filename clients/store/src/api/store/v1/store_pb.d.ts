import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class GetSettingsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSettingsRequest): GetSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: GetSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSettingsRequest;
  static deserializeBinaryFromReader(message: GetSettingsRequest, reader: jspb.BinaryReader): GetSettingsRequest;
}

export namespace GetSettingsRequest {
  export type AsObject = {
  }
}

export class GetSettingsResponse extends jspb.Message {
  getMaxParticipants(): number;
  setMaxParticipants(value: number): GetSettingsResponse;

  getSalesDisabled(): boolean;
  setSalesDisabled(value: boolean): GetSettingsResponse;

  getSalesOpenAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSalesOpenAt(value?: google_protobuf_timestamp_pb.Timestamp): GetSettingsResponse;
  hasSalesOpenAt(): boolean;
  clearSalesOpenAt(): GetSettingsResponse;

  getSalesState(): GetSettingsResponse.SalesState;
  setSalesState(value: GetSettingsResponse.SalesState): GetSettingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSettingsResponse): GetSettingsResponse.AsObject;
  static serializeBinaryToWriter(message: GetSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSettingsResponse;
  static deserializeBinaryFromReader(message: GetSettingsResponse, reader: jspb.BinaryReader): GetSettingsResponse;
}

export namespace GetSettingsResponse {
  export type AsObject = {
    maxParticipants: number,
    salesDisabled: boolean,
    salesOpenAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    salesState: GetSettingsResponse.SalesState,
  }

  export enum SalesState { 
    UNKNOWN = 0,
    DISABLED = 1,
    BEFORE_OPEN = 2,
    OPEN = 3,
    SOLD_OUT = 4,
  }
}

