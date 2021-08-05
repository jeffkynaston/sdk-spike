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
 * The CardResponse model module.
 * @module model/CardResponse
 * @version 1.0.0
 */
var CardResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CardResponse</code>.
   * @alias module:model/CardResponse
   */
  function CardResponse() {
    _classCallCheck(this, CardResponse);

    CardResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CardResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CardResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CardResponse} obj Optional instance to populate.
     * @return {module:model/CardResponse} The populated <code>CardResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CardResponse();

        if (data.hasOwnProperty('last4')) {
          obj['last4'] = _ApiClient["default"].convertToType(data['last4'], 'String');
        }

        if (data.hasOwnProperty('brand')) {
          obj['brand'] = _ApiClient["default"].convertToType(data['brand'], 'String');
        }

        if (data.hasOwnProperty('expirationMonth')) {
          obj['expirationMonth'] = _ApiClient["default"].convertToType(data['expirationMonth'], 'String');
        }

        if (data.hasOwnProperty('expirationYear')) {
          obj['expirationYear'] = _ApiClient["default"].convertToType(data['expirationYear'], 'String');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('billingAddress')) {
          obj['billingAddress'] = _ApiClient["default"].convertToType(data['billingAddress'], _Address["default"]);
        }

        if (data.hasOwnProperty('subType')) {
          obj['subType'] = _ApiClient["default"].convertToType(data['subType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CardResponse;
}();
/**
 * Last 4 digits of card number
 * @member {String} last4
 */


CardResponse.prototype['last4'] = undefined;
/**
 * @member {String} brand
 */

CardResponse.prototype['brand'] = undefined;
/**
 * @member {String} expirationMonth
 */

CardResponse.prototype['expirationMonth'] = undefined;
/**
 * @member {String} expirationYear
 */

CardResponse.prototype['expirationYear'] = undefined;
/**
 * @member {String} createdAt
 */

CardResponse.prototype['createdAt'] = undefined;
/**
 * @member {module:model/Address} billingAddress
 */

CardResponse.prototype['billingAddress'] = undefined;
/**
 * @member {module:model/CardResponse.SubTypeEnum} subType
 */

CardResponse.prototype['subType'] = undefined;
/**
 * Allowed values for the <code>subType</code> property.
 * @enum {String}
 * @readonly
 */

CardResponse['SubTypeEnum'] = {
  /**
   * value: "CREDIT"
   * @const
   */
  "CREDIT": "CREDIT",

  /**
   * value: "DEBIT"
   * @const
   */
  "DEBIT": "DEBIT"
};
var _default = CardResponse;
exports["default"] = _default;