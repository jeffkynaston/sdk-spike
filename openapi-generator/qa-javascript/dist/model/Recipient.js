"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfACHCheckEFT = _interopRequireDefault(require("./OneOfACHCheckEFT"));

var _RecipientAddress = _interopRequireDefault(require("./RecipientAddress"));

var _RecipientContact = _interopRequireDefault(require("./RecipientContact"));

var _Status = _interopRequireDefault(require("./Status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Recipient model module.
 * @module model/Recipient
 * @version 1.0.0
 */
var Recipient = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Recipient</code>.
   * @alias module:model/Recipient
   */
  function Recipient() {
    _classCallCheck(this, Recipient);

    Recipient.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Recipient, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Recipient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Recipient} obj Optional instance to populate.
     * @return {module:model/Recipient} The populated <code>Recipient</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Recipient();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

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
          obj['contact'] = _RecipientContact["default"].constructFromObject(data['contact']);
        }

        if (data.hasOwnProperty('receivingMethod')) {
          obj['receivingMethod'] = _ApiClient["default"].convertToType(data['receivingMethod'], _OneOfACHCheckEFT["default"]);
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], _Status["default"]);
        }
      }

      return obj;
    }
  }]);

  return Recipient;
}();
/**
 * @member {String} id
 */


Recipient.prototype['id'] = undefined;
/**
 * @member {String} businessName
 */

Recipient.prototype['businessName'] = undefined;
/**
 * @member {String} categoryId
 */

Recipient.prototype['categoryId'] = undefined;
/**
 * @member {module:model/RecipientAddress} businessAddress
 */

Recipient.prototype['businessAddress'] = undefined;
/**
 * @member {module:model/RecipientContact} contact
 */

Recipient.prototype['contact'] = undefined;
/**
 * @member {module:model/OneOfACHCheckEFT} receivingMethod
 */

Recipient.prototype['receivingMethod'] = undefined;
/**
 * @member {Date} createdAt
 */

Recipient.prototype['createdAt'] = undefined;
/**
 * @member {module:model/Status} status
 */

Recipient.prototype['status'] = undefined;
var _default = Recipient;
exports["default"] = _default;