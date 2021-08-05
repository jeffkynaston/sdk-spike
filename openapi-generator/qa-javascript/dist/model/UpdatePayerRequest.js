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
 * The UpdatePayerRequest model module.
 * @module model/UpdatePayerRequest
 * @version 1.0.0
 */
var UpdatePayerRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdatePayerRequest</code>.
   * @alias module:model/UpdatePayerRequest
   */
  function UpdatePayerRequest() {
    _classCallCheck(this, UpdatePayerRequest);

    UpdatePayerRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdatePayerRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UpdatePayerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePayerRequest} obj Optional instance to populate.
     * @return {module:model/UpdatePayerRequest} The populated <code>UpdatePayerRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdatePayerRequest();

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

  return UpdatePayerRequest;
}();
/**
 * @member {String} businessName
 */


UpdatePayerRequest.prototype['businessName'] = undefined;
/**
 * @member {module:model/Contact} contact
 */

UpdatePayerRequest.prototype['contact'] = undefined;
/**
 * @member {module:model/Address} businessAddress
 */

UpdatePayerRequest.prototype['businessAddress'] = undefined;
/**
 * @member {Array.<module:model/IdentityDocuments>} identityDocuments
 */

UpdatePayerRequest.prototype['identityDocuments'] = undefined;
var _default = UpdatePayerRequest;
exports["default"] = _default;