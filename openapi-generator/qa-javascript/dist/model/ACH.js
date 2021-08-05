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
 * The ACH model module.
 * @module model/ACH
 * @version 1.0.0
 */
var ACH = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ACH</code>.
   * @alias module:model/ACH
   * @param type {module:model/ACH.TypeEnum} 
   * @param accountNumber {String} Bank ACH account number
   * @param routingNumber {String} 9 digit bank routing number
   * @param beneficiaryName {String} 
   */
  function ACH(type, accountNumber, routingNumber, beneficiaryName) {
    _classCallCheck(this, ACH);

    ACH.initialize(this, type, accountNumber, routingNumber, beneficiaryName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ACH, null, [{
    key: "initialize",
    value: function initialize(obj, type, accountNumber, routingNumber, beneficiaryName) {
      obj['type'] = type;
      obj['accountNumber'] = accountNumber;
      obj['routingNumber'] = routingNumber;
      obj['beneficiaryName'] = beneficiaryName;
    }
    /**
     * Constructs a <code>ACH</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ACH} obj Optional instance to populate.
     * @return {module:model/ACH} The populated <code>ACH</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ACH();

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
      }

      return obj;
    }
  }]);

  return ACH;
}();
/**
 * @member {module:model/ACH.TypeEnum} type
 */


ACH.prototype['type'] = undefined;
/**
 * Bank ACH account number
 * @member {String} accountNumber
 */

ACH.prototype['accountNumber'] = undefined;
/**
 * 9 digit bank routing number
 * @member {String} routingNumber
 */

ACH.prototype['routingNumber'] = undefined;
/**
 * @member {String} beneficiaryName
 */

ACH.prototype['beneficiaryName'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ACH['TypeEnum'] = {
  /**
   * value: "ACH"
   * @const
   */
  "ACH": "ACH"
};
var _default = ACH;
exports["default"] = _default;