"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateRecipientRequestContact = _interopRequireDefault(require("./CreateRecipientRequestContact"));

var _OneOfACHCheckEFTWire = _interopRequireDefault(require("./OneOfACHCheckEFTWire"));

var _PayerId = _interopRequireDefault(require("./PayerId"));

var _RecipientAddress = _interopRequireDefault(require("./RecipientAddress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateRecipientRequest model module.
 * @module model/CreateRecipientRequest
 * @version 1.0.0
 */
var CreateRecipientRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateRecipientRequest</code>.
   * @alias module:model/CreateRecipientRequest
   * @param businessName {String} 
   * @param categoryId {String} 
   * @param businessAddress {module:model/RecipientAddress} 
   * @param contact {module:model/CreateRecipientRequestContact} 
   * @param receivingMethod {module:model/OneOfACHCheckEFTWire} 
   */
  function CreateRecipientRequest(businessName, categoryId, businessAddress, contact, receivingMethod) {
    _classCallCheck(this, CreateRecipientRequest);

    CreateRecipientRequest.initialize(this, businessName, categoryId, businessAddress, contact, receivingMethod);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateRecipientRequest, null, [{
    key: "initialize",
    value: function initialize(obj, businessName, categoryId, businessAddress, contact, receivingMethod) {
      obj['businessName'] = businessName;
      obj['categoryId'] = categoryId;
      obj['businessAddress'] = businessAddress;
      obj['contact'] = contact;
      obj['receivingMethod'] = receivingMethod;
    }
    /**
     * Constructs a <code>CreateRecipientRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRecipientRequest} obj Optional instance to populate.
     * @return {module:model/CreateRecipientRequest} The populated <code>CreateRecipientRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateRecipientRequest();

        if (data.hasOwnProperty('businessName')) {
          obj['businessName'] = _ApiClient["default"].convertToType(data['businessName'], 'String');
        }

        if (data.hasOwnProperty('categoryId')) {
          obj['categoryId'] = _ApiClient["default"].convertToType(data['categoryId'], 'String');
        }

        if (data.hasOwnProperty('businessAddress')) {
          obj['businessAddress'] = _ApiClient["default"].convertToType(data['businessAddress'], _RecipientAddress["default"]);
        }

        if (data.hasOwnProperty('contact')) {
          obj['contact'] = _CreateRecipientRequestContact["default"].constructFromObject(data['contact']);
        }

        if (data.hasOwnProperty('receivingMethod')) {
          obj['receivingMethod'] = _ApiClient["default"].convertToType(data['receivingMethod'], _OneOfACHCheckEFTWire["default"]);
        }

        if (data.hasOwnProperty('payer')) {
          obj['payer'] = _PayerId["default"].constructFromObject(data['payer']);
        }
      }

      return obj;
    }
  }]);

  return CreateRecipientRequest;
}();
/**
 * @member {String} businessName
 */


CreateRecipientRequest.prototype['businessName'] = undefined;
/**
 * @member {String} categoryId
 */

CreateRecipientRequest.prototype['categoryId'] = undefined;
/**
 * @member {module:model/RecipientAddress} businessAddress
 */

CreateRecipientRequest.prototype['businessAddress'] = undefined;
/**
 * @member {module:model/CreateRecipientRequestContact} contact
 */

CreateRecipientRequest.prototype['contact'] = undefined;
/**
 * @member {module:model/OneOfACHCheckEFTWire} receivingMethod
 */

CreateRecipientRequest.prototype['receivingMethod'] = undefined;
/**
 * @member {module:model/PayerId} payer
 */

CreateRecipientRequest.prototype['payer'] = undefined;
var _default = CreateRecipientRequest;
exports["default"] = _default;