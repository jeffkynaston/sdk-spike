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
 * The Address model module.
 * @module model/Address
 * @version 1.0.0
 */
var Address = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Address</code>.
   * @alias module:model/Address
   * @param line1 {String} Address line 1 (e.g., street, PO Box, or company name).
   * @param city {String} City, district, suburb, town, or village.
   * @param state {String} State, county, province, or region.
   * @param postalCode {String} ZIP or postal code.
   * @param country {String} Two-letter country code (ISO 3166-1 alpha-2).
   */
  function Address(line1, city, state, postalCode, country) {
    _classCallCheck(this, Address);

    Address.initialize(this, line1, city, state, postalCode, country);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Address, null, [{
    key: "initialize",
    value: function initialize(obj, line1, city, state, postalCode, country) {
      obj['line1'] = line1;
      obj['city'] = city;
      obj['state'] = state;
      obj['postalCode'] = postalCode;
      obj['country'] = country;
    }
    /**
     * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Address} obj Optional instance to populate.
     * @return {module:model/Address} The populated <code>Address</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Address();

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

  return Address;
}();
/**
 * Address line 1 (e.g., street, PO Box, or company name).
 * @member {String} line1
 */


Address.prototype['line1'] = undefined;
/**
 * Address line 2 (e.g., apartment, suite, unit, or building).
 * @member {String} line2
 */

Address.prototype['line2'] = undefined;
/**
 * City, district, suburb, town, or village.
 * @member {String} city
 */

Address.prototype['city'] = undefined;
/**
 * State, county, province, or region.
 * @member {String} state
 */

Address.prototype['state'] = undefined;
/**
 * ZIP or postal code.
 * @member {String} postalCode
 */

Address.prototype['postalCode'] = undefined;
/**
 * Two-letter country code (ISO 3166-1 alpha-2).
 * @member {String} country
 */

Address.prototype['country'] = undefined;
var _default = Address;
exports["default"] = _default;