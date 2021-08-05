"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaymentId = _interopRequireDefault(require("./PaymentId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateDocumentUploadRequestOneOf1 model module.
 * @module model/CreateDocumentUploadRequestOneOf1
 * @version 1.0.0
 */
var CreateDocumentUploadRequestOneOf1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateDocumentUploadRequestOneOf1</code>.
   * @alias module:model/CreateDocumentUploadRequestOneOf1
   */
  function CreateDocumentUploadRequestOneOf1() {
    _classCallCheck(this, CreateDocumentUploadRequestOneOf1);

    CreateDocumentUploadRequestOneOf1.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateDocumentUploadRequestOneOf1, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateDocumentUploadRequestOneOf1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateDocumentUploadRequestOneOf1} obj Optional instance to populate.
     * @return {module:model/CreateDocumentUploadRequestOneOf1} The populated <code>CreateDocumentUploadRequestOneOf1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateDocumentUploadRequestOneOf1();

        if (data.hasOwnProperty('payment')) {
          obj['payment'] = _PaymentId["default"].constructFromObject(data['payment']);
        }
      }

      return obj;
    }
  }]);

  return CreateDocumentUploadRequestOneOf1;
}();
/**
 * @member {module:model/PaymentId} payment
 */


CreateDocumentUploadRequestOneOf1.prototype['payment'] = undefined;
var _default = CreateDocumentUploadRequestOneOf1;
exports["default"] = _default;