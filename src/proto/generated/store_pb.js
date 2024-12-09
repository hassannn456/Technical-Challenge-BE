// source: store.proto
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

var jspb = require("google-protobuf");
var goog = jspb;
var global = function () {
  if (this) {
    return this;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return Function("return this")();
}.call(null);

goog.exportSymbol("proto.store.Store", null, global);
goog.exportSymbol("proto.store.StoreRequest", null, global);
goog.exportSymbol("proto.store.StoreResponse", null, global);
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
proto.store.Store = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.store.Store, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.store.Store.displayName = "proto.store.Store";
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
proto.store.StoreRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.store.StoreRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.store.StoreRequest.displayName = "proto.store.StoreRequest";
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
proto.store.StoreResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.store.StoreResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.store.StoreResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.store.StoreResponse.displayName = "proto.store.StoreResponse";
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
  proto.store.Store.prototype.toObject = function (opt_includeInstance) {
    return proto.store.Store.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.store.Store} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.store.Store.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ""),
        name: jspb.Message.getFieldWithDefault(msg, 2, ""),
        merchantId: jspb.Message.getFieldWithDefault(msg, 3, ""),
        description: jspb.Message.getFieldWithDefault(msg, 4, ""),
        active: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
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
 * @return {!proto.store.Store}
 */
proto.store.Store.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.store.Store();
  return proto.store.Store.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.store.Store} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.store.Store}
 */
proto.store.Store.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setId(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setName(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setMerchantId(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setDescription(value);
        break;
      case 5:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setActive(value);
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
proto.store.Store.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.store.Store.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.store.Store} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.store.Store.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getMerchantId();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(5, f);
  }
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.store.Store.prototype.getId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.store.Store} returns this
 */
proto.store.Store.prototype.setId = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string name = 2;
 * @return {string}
 */
proto.store.Store.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * @param {string} value
 * @return {!proto.store.Store} returns this
 */
proto.store.Store.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string merchant_id = 3;
 * @return {string}
 */
proto.store.Store.prototype.getMerchantId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * @param {string} value
 * @return {!proto.store.Store} returns this
 */
proto.store.Store.prototype.setMerchantId = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string description = 4;
 * @return {string}
 */
proto.store.Store.prototype.getDescription = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};

/**
 * @param {string} value
 * @return {!proto.store.Store} returns this
 */
proto.store.Store.prototype.setDescription = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional bool active = 5;
 * @return {boolean}
 */
proto.store.Store.prototype.getActive = function () {
  return /** @type {boolean} */ (
    jspb.Message.getBooleanFieldWithDefault(this, 5, false)
  );
};

/**
 * @param {boolean} value
 * @return {!proto.store.Store} returns this
 */
proto.store.Store.prototype.setActive = function (value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
  proto.store.StoreRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.store.StoreRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.store.StoreRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.store.StoreRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        merchantId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.store.StoreRequest}
 */
proto.store.StoreRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.store.StoreRequest();
  return proto.store.StoreRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.store.StoreRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.store.StoreRequest}
 */
proto.store.StoreRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setMerchantId(value);
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
proto.store.StoreRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.store.StoreRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.store.StoreRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.store.StoreRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMerchantId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string merchant_id = 1;
 * @return {string}
 */
proto.store.StoreRequest.prototype.getMerchantId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.store.StoreRequest} returns this
 */
proto.store.StoreRequest.prototype.setMerchantId = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.store.StoreResponse.repeatedFields_ = [1];

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
  proto.store.StoreResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.store.StoreResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.store.StoreResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.store.StoreResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        storesList: jspb.Message.toObjectList(
          msg.getStoresList(),
          proto.store.Store.toObject,
          includeInstance
        ),
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
 * @return {!proto.store.StoreResponse}
 */
proto.store.StoreResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.store.StoreResponse();
  return proto.store.StoreResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.store.StoreResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.store.StoreResponse}
 */
proto.store.StoreResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.store.Store();
        reader.readMessage(
          value,
          proto.store.Store.deserializeBinaryFromReader
        );
        msg.addStores(value);
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
proto.store.StoreResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.store.StoreResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.store.StoreResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.store.StoreResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getStoresList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.store.Store.serializeBinaryToWriter
    );
  }
};

/**
 * repeated Store stores = 1;
 * @return {!Array<!proto.store.Store>}
 */
proto.store.StoreResponse.prototype.getStoresList = function () {
  return /** @type{!Array<!proto.store.Store>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.store.Store, 1)
  );
};

/**
 * @param {!Array<!proto.store.Store>} value
 * @return {!proto.store.StoreResponse} returns this
 */
proto.store.StoreResponse.prototype.setStoresList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.store.Store=} opt_value
 * @param {number=} opt_index
 * @return {!proto.store.Store}
 */
proto.store.StoreResponse.prototype.addStores = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.store.Store,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.store.StoreResponse} returns this
 */
proto.store.StoreResponse.prototype.clearStoresList = function () {
  return this.setStoresList([]);
};

goog.object.extend(exports, proto.store);