/**
 * @fileoverview gRPC-Web generated client stub for tb.admin.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.tb = {};
proto.tb.admin = {};
proto.tb.admin.v1 = require('./admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tb.admin.v1.AdminClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tb.admin.v1.AdminPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tb.admin.v1.ServerInfoRequest,
 *   !proto.tb.admin.v1.ServerInfoResponse>}
 */
const methodDescriptor_Admin_ServerInfo = new grpc.web.MethodDescriptor(
  '/tb.admin.v1.Admin/ServerInfo',
  grpc.web.MethodType.UNARY,
  proto.tb.admin.v1.ServerInfoRequest,
  proto.tb.admin.v1.ServerInfoResponse,
  /**
   * @param {!proto.tb.admin.v1.ServerInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tb.admin.v1.ServerInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tb.admin.v1.ServerInfoRequest,
 *   !proto.tb.admin.v1.ServerInfoResponse>}
 */
const methodInfo_Admin_ServerInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tb.admin.v1.ServerInfoResponse,
  /**
   * @param {!proto.tb.admin.v1.ServerInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tb.admin.v1.ServerInfoResponse.deserializeBinary
);


/**
 * @param {!proto.tb.admin.v1.ServerInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tb.admin.v1.ServerInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tb.admin.v1.ServerInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tb.admin.v1.AdminClient.prototype.serverInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tb.admin.v1.Admin/ServerInfo',
      request,
      metadata || {},
      methodDescriptor_Admin_ServerInfo,
      callback);
};


/**
 * @param {!proto.tb.admin.v1.ServerInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tb.admin.v1.ServerInfoResponse>}
 *     Promise that resolves to the response
 */
proto.tb.admin.v1.AdminPromiseClient.prototype.serverInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tb.admin.v1.Admin/ServerInfo',
      request,
      metadata || {},
      methodDescriptor_Admin_ServerInfo);
};


module.exports = proto.tb.admin.v1;

