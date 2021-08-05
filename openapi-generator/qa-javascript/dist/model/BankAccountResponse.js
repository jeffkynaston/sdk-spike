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
 * The BankAccountResponse model module.
 * @module model/BankAccountResponse
 * @version 1.0.0
 */
var BankAccountResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BankAccountResponse</code>.
   * @alias module:model/BankAccountResponse
   */
  function BankAccountResponse() {
    _classCallCheck(this, BankAccountResponse);

    BankAccountResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BankAccountResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BankAccountResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BankAccountResponse} obj Optional instance to populate.
     * @return {module:model/BankAccountResponse} The populated <code>BankAccountResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BankAccountResponse();

        if (data.hasOwnProperty('accountType')) {
          obj['accountType'] = _ApiClient["default"].convertToType(data['accountType'], 'String');
        }

        if (data.hasOwnProperty('accountHolderName')) {
          obj['accountHolderName'] = _ApiClient["default"].convertToType(data['accountHolderName'], 'String');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('accountLastFour')) {
          obj['accountLastFour'] = _ApiClient["default"].convertToType(data['accountLastFour'], 'String');
        }

        if (data.hasOwnProperty('routingNumber')) {
          obj['routingNumber'] = _ApiClient["default"].convertToType(data['routingNumber'], 'String');
        }

        if (data.hasOwnProperty('billingAddress')) {
          obj['billingAddress'] = _ApiClient["default"].convertToType(data['billingAddress'], _Address["default"]);
        }
      }

      return obj;
    }
  }]);

  return BankAccountResponse;
}();
/**
 * The type of the bank account
 * @member {module:model/BankAccountResponse.AccountTypeEnum} accountType
 */


BankAccountResponse.prototype['accountType'] = undefined;
/**
 * The legal name of the account holder
 * @member {String} accountHolderName
 */

BankAccountResponse.prototype['accountHolderName'] = undefined;
/**
 * @member {String} createdAt
 */

BankAccountResponse.prototype['createdAt'] = undefined;
/**
 * Last 4 digits of the account number
 * @member {String} accountLastFour
 */

BankAccountResponse.prototype['accountLastFour'] = undefined;
/**
 * The routing number of the bank account
 * @member {String} routingNumber
 */

BankAccountResponse.prototype['routingNumber'] = undefined;
/**
 * @member {module:model/Address} billingAddress
 */

BankAccountResponse.prototype['billingAddress'] = undefined;
/**
 * Allowed values for the <code>accountType</code> property.
 * @enum {String}
 * @readonly
 */

BankAccountResponse['AccountTypeEnum'] = {
  /**
   * value: "CHECKING"
   * @const
   */
  "CHECKING": "CHECKING",

  /**
   * value: "SAVINGS"
   * @const
   */
  "SAVINGS": "SAVINGS"
};
var _default = BankAccountResponse;
exports["default"] = _default;