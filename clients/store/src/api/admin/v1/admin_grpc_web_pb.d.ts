import * as grpcWeb from 'grpc-web';

import * as admin_v1_admin_pb from '../../admin/v1/admin_pb';


export class AdminClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  serverInfo(
    request: admin_v1_admin_pb.ServerInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: admin_v1_admin_pb.ServerInfoResponse) => void
  ): grpcWeb.ClientReadableStream<admin_v1_admin_pb.ServerInfoResponse>;

}

export class AdminPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  serverInfo(
    request: admin_v1_admin_pb.ServerInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_v1_admin_pb.ServerInfoResponse>;

}

