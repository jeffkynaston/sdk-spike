"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DocumentUploadMetadata = _interopRequireDefault(require("./DocumentUploadMetadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DocumentUpload model module.
 * @module model/DocumentUpload
 * @version 1.0.0
 */
var DocumentUpload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DocumentUpload</code>.
   * @alias module:model/DocumentUpload
   */
  function DocumentUpload() {
    _classCallCheck(this, DocumentUpload);

    DocumentUpload.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DocumentUpload, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DocumentUpload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentUpload} obj Optional instance to populate.
     * @return {module:model/DocumentUpload} The populated <code>DocumentUpload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DocumentUpload();

        if (data.hasOwnProperty('uploadURL')) {
          obj['uploadURL'] = _ApiClient["default"].convertToType(data['uploadURL'], 'String');
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _DocumentUploadMetadata["default"].constructFromObject(data['metadata']);
        }
      }

      return obj;
    }
  }]);

  return DocumentUpload;
}();
/**
 * @member {String} uploadURL
 */


DocumentUpload.prototype['uploadURL'] = undefined;
/**
 * @member {module:model/DocumentUploadMetadata} metadata
 */

DocumentUpload.prototype['metadata'] = undefined;
var _default = DocumentUpload;
exports["default"] = _default;