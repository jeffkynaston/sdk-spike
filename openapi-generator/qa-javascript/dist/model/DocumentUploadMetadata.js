"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DocumentUploadMetadata model module.
 * @module model/DocumentUploadMetadata
 * @version 1.0.0
 */
var DocumentUploadMetadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DocumentUploadMetadata</code>.
   * @alias module:model/DocumentUploadMetadata
   */
  function DocumentUploadMetadata() {
    _classCallCheck(this, DocumentUploadMetadata);

    DocumentUploadMetadata.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DocumentUploadMetadata, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DocumentUploadMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentUploadMetadata} obj Optional instance to populate.
     * @return {module:model/DocumentUploadMetadata} The populated <code>DocumentUploadMetadata</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DocumentUploadMetadata();

        if (data.hasOwnProperty('Key')) {
          obj['Key'] = _ApiClient["default"].convertToType(data['Key'], 'String');
        }

        if (data.hasOwnProperty('success_action_status')) {
          obj['success_action_status'] = _ApiClient["default"].convertToType(data['success_action_status'], 'String');
        }

        if (data.hasOwnProperty('bucket')) {
          obj['bucket'] = _ApiClient["default"].convertToType(data['bucket'], 'String');
        }

        if (data.hasOwnProperty('X-Amz-Algorithm')) {
          obj['X-Amz-Algorithm'] = _ApiClient["default"].convertToType(data['X-Amz-Algorithm'], 'String');
        }

        if (data.hasOwnProperty('X-Amz-Credential')) {
          obj['X-Amz-Credential'] = _ApiClient["default"].convertToType(data['X-Amz-Credential'], 'String');
        }

        if (data.hasOwnProperty('X-Amz-Date')) {
          obj['X-Amz-Date'] = _ApiClient["default"].convertToType(data['X-Amz-Date'], 'String');
        }

        if (data.hasOwnProperty('X-Amz-Security-Token')) {
          obj['X-Amz-Security-Token'] = _ApiClient["default"].convertToType(data['X-Amz-Security-Token'], 'String');
        }

        if (data.hasOwnProperty('Policy')) {
          obj['Policy'] = _ApiClient["default"].convertToType(data['Policy'], 'String');
        }

        if (data.hasOwnProperty('X-Amz-Signature')) {
          obj['X-Amz-Signature'] = _ApiClient["default"].convertToType(data['X-Amz-Signature'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DocumentUploadMetadata;
}();
/**
 * @member {String} Key
 */


DocumentUploadMetadata.prototype['Key'] = undefined;
/**
 * @member {String} success_action_status
 */

DocumentUploadMetadata.prototype['success_action_status'] = undefined;
/**
 * @member {String} bucket
 */

DocumentUploadMetadata.prototype['bucket'] = undefined;
/**
 * @member {String} X-Amz-Algorithm
 */

DocumentUploadMetadata.prototype['X-Amz-Algorithm'] = undefined;
/**
 * @member {String} X-Amz-Credential
 */

DocumentUploadMetadata.prototype['X-Amz-Credential'] = undefined;
/**
 * @member {String} X-Amz-Date
 */

DocumentUploadMetadata.prototype['X-Amz-Date'] = undefined;
/**
 * @member {String} X-Amz-Security-Token
 */

DocumentUploadMetadata.prototype['X-Amz-Security-Token'] = undefined;
/**
 * @member {String} Policy
 */

DocumentUploadMetadata.prototype['Policy'] = undefined;
/**
 * @member {String} X-Amz-Signature
 */

DocumentUploadMetadata.prototype['X-Amz-Signature'] = undefined;
var _default = DocumentUploadMetadata;
exports["default"] = _default;