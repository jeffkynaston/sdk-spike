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
 * The PaymentRefundRequest model module.
 * @module model/PaymentRefundRequest
 * @version 1.0.0
 */
var PaymentRefundRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentRefundRequest</code>.
   * @alias module:model/PaymentRefundRequest
   */
  function PaymentRefundRequest() {
    _classCallCheck(this, PaymentRefundRequest);

    PaymentRefundRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentRefundRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaymentRefundRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentRefundRequest} obj Optional instance to populate.
     * @return {module:model/PaymentRefundRequest} The populated <code>PaymentRefundRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentRefundRequest();

        if (data.hasOwnProperty('payerId')) {
          obj['payerId'] = _ApiClient["default"].convertToType(data['payerId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PaymentRefundRequest;
}();
/**
 * The ID of the Payer the Payment to refund belongs to
 * @member {String} payerId
 */


PaymentRefundRequest.prototype['payerId'] = undefined;
var _default = PaymentRefundRequest;
exports["default"] = _default;