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
 * The RecipientContact model module.
 * @module model/RecipientContact
 * @version 1.0.0
 */
var RecipientContact = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RecipientContact</code>.
   * @alias module:model/RecipientContact
   */
  function RecipientContact() {
    _classCallCheck(this, RecipientContact);

    RecipientContact.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RecipientContact, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RecipientContact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecipientContact} obj Optional instance to populate.
     * @return {module:model/RecipientContact} The populated <code>RecipientContact</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RecipientContact();

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

  return RecipientContact;
}();
/**
 * @member {String} firstName
 */


RecipientContact.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

RecipientContact.prototype['lastName'] = undefined;
/**
 * @member {String} email
 */

RecipientContact.prototype['email'] = undefined;
/**
 * @member {String} phone
 */

RecipientContact.prototype['phone'] = undefined;
var _default = RecipientContact;
exports["default"] = _default;