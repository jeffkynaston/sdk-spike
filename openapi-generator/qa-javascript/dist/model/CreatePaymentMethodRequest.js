"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfCardBankAccount = _interopRequireDefault(require("./OneOfCardBankAccount"));

var _OneOfpayerId = _interopRequireDefault(require("./OneOfpayerId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreatePaymentMethodRequest model module.
 * @module model/CreatePaymentMethodRequest
 * @version 1.0.0
 */
var CreatePaymentMethodRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatePaymentMethodRequest</code>.
   * @alias module:model/CreatePaymentMethodRequest
   * @param type {module:model/CreatePaymentMethodRequest.TypeEnum} 
   */
  function CreatePaymentMethodRequest(type) {
    _classCallCheck(this, CreatePaymentMethodRequest);

    CreatePaymentMethodRequest.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatePaymentMethodRequest, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>CreatePaymentMethodRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePaymentMethodRequest} obj Optional instance to populate.
     * @return {module:model/CreatePaymentMethodRequest} The populated <code>CreatePaymentMethodRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePaymentMethodRequest();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], _OneOfCardBankAccount["default"]);
        }

        if (data.hasOwnProperty('payer')) {
          obj['payer'] = _ApiClient["default"].convertToType(data['payer'], _OneOfpayerId["default"]);
        }
      }

      return obj;
    }
  }]);

  return CreatePaymentMethodRequest;
}();
/**
 * @member {module:model/CreatePaymentMethodRequest.TypeEnum} type
 */


CreatePaymentMethodRequest.prototype['type'] = undefined;
/**
 * @member {module:model/OneOfCardBankAccount} data
 */

CreatePaymentMethodRequest.prototype['data'] = undefined;
/**
 * @member {module:model/OneOfpayerId} payer
 */

CreatePaymentMethodRequest.prototype['payer'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

CreatePaymentMethodRequest['TypeEnum'] = {
  /**
   * value: "CARD"
   * @const
   */
  "CARD": "CARD",

  /**
   * value: "BANK_ACCOUNT"
   * @const
   */
  "BANK_ACCOUNT": "BANK_ACCOUNT"
};
var _default = CreatePaymentMethodRequest;
exports["default"] = _default;