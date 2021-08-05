"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfPatchCardPatchBankAccount = _interopRequireDefault(require("./OneOfPatchCardPatchBankAccount"));

var _PayerId = _interopRequireDefault(require("./PayerId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PatchPaymentMethodRequest model module.
 * @module model/PatchPaymentMethodRequest
 * @version 1.0.0
 */
var PatchPaymentMethodRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PatchPaymentMethodRequest</code>.
   * @alias module:model/PatchPaymentMethodRequest
   * @param type {module:model/PatchPaymentMethodRequest.TypeEnum} 
   * @param data {module:model/OneOfPatchCardPatchBankAccount} 
   * @param payer {module:model/PayerId} 
   */
  function PatchPaymentMethodRequest(type, data, payer) {
    _classCallCheck(this, PatchPaymentMethodRequest);

    PatchPaymentMethodRequest.initialize(this, type, data, payer);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PatchPaymentMethodRequest, null, [{
    key: "initialize",
    value: function initialize(obj, type, data, payer) {
      obj['type'] = type;
      obj['data'] = data;
      obj['payer'] = payer;
    }
    /**
     * Constructs a <code>PatchPaymentMethodRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchPaymentMethodRequest} obj Optional instance to populate.
     * @return {module:model/PatchPaymentMethodRequest} The populated <code>PatchPaymentMethodRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PatchPaymentMethodRequest();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], _OneOfPatchCardPatchBankAccount["default"]);
        }

        if (data.hasOwnProperty('payer')) {
          obj['payer'] = _PayerId["default"].constructFromObject(data['payer']);
        }
      }

      return obj;
    }
  }]);

  return PatchPaymentMethodRequest;
}();
/**
 * @member {module:model/PatchPaymentMethodRequest.TypeEnum} type
 */


PatchPaymentMethodRequest.prototype['type'] = undefined;
/**
 * @member {module:model/OneOfPatchCardPatchBankAccount} data
 */

PatchPaymentMethodRequest.prototype['data'] = undefined;
/**
 * @member {module:model/PayerId} payer
 */

PatchPaymentMethodRequest.prototype['payer'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

PatchPaymentMethodRequest['TypeEnum'] = {
  /**
   * value: "CARD"
   * @const
   */
  "CARD": "CARD",

  /**
   * value: "BANK_ACCOUNT"
   * @const
   */
  "BANK_ACCOUNT": "BANK_ACCOUNT"
};
var _default = PatchPaymentMethodRequest;
exports["default"] = _default;