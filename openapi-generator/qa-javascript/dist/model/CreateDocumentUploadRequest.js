"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateDocumentUploadRequestOneOf = _interopRequireDefault(require("./CreateDocumentUploadRequestOneOf"));

var _CreateDocumentUploadRequestOneOf2 = _interopRequireDefault(require("./CreateDocumentUploadRequestOneOf1"));

var _CreateDocumentUploadRequestOneOf3 = _interopRequireDefault(require("./CreateDocumentUploadRequestOneOf2"));

var _PayerId = _interopRequireDefault(require("./PayerId"));

var _PaymentId = _interopRequireDefault(require("./PaymentId"));

var _PaymentIntentId = _interopRequireDefault(require("./PaymentIntentId"));

var _RecipientId = _interopRequireDefault(require("./RecipientId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateDocumentUploadRequest model module.
 * @module model/CreateDocumentUploadRequest
 * @version 1.0.0
 */
var CreateDocumentUploadRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateDocumentUploadRequest</code>.
   * @alias module:model/CreateDocumentUploadRequest
   * @implements module:model/CreateDocumentUploadRequestOneOf
   * @implements module:model/CreateDocumentUploadRequestOneOf1
   * @implements module:model/CreateDocumentUploadRequestOneOf2
   */
  function CreateDocumentUploadRequest() {
    _classCallCheck(this, CreateDocumentUploadRequest);

    _CreateDocumentUploadRequestOneOf["default"].initialize(this);

    _CreateDocumentUploadRequestOneOf2["default"].initialize(this);

    _CreateDocumentUploadRequestOneOf3["default"].initialize(this);

    CreateDocumentUploadRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateDocumentUploadRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {
      obj['payer'] = payer;
      obj['type'] = type;
      obj['fileType'] = fileType;
      obj['filename'] = filename;
    }
    /**
     * Constructs a <code>CreateDocumentUploadRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateDocumentUploadRequest} obj Optional instance to populate.
     * @return {module:model/CreateDocumentUploadRequest} The populated <code>CreateDocumentUploadRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateDocumentUploadRequest();

        _CreateDocumentUploadRequestOneOf["default"].constructFromObject(data, obj);

        _CreateDocumentUploadRequestOneOf2["default"].constructFromObject(data, obj);

        _CreateDocumentUploadRequestOneOf3["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('payer')) {
          obj['payer'] = _PayerId["default"].constructFromObject(data['payer']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('fileType')) {
          obj['fileType'] = _ApiClient["default"].convertToType(data['fileType'], 'String');
        }

        if (data.hasOwnProperty('filename')) {
          obj['filename'] = _ApiClient["default"].convertToType(data['filename'], 'String');
        }

        if (data.hasOwnProperty('paymentIntent')) {
          obj['paymentIntent'] = _PaymentIntentId["default"].constructFromObject(data['paymentIntent']);
        }

        if (data.hasOwnProperty('payment')) {
          obj['payment'] = _PaymentId["default"].constructFromObject(data['payment']);
        }

        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _RecipientId["default"].constructFromObject(data['recipient']);
        }
      }

      return obj;
    }
  }]);

  return CreateDocumentUploadRequest;
}();
/**
 * @member {module:model/PayerId} payer
 */


CreateDocumentUploadRequest.prototype['payer'] = undefined;
/**
 * @member {module:model/CreateDocumentUploadRequest.TypeEnum} type
 */

CreateDocumentUploadRequest.prototype['type'] = undefined;
/**
 * @member {module:model/CreateDocumentUploadRequest.FileTypeEnum} fileType
 */

CreateDocumentUploadRequest.prototype['fileType'] = undefined;
/**
 * @member {String} filename
 */

CreateDocumentUploadRequest.prototype['filename'] = undefined;
/**
 * @member {module:model/PaymentIntentId} paymentIntent
 */

CreateDocumentUploadRequest.prototype['paymentIntent'] = undefined;
/**
 * @member {module:model/PaymentId} payment
 */

CreateDocumentUploadRequest.prototype['payment'] = undefined;
/**
 * @member {module:model/RecipientId} recipient
 */

CreateDocumentUploadRequest.prototype['recipient'] = undefined; // Implement CreateDocumentUploadRequestOneOf interface:

/**
 * @member {module:model/PaymentIntentId} paymentIntent
 */

_CreateDocumentUploadRequestOneOf["default"].prototype['paymentIntent'] = undefined; // Implement CreateDocumentUploadRequestOneOf1 interface:

/**
 * @member {module:model/PaymentId} payment
 */

_CreateDocumentUploadRequestOneOf2["default"].prototype['payment'] = undefined; // Implement CreateDocumentUploadRequestOneOf2 interface:

/**
 * @member {module:model/RecipientId} recipient
 */

_CreateDocumentUploadRequestOneOf3["default"].prototype['recipient'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

CreateDocumentUploadRequest['TypeEnum'] = {
  /**
   * value: "INVOICE"
   * @const
   */
  "INVOICE": "INVOICE"
};
/**
 * Allowed values for the <code>fileType</code> property.
 * @enum {String}
 * @readonly
 */

CreateDocumentUploadRequest['FileTypeEnum'] = {
  /**
   * value: "doc"
   * @const
   */
  "doc": "doc",

  /**
   * value: "docx"
   * @const
   */
  "docx": "docx",

  /**
   * value: "gif"
   * @const
   */
  "gif": "gif",

  /**
   * value: "jpeg"
   * @const
   */
  "jpeg": "jpeg",

  /**
   * value: "jpg"
   * @const
   */
  "jpg": "jpg",

  /**
   * value: "pdf"
   * @const
   */
  "pdf": "pdf",

  /**
   * value: "xls"
   * @const
   */
  "xls": "xls",

  /**
   * value: "xlsx"
   * @const
   */
  "xlsx": "xlsx"
};
var _default = CreateDocumentUploadRequest;
exports["default"] = _default;