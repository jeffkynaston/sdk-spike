"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfCardResponseBankAccountResponse = _interopRequireDefault(require("./OneOfCardResponseBankAccountResponse"));

var _PaymentMethodStatus = _interopRequireDefault(require("./PaymentMethodStatus"));

var _StatusReason = _interopRequireDefault(require("./StatusReason"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentMethod model module.
 * @module model/PaymentMethod
 * @version 1.0.0
 */
var PaymentMethod = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentMethod</code>.
   * @alias module:model/PaymentMethod
   */
  function PaymentMethod() {
    _classCallCheck(this, PaymentMethod);

    PaymentMethod.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentMethod, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaymentMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentMethod} obj Optional instance to populate.
     * @return {module:model/PaymentMethod} The populated <code>PaymentMethod</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentMethod();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], _OneOfCardResponseBankAccountResponse["default"]);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], _PaymentMethodStatus["default"]);
        }

        if (data.hasOwnProperty('statusReasons')) {
          obj['statusReasons'] = _ApiClient["default"].convertToType(data['statusReasons'], [_StatusReason["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PaymentMethod;
}();
/**
 * @member {String} id
 */


PaymentMethod.prototype['id'] = undefined;
/**
 * @member {module:model/PaymentMethod.TypeEnum} type
 */

PaymentMethod.prototype['type'] = undefined;
/**
 * @member {module:model/OneOfCardResponseBankAccountResponse} data
 */

PaymentMethod.prototype['data'] = undefined;
/**
 * @member {module:model/PaymentMethodStatus} status
 */

PaymentMethod.prototype['status'] = undefined;
/**
 * @member {Array.<module:model/StatusReason>} statusReasons
 */

PaymentMethod.prototype['statusReasons'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

PaymentMethod['TypeEnum'] = {
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
var _default = PaymentMethod;
exports["default"] = _default;