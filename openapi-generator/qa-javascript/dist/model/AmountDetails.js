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
 * The AmountDetails model module.
 * @module model/AmountDetails
 * @version 1.0.0
 */
var AmountDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AmountDetails</code>.
   * Amount that will be credited to Recipient
   * @alias module:model/AmountDetails
   * @param value {Number} Value of the currency between 1 and 99999999.99
   * @param currency {module:model/AmountDetails.CurrencyEnum} Currency value
   */
  function AmountDetails(value, currency) {
    _classCallCheck(this, AmountDetails);

    AmountDetails.initialize(this, value, currency);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AmountDetails, null, [{
    key: "initialize",
    value: function initialize(obj, value, currency) {
      obj['value'] = value;
      obj['currency'] = currency;
    }
    /**
     * Constructs a <code>AmountDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AmountDetails} obj Optional instance to populate.
     * @return {module:model/AmountDetails} The populated <code>AmountDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AmountDetails();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AmountDetails;
}();
/**
 * Value of the currency between 1 and 99999999.99
 * @member {Number} value
 */


AmountDetails.prototype['value'] = undefined;
/**
 * Currency value
 * @member {module:model/AmountDetails.CurrencyEnum} currency
 */

AmountDetails.prototype['currency'] = undefined;
/**
 * Allowed values for the <code>currency</code> property.
 * @enum {String}
 * @readonly
 */

AmountDetails['CurrencyEnum'] = {
  /**
   * value: "USD"
   * @const
   */
  "USD": "USD"
};
var _default = AmountDetails;
exports["default"] = _default;