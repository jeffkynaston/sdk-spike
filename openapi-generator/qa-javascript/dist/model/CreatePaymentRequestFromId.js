"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfpaymentIntentIdCreatePaymentIntentRequestPayload = _interopRequireDefault(require("./OneOfpaymentIntentIdCreatePaymentIntentRequestPayload"));

var _PayerId = _interopRequireDefault(require("./PayerId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreatePaymentRequestFromId model module.
 * @module model/CreatePaymentRequestFromId
 * @version 1.0.0
 */
var CreatePaymentRequestFromId = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatePaymentRequestFromId</code>.
   * @alias module:model/CreatePaymentRequestFromId
   */
  function CreatePaymentRequestFromId() {
    _classCallCheck(this, CreatePaymentRequestFromId);

    CreatePaymentRequestFromId.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatePaymentRequestFromId, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreatePaymentRequestFromId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePaymentRequestFromId} obj Optional instance to populate.
     * @return {module:model/CreatePaymentRequestFromId} The populated <code>CreatePaymentRequestFromId</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePaymentRequestFromId();

        if (data.hasOwnProperty('paymentIntent')) {
          obj['paymentIntent'] = _ApiClient["default"].convertToType(data['paymentIntent'], _OneOfpaymentIntentIdCreatePaymentIntentRequestPayload["default"]);
        }

        if (data.hasOwnProperty('payer')) {
          obj['payer'] = _PayerId["default"].constructFromObject(data['payer']);
        }
      }

      return obj;
    }
  }]);

  return CreatePaymentRequestFromId;
}();
/**
 * @member {module:model/OneOfpaymentIntentIdCreatePaymentIntentRequestPayload} paymentIntent
 */


CreatePaymentRequestFromId.prototype['paymentIntent'] = undefined;
/**
 * @member {module:model/PayerId} payer
 */

CreatePaymentRequestFromId.prototype['payer'] = undefined;
var _default = CreatePaymentRequestFromId;
exports["default"] = _default;