// source: store/v1/store.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.tb.store.v1.GetSettingsRequest', null, global);
goog.exportSymbol('proto.tb.store.v1.GetSettingsResponse', null, global);
goog.exportSymbol('proto.tb.store.v1.GetSettingsResponse.SalesState', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tb.store.v1.GetSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tb.store.v1.GetSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tb.store.v1.GetSettingsRequest.displayName = 'proto.tb.store.v1.GetSettingsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tb.store.v1.GetSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tb.store.v1.GetSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tb.store.v1.GetSettingsResponse.displayName = 'proto.tb.store.v1.GetSettingsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tb.store.v1.GetSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tb.store.v1.GetSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tb.store.v1.GetSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tb.store.v1.GetSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tb.store.v1.GetSettingsRequest}
 */
proto.tb.store.v1.GetSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tb.store.v1.GetSettingsRequest;
  return proto.tb.store.v1.GetSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tb.store.v1.GetSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tb.store.v1.GetSettingsRequest}
 */
proto.tb.store.v1.GetSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tb.store.v1.GetSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tb.store.v1.GetSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tb.store.v1.GetSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tb.store.v1.GetSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tb.store.v1.GetSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tb.store.v1.GetSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tb.store.v1.GetSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tb.store.v1.GetSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxParticipants: jspb.Message.getFieldWithDefault(msg, 1, 0),
    salesDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    salesOpenAt: (f = msg.getSalesOpenAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    salesState: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tb.store.v1.GetSettingsResponse}
 */
proto.tb.store.v1.GetSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tb.store.v1.GetSettingsResponse;
  return proto.tb.store.v1.GetSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tb.store.v1.GetSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tb.store.v1.GetSettingsResponse}
 */
proto.tb.store.v1.GetSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxParticipants(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSalesDisabled(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSalesOpenAt(value);
      break;
    case 4:
      var value = /** @type {!proto.tb.store.v1.GetSettingsResponse.SalesState} */ (reader.readEnum());
      msg.setSalesState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tb.store.v1.GetSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tb.store.v1.GetSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tb.store.v1.GetSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tb.store.v1.GetSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxParticipants();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSalesDisabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSalesOpenAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSalesState();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.tb.store.v1.GetSettingsResponse.SalesState = {
  UNKNOWN: 0,
  DISABLED: 1,
  BEFORE_OPEN: 2,
  OPEN: 3,
  SOLD_OUT: 4
};

/**
 * optional int64 max_participants = 1;
 * @return {number}
 */
proto.tb.store.v1.GetSettingsResponse.prototype.getMaxParticipants = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tb.store.v1.GetSettingsResponse} returns this
 */
proto.tb.store.v1.GetSettingsResponse.prototype.setMaxParticipants = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool sales_disabled = 2;
 * @return {boolean}
 */
proto.tb.store.v1.GetSettingsResponse.prototype.getSalesDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tb.store.v1.GetSettingsResponse} returns this
 */
proto.tb.store.v1.GetSettingsResponse.prototype.setSalesDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp sales_open_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tb.store.v1.GetSettingsResponse.prototype.getSalesOpenAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tb.store.v1.GetSettingsResponse} returns this
*/
proto.tb.store.v1.GetSettingsResponse.prototype.setSalesOpenAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tb.store.v1.GetSettingsResponse} returns this
 */
proto.tb.store.v1.GetSettingsResponse.prototype.clearSalesOpenAt = function() {
  return this.setSalesOpenAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tb.store.v1.GetSettingsResponse.prototype.hasSalesOpenAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SalesState sales_state = 4;
 * @return {!proto.tb.store.v1.GetSettingsResponse.SalesState}
 */
proto.tb.store.v1.GetSettingsResponse.prototype.getSalesState = function() {
  return /** @type {!proto.tb.store.v1.GetSettingsResponse.SalesState} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.tb.store.v1.GetSettingsResponse.SalesState} value
 * @return {!proto.tb.store.v1.GetSettingsResponse} returns this
 */
proto.tb.store.v1.GetSettingsResponse.prototype.setSalesState = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


goog.object.extend(exports, proto.tb.store.v1);
