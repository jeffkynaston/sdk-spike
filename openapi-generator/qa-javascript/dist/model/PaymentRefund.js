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
 * The PaymentRefund model module.
 * @module model/PaymentRefund
 * @version 1.0.0
 */
var PaymentRefund = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentRefund</code>.
   * @alias module:model/PaymentRefund
   */
  function PaymentRefund() {
    _classCallCheck(this, PaymentRefund);

    PaymentRefund.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentRefund, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaymentRefund</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentRefund} obj Optional instance to populate.
     * @return {module:model/PaymentRefund} The populated <code>PaymentRefund</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentRefund();

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PaymentRefund;
}();
/**
 * Representation of whether the Payment was successfully refunded or not
 * @member {module:model/PaymentRefund.StatusEnum} status
 */


PaymentRefund.prototype['status'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

PaymentRefund['StatusEnum'] = {
  /**
   * value: "REFUNDED"
   * @const
   */
  "REFUNDED": "REFUNDED",

  /**
   * value: "REFUND_FAILED"
   * @const
   */
  "REFUND_FAILED": "REFUND_FAILED"
};
var _default = PaymentRefund;
exports["default"] = _default;