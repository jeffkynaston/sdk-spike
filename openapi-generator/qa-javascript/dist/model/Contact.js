"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContactOneOf = _interopRequireDefault(require("./ContactOneOf"));

var _CreateRecipientRequestContact = _interopRequireDefault(require("./CreateRecipientRequestContact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Contact model module.
 * @module model/Contact
 * @version 1.0.0
 */
var Contact = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Contact</code>.
   * @alias module:model/Contact
   * @implements module:model/CreateRecipientRequestContact
   * @implements module:model/ContactOneOf
   * @param email {String} 
   * @param phone {String} 
   */
  function Contact(email, phone) {
    _classCallCheck(this, Contact);

    _CreateRecipientRequestContact["default"].initialize(this, email);

    _ContactOneOf["default"].initialize(this, phone);

    Contact.initialize(this, email, phone);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Contact, null, [{
    key: "initialize",
    value: function initialize(obj, email, phone) {
      obj['email'] = email;
      obj['phone'] = phone;
    }
    /**
     * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contact} obj Optional instance to populate.
     * @return {module:model/Contact} The populated <code>Contact</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Contact();

        _CreateRecipientRequestContact["default"].constructFromObject(data, obj);

        _ContactOneOf["default"].constructFromObject(data, obj);

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

  return Contact;
}();
/**
 * @member {String} firstName
 */


Contact.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

Contact.prototype['lastName'] = undefined;
/**
 * @member {String} email
 */

Contact.prototype['email'] = undefined;
/**
 * @member {String} phone
 */

Contact.prototype['phone'] = undefined; // Implement CreateRecipientRequestContact interface:

/**
 * @member {String} firstName
 */

_CreateRecipientRequestContact["default"].prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

_CreateRecipientRequestContact["default"].prototype['lastName'] = undefined;
/**
 * @member {String} email
 */

_CreateRecipientRequestContact["default"].prototype['email'] = undefined;
/**
 * @member {String} phone
 */

_CreateRecipientRequestContact["default"].prototype['phone'] = undefined; // Implement ContactOneOf interface:

/**
 * @member {String} firstName
 */

_ContactOneOf["default"].prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

_ContactOneOf["default"].prototype['lastName'] = undefined;
/**
 * @member {String} email
 */

_ContactOneOf["default"].prototype['email'] = undefined;
/**
 * @member {String} phone
 */

_ContactOneOf["default"].prototype['phone'] = undefined;
var _default = Contact;
exports["default"] = _default;