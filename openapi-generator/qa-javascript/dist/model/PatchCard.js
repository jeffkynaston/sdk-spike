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
 * The PatchCard model module.
 * @module model/PatchCard
 * @version 1.0.0
 */
var PatchCard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PatchCard</code>.
   * Debit or Credit Card
   * @alias module:model/PatchCard
   * @param cvv {String} 3-4 digits
   */
  function PatchCard(cvv) {
    _classCallCheck(this, PatchCard);

    PatchCard.initialize(this, cvv);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PatchCard, null, [{
    key: "initialize",
    value: function initialize(obj, cvv) {
      obj['cvv'] = cvv;
    }
    /**
     * Constructs a <code>PatchCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchCard} obj Optional instance to populate.
     * @return {module:model/PatchCard} The populated <code>PatchCard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PatchCard();

        if (data.hasOwnProperty('cardHolderName')) {
          obj['cardHolderName'] = _ApiClient["default"].convertToType(data['cardHolderName'], 'String');
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

  return PatchCard;
}();
/**
 * @member {String} cardHolderName
 */


PatchCard.prototype['cardHolderName'] = undefined;
/**
 * 3-4 digits
 * @member {String} cvv
 */

PatchCard.prototype['cvv'] = undefined;
/**
 * @member {String} expirationMonth
 */

PatchCard.prototype['expirationMonth'] = undefined;
/**
 * @member {String} expirationYear
 */

PatchCard.prototype['expirationYear'] = undefined;
/**
 * @member {module:model/Address} billingAddress
 */

PatchCard.prototype['billingAddress'] = undefined;
var _default = PatchCard;
exports["default"] = _default;