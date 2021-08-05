"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateRecipientRequestContact model module.
 * @module model/CreateRecipientRequestContact
 * @version 1.0.0
 */
var CreateRecipientRequestContact = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateRecipientRequestContact</code>.
   * @alias module:model/CreateRecipientRequestContact
   * @param email {String} 
   */
  function CreateRecipientRequestContact(email) {
    _classCallCheck(this, CreateRecipientRequestContact);

    CreateRecipientRequestContact.initialize(this, email);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateRecipientRequestContact, null, [{
    key: "initialize",
    value: function initialize(obj, email) {
      obj['email'] = email;
    }
    /**
     * Constructs a <code>CreateRecipientRequestContact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRecipientRequestContact} obj Optional instance to populate.
     * @return {module:model/CreateRecipientRequestContact} The populated <code>CreateRecipientRequestContact</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateRecipientRequestContact();

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateRecipientRequestContact;
}();
/**
 * @member {String} firstName
 */


CreateRecipientRequestContact.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

CreateRecipientRequestContact.prototype['lastName'] = undefined;
/**
 * @member {String} email
 */

CreateRecipientRequestContact.prototype['email'] = undefined;
/**
 * @member {String} phone
 */

CreateRecipientRequestContact.prototype['phone'] = undefined;
var _default = CreateRecipientRequestContact;
exports["default"] = _default;