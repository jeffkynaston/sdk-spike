"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreatePaymentIntentRequestPayload = _interopRequireDefault(require("./CreatePaymentIntentRequestPayload"));

var _CreatePaymentRequestFromId = _interopRequireDefault(require("./CreatePaymentRequestFromId"));

var _OneOfamountDetails = _interopRequireDefault(require("./OneOfamountDetails"));

var _OneOfpayerId = _interopRequireDefault(require("./OneOfpayerId"));

var _OneOfpaymentIntentIdCreatePaymentIntentRequestPayload = _interopRequireDefault(require("./OneOfpaymentIntentIdCreatePaymentIntentRequestPayload"));

var _OneOfpaymentMethodId = _interopRequireDefault(require("./OneOfpaymentMethodId"));

var _OneOfrecipientIdCreateRecipientRequest = _interopRequireDefault(require("./OneOfrecipientIdCreateRecipientRequest"));

var _PaymentDetails = _interopRequireDefault(require("./PaymentDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreatePaymentRequest model module.
 * @module model/CreatePaymentRequest
 * @version 1.0.0
 */
var CreatePaymentRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatePaymentRequest</code>.
   * @alias module:model/CreatePaymentRequest
   * @implements module:model/CreatePaymentRequestFromId
   * @implements module:model/CreatePaymentIntentRequestPayload
   * @param payer {module:model/OneOfpayerId} 
   * @param paymentMethod {module:model/OneOfpaymentMethodId} 
   * @param recipient {module:model/OneOfrecipientIdCreateRecipientRequest} 
   */
  function CreatePaymentRequest(payer, paymentMethod, recipient) {
    _classCallCheck(this, CreatePaymentRequest);

    _CreatePaymentRequestFromId["default"].initialize(this);

    _CreatePaymentIntentRequestPayload["default"].initialize(this, paymentMethod, recipient, payer);

    CreatePaymentRequest.initialize(this, payer, paymentMethod, recipient);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatePaymentRequest, null, [{
    key: "initialize",
    value: function initialize(obj, payer, paymentMethod, recipient) {
      obj['payer'] = payer;
      obj['paymentMethod'] = paymentMethod;
      obj['recipient'] = recipient;
    }
    /**
     * Constructs a <code>CreatePaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePaymentRequest} obj Optional instance to populate.
     * @return {module:model/CreatePaymentRequest} The populated <code>CreatePaymentRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePaymentRequest();

        _CreatePaymentRequestFromId["default"].constructFromObject(data, obj);

        _CreatePaymentIntentRequestPayload["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('paymentIntent')) {
          obj['paymentIntent'] = _ApiClient["default"].convertToType(data['paymentIntent'], _OneOfpaymentIntentIdCreatePaymentIntentRequestPayload["default"]);
        }

        if (data.hasOwnProperty('payer')) {
          obj['payer'] = _ApiClient["default"].convertToType(data['payer'], _OneOfpayerId["default"]);
        }

        if (data.hasOwnProperty('targetAmount')) {
          obj['targetAmount'] = _ApiClient["default"].convertToType(data['targetAmount'], _OneOfamountDetails["default"]);
        }

        if (data.hasOwnProperty('paymentMethod')) {
          obj['paymentMethod'] = _ApiClient["default"].convertToType(data['paymentMethod'], _OneOfpaymentMethodId["default"]);
        }

        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], _OneOfrecipientIdCreateRecipientRequest["default"]);
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

  return CreatePaymentRequest;
}();
/**
 * @member {module:model/OneOfpaymentIntentIdCreatePaymentIntentRequestPayload} paymentIntent
 */


CreatePaymentRequest.prototype['paymentIntent'] = undefined;
/**
 * @member {module:model/OneOfpayerId} payer
 */

CreatePaymentRequest.prototype['payer'] = undefined;
/**
 * @member {module:model/OneOfamountDetails} targetAmount
 */

CreatePaymentRequest.prototype['targetAmount'] = undefined;
/**
 * @member {module:model/OneOfpaymentMethodId} paymentMethod
 */

CreatePaymentRequest.prototype['paymentMethod'] = undefined;
/**
 * @member {module:model/OneOfrecipientIdCreateRecipientRequest} recipient
 */

CreatePaymentRequest.prototype['recipient'] = undefined;
/**
 * @member {module:model/PaymentDetails} details
 */

CreatePaymentRequest.prototype['details'] = undefined;
/**
 * additional payment information to support operational requirements
 * @member {Object} metadata
 */

CreatePaymentRequest.prototype['metadata'] = undefined; // Implement CreatePaymentRequestFromId interface:

/**
 * @member {module:model/OneOfpaymentIntentIdCreatePaymentIntentRequestPayload} paymentIntent
 */

_CreatePaymentRequestFromId["default"].prototype['paymentIntent'] = undefined;
/**
 * @member {module:model/PayerId} payer
 */

_CreatePaymentRequestFromId["default"].prototype['payer'] = undefined; // Implement CreatePaymentIntentRequestPayload interface:

/**
 * @member {module:model/OneOfamountDetails} targetAmount
 */

_CreatePaymentIntentRequestPayload["default"].prototype['targetAmount'] = undefined;
/**
 * @member {module:model/OneOfpaymentMethodId} paymentMethod
 */

_CreatePaymentIntentRequestPayload["default"].prototype['paymentMethod'] = undefined;
/**
 * @member {module:model/OneOfrecipientIdCreateRecipientRequest} recipient
 */

_CreatePaymentIntentRequestPayload["default"].prototype['recipient'] = undefined;
/**
 * @member {module:model/OneOfpayerId} payer
 */

_CreatePaymentIntentRequestPayload["default"].prototype['payer'] = undefined;
/**
 * @member {module:model/PaymentDetails} details
 */

_CreatePaymentIntentRequestPayload["default"].prototype['details'] = undefined;
/**
 * additional payment information to support operational requirements
 * @member {Object} metadata
 */

_CreatePaymentIntentRequestPayload["default"].prototype['metadata'] = undefined;
var _default = CreatePaymentRequest;
exports["default"] = _default;