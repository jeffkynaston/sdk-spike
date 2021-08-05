"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Address = _interopRequireDefault(require("./Address"));

var _Contact = _interopRequireDefault(require("./Contact"));

var _IdentityDocuments = _interopRequireDefault(require("./IdentityDocuments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreatePayerRequest model module.
 * @module model/CreatePayerRequest
 * @version 1.0.0
 */
var CreatePayerRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatePayerRequest</code>.
   * @alias module:model/CreatePayerRequest
   * @param contact {module:model/Contact} 
   */
  function CreatePayerRequest(contact) {
    _classCallCheck(this, CreatePayerRequest);

    CreatePayerRequest.initialize(this, contact);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatePayerRequest, null, [{
    key: "initialize",
    value: function initialize(obj, contact) {
      obj['contact'] = contact;
    }
    /**
     * Constructs a <code>CreatePayerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePayerRequest} obj Optional instance to populate.
     * @return {module:model/CreatePayerRequest} The populated <code>CreatePayerRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePayerRequest();

        if (data.hasOwnProperty('businessName')) {
          obj['businessName'] = _ApiClient["default"].convertToType(data['businessName'], 'String');
        }

        if (data.hasOwnProperty('contact')) {
          obj['contact'] = _Contact["default"].constructFromObject(data['contact']);
        }

        if (data.hasOwnProperty('businessAddress')) {
          obj['businessAddress'] = _ApiClient["default"].convertToType(data['businessAddress'], _Address["default"]);
        }

        if (data.hasOwnProperty('identityDocuments')) {
          obj['identityDocuments'] = _ApiClient["default"].convertToType(data['identityDocuments'], [_IdentityDocuments["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreatePayerRequest;
}();
/**
 * @member {String} businessName
 */


CreatePayerRequest.prototype['businessName'] = undefined;
/**
 * @member {module:model/Contact} contact
 */

CreatePayerRequest.prototype['contact'] = undefined;
/**
 * @member {module:model/Address} businessAddress
 */

CreatePayerRequest.prototype['businessAddress'] = undefined;
/**
 * @member {Array.<module:model/IdentityDocuments>} identityDocuments
 */

CreatePayerRequest.prototype['identityDocuments'] = undefined;
var _default = CreatePayerRequest;
exports["default"] = _default;