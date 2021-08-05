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
 * The PaymentDetails model module.
 * @module model/PaymentDetails
 * @version 1.0.0
 */
var PaymentDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentDetails</code>.
   * @alias module:model/PaymentDetails
   */
  function PaymentDetails() {
    _classCallCheck(this, PaymentDetails);

    PaymentDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaymentDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentDetails} obj Optional instance to populate.
     * @return {module:model/PaymentDetails} The populated <code>PaymentDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentDetails();

        if (data.hasOwnProperty('accountName')) {
          obj['accountName'] = _ApiClient["default"].convertToType(data['accountName'], 'String');
        }

        if (data.hasOwnProperty('accountNumber')) {
          obj['accountNumber'] = _ApiClient["default"].convertToType(data['accountNumber'], 'String');
        }

        if (data.hasOwnProperty('memo')) {
          obj['memo'] = _ApiClient["default"].convertToType(data['memo'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PaymentDetails;
}();
/**
 * TBD
 * @member {String} accountName
 */


PaymentDetails.prototype['accountName'] = undefined;
/**
 * TBD
 * @member {String} accountNumber
 */

PaymentDetails.prototype['accountNumber'] = undefined;
/**
 * TBD
 * @member {String} memo
 */

PaymentDetails.prototype['memo'] = undefined;
var _default = PaymentDetails;
exports["default"] = _default;