"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateRecipientRequestContact = _interopRequireDefault(require("./CreateRecipientRequestContact"));

var _PayerId = _interopRequireDefault(require("./PayerId"));

var _RecipientAddress = _interopRequireDefault(require("./RecipientAddress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PatchRecipientRequest model module.
 * @module model/PatchRecipientRequest
 * @version 1.0.0
 */
var PatchRecipientRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PatchRecipientRequest</code>.
   * @alias module:model/PatchRecipientRequest
   */
  function PatchRecipientRequest() {
    _classCallCheck(this, PatchRecipientRequest);

    PatchRecipientRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PatchRecipientRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PatchRecipientRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchRecipientRequest} obj Optional instance to populate.
     * @return {module:model/PatchRecipientRequest} The populated <code>PatchRecipientRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PatchRecipientRequest();

        if (data.hasOwnProperty('businessName')) {
          obj['businessName'] = _ApiClient["default"].convertToType(data['businessName'], 'String');
        }

        if (data.hasOwnProperty('businessAddress')) {
          obj['businessAddress'] = _ApiClient["default"].convertToType(data['businessAddress'], _RecipientAddress["default"]);
        }

        if (data.hasOwnProperty('contact')) {
          obj['contact'] = _CreateRecipientRequestContact["default"].constructFromObject(data['contact']);
        }

        if (data.hasOwnProperty('payer')) {
          obj['payer'] = _PayerId["default"].constructFromObject(data['payer']);
        }
      }

      return obj;
    }
  }]);

  return PatchRecipientRequest;
}();
/**
 * @member {String} businessName
 */


PatchRecipientRequest.prototype['businessName'] = undefined;
/**
 * @member {module:model/RecipientAddress} businessAddress
 */

PatchRecipientRequest.prototype['businessAddress'] = undefined;
/**
 * @member {module:model/CreateRecipientRequestContact} contact
 */

PatchRecipientRequest.prototype['contact'] = undefined;
/**
 * @member {module:model/PayerId} payer
 */

PatchRecipientRequest.prototype['payer'] = undefined;
var _default = PatchRecipientRequest;
exports["default"] = _default;