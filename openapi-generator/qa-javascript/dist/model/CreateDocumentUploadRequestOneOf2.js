"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RecipientId = _interopRequireDefault(require("./RecipientId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateDocumentUploadRequestOneOf2 model module.
 * @module model/CreateDocumentUploadRequestOneOf2
 * @version 1.0.0
 */
var CreateDocumentUploadRequestOneOf2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateDocumentUploadRequestOneOf2</code>.
   * @alias module:model/CreateDocumentUploadRequestOneOf2
   */
  function CreateDocumentUploadRequestOneOf2() {
    _classCallCheck(this, CreateDocumentUploadRequestOneOf2);

    CreateDocumentUploadRequestOneOf2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateDocumentUploadRequestOneOf2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateDocumentUploadRequestOneOf2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateDocumentUploadRequestOneOf2} obj Optional instance to populate.
     * @return {module:model/CreateDocumentUploadRequestOneOf2} The populated <code>CreateDocumentUploadRequestOneOf2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateDocumentUploadRequestOneOf2();

        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _RecipientId["default"].constructFromObject(data['recipient']);
        }
      }

      return obj;
    }
  }]);

  return CreateDocumentUploadRequestOneOf2;
}();
/**
 * @member {module:model/RecipientId} recipient
 */


CreateDocumentUploadRequestOneOf2.prototype['recipient'] = undefined;
var _default = CreateDocumentUploadRequestOneOf2;
exports["default"] = _default;