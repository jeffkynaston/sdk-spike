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
 * The BankAccount model module.
 * @module model/BankAccount
 * @version 1.0.0
 */
var BankAccount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BankAccount</code>.
   * Bank Account Funded
   * @alias module:model/BankAccount
   * @param accountHolderName {String} The legal name of the account holder
   * @param accountNumber {String} The account number of the bank account
   * @param routingNumber {String} The routing number of the bank account
   * @param billingAddress {module:model/Address} 
   */
  function BankAccount(accountHolderName, accountNumber, routingNumber, billingAddress) {
    _classCallCheck(this, BankAccount);

    BankAccount.initialize(this, accountHolderName, accountNumber, routingNumber, billingAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BankAccount, null, [{
    key: "initialize",
    value: function initialize(obj, accountHolderName, accountNumber, routingNumber, billingAddress) {
      obj['accountHolderName'] = accountHolderName;
      obj['accountNumber'] = accountNumber;
      obj['routingNumber'] = routingNumber;
      obj['billingAddress'] = billingAddress;
    }
    /**
     * Constructs a <code>BankAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BankAccount} obj Optional instance to populate.
     * @return {module:model/BankAccount} The populated <code>BankAccount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BankAccount();

        if (data.hasOwnProperty('accountHolderName')) {
          obj['accountHolderName'] = _ApiClient["default"].convertToType(data['accountHolderName'], 'String');
        }

        if (data.hasOwnProperty('accountNumber')) {
          obj['accountNumber'] = _ApiClient["default"].convertToType(data['accountNumber'], 'String');
        }

        if (data.hasOwnProperty('accountType')) {
          obj['accountType'] = _ApiClient["default"].convertToType(data['accountType'], 'String');
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

  return BankAccount;
}();
/**
 * The legal name of the account holder
 * @member {String} accountHolderName
 */


BankAccount.prototype['accountHolderName'] = undefined;
/**
 * The account number of the bank account
 * @member {String} accountNumber
 */

BankAccount.prototype['accountNumber'] = undefined;
/**
 * The type of the bank account
 * @member {module:model/BankAccount.AccountTypeEnum} accountType
 */

BankAccount.prototype['accountType'] = undefined;
/**
 * The routing number of the bank account
 * @member {String} routingNumber
 */

BankAccount.prototype['routingNumber'] = undefined;
/**
 * @member {module:model/Address} billingAddress
 */

BankAccount.prototype['billingAddress'] = undefined;
/**
 * Allowed values for the <code>accountType</code> property.
 * @enum {String}
 * @readonly
 */

BankAccount['AccountTypeEnum'] = {
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
var _default = BankAccount;
exports["default"] = _default;