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
 * The ContactOneOf model module.
 * @module model/ContactOneOf
 * @version 1.0.0
 */
var ContactOneOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContactOneOf</code>.
   * @alias module:model/ContactOneOf
   * @param phone {String} 
   */
  function ContactOneOf(phone) {
    _classCallCheck(this, ContactOneOf);

    ContactOneOf.initialize(this, phone);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContactOneOf, null, [{
    key: "initialize",
    value: function initialize(obj, phone) {
      obj['phone'] = phone;
    }
    /**
     * Constructs a <code>ContactOneOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactOneOf} obj Optional instance to populate.
     * @return {module:model/ContactOneOf} The populated <code>ContactOneOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContactOneOf();

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

  return ContactOneOf;
}();
/**
 * @member {String} firstName
 */


ContactOneOf.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

ContactOneOf.prototype['lastName'] = undefined;
/**
 * @member {String} email
 */

ContactOneOf.prototype['email'] = undefined;
/**
 * @member {String} phone
 */

ContactOneOf.prototype['phone'] = undefined;
var _default = ContactOneOf;
exports["default"] = _default;