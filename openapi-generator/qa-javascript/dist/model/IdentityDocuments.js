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
 * The IdentityDocuments model module.
 * @module model/IdentityDocuments
 * @version 1.0.0
 */
var IdentityDocuments = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdentityDocuments</code>.
   * This is currently only required if a Payment method from Texas is added.
   * @alias module:model/IdentityDocuments
   * @param type {module:model/IdentityDocuments.TypeEnum} 
   * @param value {String} 
   */
  function IdentityDocuments(type, value) {
    _classCallCheck(this, IdentityDocuments);

    IdentityDocuments.initialize(this, type, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IdentityDocuments, null, [{
    key: "initialize",
    value: function initialize(obj, type, value) {
      obj['type'] = type;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>IdentityDocuments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdentityDocuments} obj Optional instance to populate.
     * @return {module:model/IdentityDocuments} The populated <code>IdentityDocuments</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdentityDocuments();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('countryOfIssuance')) {
          obj['countryOfIssuance'] = _ApiClient["default"].convertToType(data['countryOfIssuance'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IdentityDocuments;
}();
/**
 * @member {module:model/IdentityDocuments.TypeEnum} type
 */


IdentityDocuments.prototype['type'] = undefined;
/**
 * @member {String} value
 */

IdentityDocuments.prototype['value'] = undefined;
/**
 * Passport country of issuance. Two-letter country code (ISO 3166-1 alpha-2).
 * @member {String} countryOfIssuance
 */

IdentityDocuments.prototype['countryOfIssuance'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

IdentityDocuments['TypeEnum'] = {
  /**
   * value: "US_TIN"
   * @const
   */
  "US_TIN": "US_TIN",

  /**
   * value: "US_EIN"
   * @const
   */
  "US_EIN": "US_EIN",

  /**
   * value: "US_SSN"
   * @const
   */
  "US_SSN": "US_SSN",

  /**
   * value: "PASSPORT_NUMBER"
   * @const
   */
  "PASSPORT_NUMBER": "PASSPORT_NUMBER",

  /**
   * value: "ALIEN_REGISTRATION_NUMBER"
   * @const
   */
  "ALIEN_REGISTRATION_NUMBER": "ALIEN_REGISTRATION_NUMBER"
};
var _default = IdentityDocuments;
exports["default"] = _default;