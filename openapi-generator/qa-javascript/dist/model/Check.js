"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Address = _interopRequireDefault(require("./Address"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Check model module.
 * @module model/Check
 * @version 1.0.0
 */
var Check = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Check</code>.
   * @alias module:model/Check
   * @implements module:model/Address
   * @param line1 {String} Address line 1 (e.g., street, PO Box, or company name).
   * @param city {String} City, district, suburb, town, or village.
   * @param state {String} State, county, province, or region.
   * @param postalCode {String} ZIP or postal code.
   * @param country {String} Two-letter country code (ISO 3166-1 alpha-2).
   */
  function Check(line1, city, state, postalCode, country) {
    _classCallCheck(this, Check);

    _Address["default"].initialize(this, line1, city, state, postalCode, country);

    Check.initialize(this, line1, city, state, postalCode, country);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Check, null, [{
    key: "initialize",
    value: function initialize(obj, line1, city, state, postalCode, country) {
      obj['type'] = type;
      obj['line1'] = line1;
      obj['city'] = city;
      obj['state'] = state;
      obj['postalCode'] = postalCode;
      obj['country'] = country;
    }
    /**
     * Constructs a <code>Check</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Check} obj Optional instance to populate.
     * @return {module:model/Check} The populated <code>Check</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Check();

        _Address["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

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

  return Check;
}();
/**
 * @member {module:model/Check.TypeEnum} type
 */


Check.prototype['type'] = undefined;
/**
 * Address line 1 (e.g., street, PO Box, or company name).
 * @member {String} line1
 */

Check.prototype['line1'] = undefined;
/**
 * Address line 2 (e.g., apartment, suite, unit, or building).
 * @member {String} line2
 */

Check.prototype['line2'] = undefined;
/**
 * City, district, suburb, town, or village.
 * @member {String} city
 */

Check.prototype['city'] = undefined;
/**
 * State, county, province, or region.
 * @member {String} state
 */

Check.prototype['state'] = undefined;
/**
 * ZIP or postal code.
 * @member {String} postalCode
 */

Check.prototype['postalCode'] = undefined;
/**
 * Two-letter country code (ISO 3166-1 alpha-2).
 * @member {String} country
 */

Check.prototype['country'] = undefined; // Implement Address interface:

/**
 * Address line 1 (e.g., street, PO Box, or company name).
 * @member {String} line1
 */

_Address["default"].prototype['line1'] = undefined;
/**
 * Address line 2 (e.g., apartment, suite, unit, or building).
 * @member {String} line2
 */

_Address["default"].prototype['line2'] = undefined;
/**
 * City, district, suburb, town, or village.
 * @member {String} city
 */

_Address["default"].prototype['city'] = undefined;
/**
 * State, county, province, or region.
 * @member {String} state
 */

_Address["default"].prototype['state'] = undefined;
/**
 * ZIP or postal code.
 * @member {String} postalCode
 */

_Address["default"].prototype['postalCode'] = undefined;
/**
 * Two-letter country code (ISO 3166-1 alpha-2).
 * @member {String} country
 */

_Address["default"].prototype['country'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

Check['TypeEnum'] = {
  /**
   * value: "CHECK"
   * @const
   */
  "CHECK": "CHECK"
};
var _default = Check;
exports["default"] = _default;