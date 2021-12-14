import * as jspb from 'google-protobuf'



export class ServerInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerInfoRequest): ServerInfoRequest.AsObject;
  static serializeBinaryToWriter(message: ServerInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerInfoRequest;
  static deserializeBinaryFromReader(message: ServerInfoRequest, reader: jspb.BinaryReader): ServerInfoRequest;
}

export namespace ServerInfoRequest {
  export type AsObject = {
  }
}

export class ServerInfoResponse extends jspb.Message {
  getHostName(): string;
  setHostName(value: string): ServerInfoResponse;

  getVersion(): string;
  setVersion(value: string): ServerInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServerInfoResponse): ServerInfoResponse.AsObject;
  static serializeBinaryToWriter(message: ServerInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerInfoResponse;
  static deserializeBinaryFromReader(message: ServerInfoResponse, reader: jspb.BinaryReader): ServerInfoResponse;
}

export namespace ServerInfoResponse {
  export type AsObject = {
    hostName: string,
    version: string,
  }
}

