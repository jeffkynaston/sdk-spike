"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AmountDetails = _interopRequireDefault(require("./AmountDetails"));

var _PayerId = _interopRequireDefault(require("./PayerId"));

var _PaymentDetails = _interopRequireDefault(require("./PaymentDetails"));

var _PaymentIntentFees = _interopRequireDefault(require("./PaymentIntentFees"));

var _PaymentMethodId = _interopRequireDefault(require("./PaymentMethodId"));

var _PaymentStatus = _interopRequireDefault(require("./PaymentStatus"));

var _RecipientId = _interopRequireDefault(require("./RecipientId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Payment model module.
 * @module model/Payment
 * @version 1.0.0
 */
var Payment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Payment</code>.
   * @alias module:model/Payment
   */
  function Payment() {
    _classCallCheck(this, Payment);

    Payment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Payment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Payment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Payment} obj Optional instance to populate.
     * @return {module:model/Payment} The populated <code>Payment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Payment();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('fees')) {
          obj['fees'] = _ApiClient["default"].convertToType(data['fees'], [_PaymentIntentFees["default"]]);
        }

        if (data.hasOwnProperty('sourceAmount')) {
          obj['sourceAmount'] = _ApiClient["default"].convertToType(data['sourceAmount'], _AmountDetails["default"]);
        }

        if (data.hasOwnProperty('targetAmount')) {
          obj['targetAmount'] = _ApiClient["default"].convertToType(data['targetAmount'], _AmountDetails["default"]);
        }

        if (data.hasOwnProperty('paymentMethod')) {
          obj['paymentMethod'] = _PaymentMethodId["default"].constructFromObject(data['paymentMethod']);
        }

        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _RecipientId["default"].constructFromObject(data['recipient']);
        }

        if (data.hasOwnProperty('payer')) {
          obj['payer'] = _PayerId["default"].constructFromObject(data['payer']);
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _PaymentDetails["default"].constructFromObject(data['details']);
        }

        if (data.hasOwnProperty('deliveryDate')) {
          obj['deliveryDate'] = _ApiClient["default"].convertToType(data['deliveryDate'], 'Date');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], _PaymentStatus["default"]);
        }

        if (data.hasOwnProperty('sourceDescriptor')) {
          obj['sourceDescriptor'] = _ApiClient["default"].convertToType(data['sourceDescriptor'], 'String');
        }

        if (data.hasOwnProperty('targetDescriptor')) {
          obj['targetDescriptor'] = _ApiClient["default"].convertToType(data['targetDescriptor'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Payment;
}();
/**
 * @member {String} id
 */


Payment.prototype['id'] = undefined;
/**
 * @member {Array.<module:model/PaymentIntentFees>} fees
 */

Payment.prototype['fees'] = undefined;
/**
 * @member {module:model/AmountDetails} sourceAmount
 */

Payment.prototype['sourceAmount'] = undefined;
/**
 * @member {module:model/AmountDetails} targetAmount
 */

Payment.prototype['targetAmount'] = undefined;
/**
 * @member {module:model/PaymentMethodId} paymentMethod
 */

Payment.prototype['paymentMethod'] = undefined;
/**
 * @member {module:model/RecipientId} recipient
 */

Payment.prototype['recipient'] = undefined;
/**
 * @member {module:model/PayerId} payer
 */

Payment.prototype['payer'] = undefined;
/**
 * @member {module:model/PaymentDetails} details
 */

Payment.prototype['details'] = undefined;
/**
 * @member {Date} deliveryDate
 */

Payment.prototype['deliveryDate'] = undefined;
/**
 * @member {Date} createdAt
 */

Payment.prototype['createdAt'] = undefined;
/**
 * @member {module:model/PaymentStatus} status
 */

Payment.prototype['status'] = undefined;
/**
 * @member {String} sourceDescriptor
 */

Payment.prototype['sourceDescriptor'] = undefined;
/**
 * @member {String} targetDescriptor
 */

Payment.prototype['targetDescriptor'] = undefined;
var _default = Payment;
exports["default"] = _default;