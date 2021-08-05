"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AmountDetails = _interopRequireDefault(require("./AmountDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentIntentFees model module.
 * @module model/PaymentIntentFees
 * @version 1.0.0
 */
var PaymentIntentFees = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentIntentFees</code>.
   * @alias module:model/PaymentIntentFees
   */
  function PaymentIntentFees() {
    _classCallCheck(this, PaymentIntentFees);

    PaymentIntentFees.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentIntentFees, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaymentIntentFees</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentIntentFees} obj Optional instance to populate.
     * @return {module:model/PaymentIntentFees} The populated <code>PaymentIntentFees</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentIntentFees();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], _AmountDetails["default"]);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('rate')) {
          obj['rate'] = _ApiClient["default"].convertToType(data['rate'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PaymentIntentFees;
}();
/**
 * @member {module:model/AmountDetails} amount
 */


PaymentIntentFees.prototype['amount'] = undefined;
/**
 * The type of fee applied to the payment
 * @member {module:model/PaymentIntentFees.TypeEnum} type
 */

PaymentIntentFees.prototype['type'] = undefined;
/**
 * The rate of the fee assessed, presented in percentage.
 * @member {String} rate
 */

PaymentIntentFees.prototype['rate'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

PaymentIntentFees['TypeEnum'] = {
  /**
   * value: "PLASTIQ_SERVICE_FEE"
   * @const
   */
  "SERVICE_FEE": "PLASTIQ_SERVICE_FEE",

  /**
   * value: "PLASTIQ_CROSS_BORDER_FEE"
   * @const
   */
  "CROSS_BORDER_FEE": "PLASTIQ_CROSS_BORDER_FEE"
};
var _default = PaymentIntentFees;
exports["default"] = _default;