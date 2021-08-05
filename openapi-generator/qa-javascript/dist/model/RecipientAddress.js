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
 * The RecipientAddress model module.
 * @module model/RecipientAddress
 * @version 1.0.0
 */
var RecipientAddress = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RecipientAddress</code>.
   * @alias module:model/RecipientAddress
   * @param line1 {String} Address line 1 (e.g., street, PO Box, or company name).
   * @param country {String} Two-letter country code (ISO 3166-1 alpha-2).
   */
  function RecipientAddress(line1, country) {
    _classCallCheck(this, RecipientAddress);

    RecipientAddress.initialize(this, line1, country);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RecipientAddress, null, [{
    key: "initialize",
    value: function initialize(obj, line1, country) {
      obj['line1'] = line1;
      obj['country'] = country;
    }
    /**
     * Constructs a <code>RecipientAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecipientAddress} obj Optional instance to populate.
     * @return {module:model/RecipientAddress} The populated <code>RecipientAddress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RecipientAddress();

        if (data.hasOwnProperty('line1')) {
          obj['line1'] = _ApiClient["default"].convertToType(data['line1'], 'String');
        }

        if (data.hasOwnProperty('line2')) {
          obj['line2'] = _ApiClient["default"].convertToType(data['line2'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('postalCode')) {
          obj['postalCode'] = _ApiClient["default"].convertToType(data['postalCode'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RecipientAddress;
}();
/**
 * Address line 1 (e.g., street, PO Box, or company name).
 * @member {String} line1
 */


RecipientAddress.prototype['line1'] = undefined;
/**
 * Address line 2 (e.g., apartment, suite, unit, or building).
 * @member {String} line2
 */

RecipientAddress.prototype['line2'] = undefined;
/**
 * City, district, suburb, town, or village.
 * @member {String} city
 */

RecipientAddress.prototype['city'] = undefined;
/**
 * State, county, province, or region.
 * @member {String} state
 */

RecipientAddress.prototype['state'] = undefined;
/**
 * ZIP or postal code.
 * @member {String} postalCode
 */

RecipientAddress.prototype['postalCode'] = undefined;
/**
 * Two-letter country code (ISO 3166-1 alpha-2).
 * @member {String} country
 */

RecipientAddress.prototype['country'] = undefined;
var _default = RecipientAddress;
exports["default"] = _default;