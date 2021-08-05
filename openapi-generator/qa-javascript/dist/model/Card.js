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
 * The Card model module.
 * @module model/Card
 * @version 1.0.0
 */
var Card = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Card</code>.
   * Debit or Credit Card
   * @alias module:model/Card
   * @param cardHolderName {String} 
   * @param accountNumber {String} Card number.
   * @param cvv {String} 3-4 digits
   * @param expirationMonth {String} 
   * @param expirationYear {String} 
   * @param billingAddress {module:model/Address} 
   */
  function Card(cardHolderName, accountNumber, cvv, expirationMonth, expirationYear, billingAddress) {
    _classCallCheck(this, Card);

    Card.initialize(this, cardHolderName, accountNumber, cvv, expirationMonth, expirationYear, billingAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Card, null, [{
    key: "initialize",
    value: function initialize(obj, cardHolderName, accountNumber, cvv, expirationMonth, expirationYear, billingAddress) {
      obj['cardHolderName'] = cardHolderName;
      obj['accountNumber'] = accountNumber;
      obj['cvv'] = cvv;
      obj['expirationMonth'] = expirationMonth;
      obj['expirationYear'] = expirationYear;
      obj['billingAddress'] = billingAddress;
    }
    /**
     * Constructs a <code>Card</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Card} obj Optional instance to populate.
     * @return {module:model/Card} The populated <code>Card</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Card();

        if (data.hasOwnProperty('cardHolderName')) {
          obj['cardHolderName'] = _ApiClient["default"].convertToType(data['cardHolderName'], 'String');
        }

        if (data.hasOwnProperty('accountNumber')) {
          obj['accountNumber'] = _ApiClient["default"].convertToType(data['accountNumber'], 'String');
        }

        if (data.hasOwnProperty('cvv')) {
          obj['cvv'] = _ApiClient["default"].convertToType(data['cvv'], 'String');
        }

        if (data.hasOwnProperty('expirationMonth')) {
          obj['expirationMonth'] = _ApiClient["default"].convertToType(data['expirationMonth'], 'String');
        }

        if (data.hasOwnProperty('expirationYear')) {
          obj['expirationYear'] = _ApiClient["default"].convertToType(data['expirationYear'], 'String');
        }

        if (data.hasOwnProperty('billingAddress')) {
          obj['billingAddress'] = _ApiClient["default"].convertToType(data['billingAddress'], _Address["default"]);
        }
      }

      return obj;
    }
  }]);

  return Card;
}();
/**
 * @member {String} cardHolderName
 */


Card.prototype['cardHolderName'] = undefined;
/**
 * Card number.
 * @member {String} accountNumber
 */

Card.prototype['accountNumber'] = undefined;
/**
 * 3-4 digits
 * @member {String} cvv
 */

Card.prototype['cvv'] = undefined;
/**
 * @member {String} expirationMonth
 */

Card.prototype['expirationMonth'] = undefined;
/**
 * @member {String} expirationYear
 */

Card.prototype['expirationYear'] = undefined;
/**
 * @member {module:model/Address} billingAddress
 */

Card.prototype['billingAddress'] = undefined;
var _default = Card;
exports["default"] = _default;