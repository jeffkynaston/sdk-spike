"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfamountDetails = _interopRequireDefault(require("./OneOfamountDetails"));

var _PaymentDetails = _interopRequireDefault(require("./PaymentDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PatchPaymentIntentRequestPayload model module.
 * @module model/PatchPaymentIntentRequestPayload
 * @version 1.0.0
 */
var PatchPaymentIntentRequestPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PatchPaymentIntentRequestPayload</code>.
   * @alias module:model/PatchPaymentIntentRequestPayload
   */
  function PatchPaymentIntentRequestPayload() {
    _classCallCheck(this, PatchPaymentIntentRequestPayload);

    PatchPaymentIntentRequestPayload.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PatchPaymentIntentRequestPayload, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PatchPaymentIntentRequestPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchPaymentIntentRequestPayload} obj Optional instance to populate.
     * @return {module:model/PatchPaymentIntentRequestPayload} The populated <code>PatchPaymentIntentRequestPayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PatchPaymentIntentRequestPayload();

        if (data.hasOwnProperty('targetAmount')) {
          obj['targetAmount'] = _ApiClient["default"].convertToType(data['targetAmount'], _OneOfamountDetails["default"]);
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

  return PatchPaymentIntentRequestPayload;
}();
/**
 * @member {module:model/OneOfamountDetails} targetAmount
 */


PatchPaymentIntentRequestPayload.prototype['targetAmount'] = undefined;
/**
 * @member {module:model/PaymentDetails} details
 */

PatchPaymentIntentRequestPayload.prototype['details'] = undefined;
/**
 * additional payment information to support operational requirements
 * @member {Object} metadata
 */

PatchPaymentIntentRequestPayload.prototype['metadata'] = undefined;
var _default = PatchPaymentIntentRequestPayload;
exports["default"] = _default;