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

var _RecipientId = _interopRequireDefault(require("./RecipientId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentIntent model module.
 * @module model/PaymentIntent
 * @version 1.0.0
 */
var PaymentIntent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentIntent</code>.
   * @alias module:model/PaymentIntent
   */
  function PaymentIntent() {
    _classCallCheck(this, PaymentIntent);

    PaymentIntent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentIntent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaymentIntent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentIntent} obj Optional instance to populate.
     * @return {module:model/PaymentIntent} The populated <code>PaymentIntent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentIntent();

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

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('statusReasons')) {
          obj['statusReasons'] = _ApiClient["default"].convertToType(data['statusReasons'], [Object]);
        }

        if (data.hasOwnProperty('deliveryDate')) {
          obj['deliveryDate'] = _ApiClient["default"].convertToType(data['deliveryDate'], 'Date');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'Date');
        }

        if (data.hasOwnProperty('expiresAt')) {
          obj['expiresAt'] = _ApiClient["default"].convertToType(data['expiresAt'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return PaymentIntent;
}();
/**
 * @member {String} id
 */


PaymentIntent.prototype['id'] = undefined;
/**
 * @member {Array.<module:model/PaymentIntentFees>} fees
 */

PaymentIntent.prototype['fees'] = undefined;
/**
 * @member {module:model/AmountDetails} sourceAmount
 */

PaymentIntent.prototype['sourceAmount'] = undefined;
/**
 * @member {module:model/AmountDetails} targetAmount
 */

PaymentIntent.prototype['targetAmount'] = undefined;
/**
 * @member {module:model/PaymentMethodId} paymentMethod
 */

PaymentIntent.prototype['paymentMethod'] = undefined;
/**
 * @member {module:model/RecipientId} recipient
 */

PaymentIntent.prototype['recipient'] = undefined;
/**
 * @member {module:model/PayerId} payer
 */

PaymentIntent.prototype['payer'] = undefined;
/**
 * @member {module:model/PaymentDetails} details
 */

PaymentIntent.prototype['details'] = undefined;
/**
 * @member {module:model/PaymentIntent.StatusEnum} status
 */

PaymentIntent.prototype['status'] = undefined;
/**
 * @member {Array.<Object>} statusReasons
 */

PaymentIntent.prototype['statusReasons'] = undefined;
/**
 * @member {Date} deliveryDate
 */

PaymentIntent.prototype['deliveryDate'] = undefined;
/**
 * @member {Date} createdAt
 */

PaymentIntent.prototype['createdAt'] = undefined;
/**
 * @member {Date} expiresAt
 */

PaymentIntent.prototype['expiresAt'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

PaymentIntent['StatusEnum'] = {
  /**
   * value: "CAPTURABLE"
   * @const
   */
  "CAPTURABLE": "CAPTURABLE",

  /**
   * value: "CAPTURED"
   * @const
   */
  "CAPTURED": "CAPTURED",

  /**
   * value: "EXPIRED"
   * @const
   */
  "EXPIRED": "EXPIRED",

  /**
   * value: "UNCAPTURABLE"
   * @const
   */
  "UNCAPTURABLE": "UNCAPTURABLE"
};
var _default = PaymentIntent;
exports["default"] = _default;