"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfamountDetails = _interopRequireDefault(require("./OneOfamountDetails"));

var _OneOfpayerId = _interopRequireDefault(require("./OneOfpayerId"));

var _OneOfpaymentMethodId = _interopRequireDefault(require("./OneOfpaymentMethodId"));

var _OneOfrecipientIdCreateRecipientRequest = _interopRequireDefault(require("./OneOfrecipientIdCreateRecipientRequest"));

var _PaymentDetails = _interopRequireDefault(require("./PaymentDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreatePaymentIntentRequestPayload model module.
 * @module model/CreatePaymentIntentRequestPayload
 * @version 1.0.0
 */
var CreatePaymentIntentRequestPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatePaymentIntentRequestPayload</code>.
   * @alias module:model/CreatePaymentIntentRequestPayload
   * @param paymentMethod {module:model/OneOfpaymentMethodId} 
   * @param recipient {module:model/OneOfrecipientIdCreateRecipientRequest} 
   * @param payer {module:model/OneOfpayerId} 
   */
  function CreatePaymentIntentRequestPayload(paymentMethod, recipient, payer) {
    _classCallCheck(this, CreatePaymentIntentRequestPayload);

    CreatePaymentIntentRequestPayload.initialize(this, paymentMethod, recipient, payer);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatePaymentIntentRequestPayload, null, [{
    key: "initialize",
    value: function initialize(obj, paymentMethod, recipient, payer) {
      obj['paymentMethod'] = paymentMethod;
      obj['recipient'] = recipient;
      obj['payer'] = payer;
    }
    /**
     * Constructs a <code>CreatePaymentIntentRequestPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePaymentIntentRequestPayload} obj Optional instance to populate.
     * @return {module:model/CreatePaymentIntentRequestPayload} The populated <code>CreatePaymentIntentRequestPayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePaymentIntentRequestPayload();

        if (data.hasOwnProperty('targetAmount')) {
          obj['targetAmount'] = _ApiClient["default"].convertToType(data['targetAmount'], _OneOfamountDetails["default"]);
        }

        if (data.hasOwnProperty('paymentMethod')) {
          obj['paymentMethod'] = _ApiClient["default"].convertToType(data['paymentMethod'], _OneOfpaymentMethodId["default"]);
        }

        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], _OneOfrecipientIdCreateRecipientRequest["default"]);
        }

        if (data.hasOwnProperty('payer')) {
          obj['payer'] = _ApiClient["default"].convertToType(data['payer'], _OneOfpayerId["default"]);
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _PaymentDetails["default"].constructFromObject(data['details']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], Object);
        }
      }

      return obj;
    }
  }]);

  return CreatePaymentIntentRequestPayload;
}();
/**
 * @member {module:model/OneOfamountDetails} targetAmount
 */


CreatePaymentIntentRequestPayload.prototype['targetAmount'] = undefined;
/**
 * @member {module:model/OneOfpaymentMethodId} paymentMethod
 */

CreatePaymentIntentRequestPayload.prototype['paymentMethod'] = undefined;
/**
 * @member {module:model/OneOfrecipientIdCreateRecipientRequest} recipient
 */

CreatePaymentIntentRequestPayload.prototype['recipient'] = undefined;
/**
 * @member {module:model/OneOfpayerId} payer
 */

CreatePaymentIntentRequestPayload.prototype['payer'] = undefined;
/**
 * @member {module:model/PaymentDetails} details
 */

CreatePaymentIntentRequestPayload.prototype['details'] = undefined;
/**
 * additional payment information to support operational requirements
 * @member {Object} metadata
 */

CreatePaymentIntentRequestPayload.prototype['metadata'] = undefined;
var _default = CreatePaymentIntentRequestPayload;
exports["default"] = _default;