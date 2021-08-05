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
 * The Wire model module.
 * @module model/Wire
 * @version 1.0.0
 */
var Wire = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Wire</code>.
   * @alias module:model/Wire
   * @param type {module:model/Wire.TypeEnum} 
   * @param accountNumber {String} Bank wire account number (alphanumeric)
   * @param routingNumber {String} Bank wire routing number
   * @param beneficiaryName {String} 
   * @param country {module:model/Wire.CountryEnum} Two-letter country code (ISO 3166-1 alpha-2).
   */
  function Wire(type, accountNumber, routingNumber, beneficiaryName, country) {
    _classCallCheck(this, Wire);

    Wire.initialize(this, type, accountNumber, routingNumber, beneficiaryName, country);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Wire, null, [{
    key: "initialize",
    value: function initialize(obj, type, accountNumber, routingNumber, beneficiaryName, country) {
      obj['type'] = type;
      obj['accountNumber'] = accountNumber;
      obj['routingNumber'] = routingNumber;
      obj['beneficiaryName'] = beneficiaryName;
      obj['country'] = country;
    }
    /**
     * Constructs a <code>Wire</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Wire} obj Optional instance to populate.
     * @return {module:model/Wire} The populated <code>Wire</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Wire();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('accountNumber')) {
          obj['accountNumber'] = _ApiClient["default"].convertToType(data['accountNumber'], 'String');
        }

        if (data.hasOwnProperty('routingNumber')) {
          obj['routingNumber'] = _ApiClient["default"].convertToType(data['routingNumber'], 'String');
        }

        if (data.hasOwnProperty('beneficiaryName')) {
          obj['beneficiaryName'] = _ApiClient["default"].convertToType(data['beneficiaryName'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Wire;
}();
/**
 * @member {module:model/Wire.TypeEnum} type
 */


Wire.prototype['type'] = undefined;
/**
 * Bank wire account number (alphanumeric)
 * @member {String} accountNumber
 */

Wire.prototype['accountNumber'] = undefined;
/**
 * Bank wire routing number
 * @member {String} routingNumber
 */

Wire.prototype['routingNumber'] = undefined;
/**
 * @member {String} beneficiaryName
 */

Wire.prototype['beneficiaryName'] = undefined;
/**
 * Two-letter country code (ISO 3166-1 alpha-2).
 * @member {module:model/Wire.CountryEnum} country
 */

Wire.prototype['country'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

Wire['TypeEnum'] = {
  /**
   * value: "WIRE"
   * @const
   */
  "WIRE": "WIRE"
};
/**
 * Allowed values for the <code>country</code> property.
 * @enum {String}
 * @readonly
 */

Wire['CountryEnum'] = {
  /**
   * value: "US"
   * @const
   */
  "US": "US"
};
var _default = Wire;
exports["default"] = _default;