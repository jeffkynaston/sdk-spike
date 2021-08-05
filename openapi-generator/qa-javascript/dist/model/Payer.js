"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Address = _interopRequireDefault(require("./Address"));

var _Contact = _interopRequireDefault(require("./Contact"));

var _IdentityDocumentResponse = _interopRequireDefault(require("./IdentityDocumentResponse"));

var _Status = _interopRequireDefault(require("./Status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Payer model module.
 * @module model/Payer
 * @version 1.0.0
 */
var Payer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Payer</code>.
   * @alias module:model/Payer
   */
  function Payer() {
    _classCallCheck(this, Payer);

    Payer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Payer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Payer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Payer} obj Optional instance to populate.
     * @return {module:model/Payer} The populated <code>Payer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Payer();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('businessName')) {
          obj['businessName'] = _ApiClient["default"].convertToType(data['businessName'], 'String');
        }

        if (data.hasOwnProperty('contact')) {
          obj['contact'] = _Contact["default"].constructFromObject(data['contact']);
        }

        if (data.hasOwnProperty('businessAddress')) {
          obj['businessAddress'] = _ApiClient["default"].convertToType(data['businessAddress'], _Address["default"]);
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], _Status["default"]);
        }

        if (data.hasOwnProperty('identityDocuments')) {
          obj['identityDocuments'] = _ApiClient["default"].convertToType(data['identityDocuments'], [_IdentityDocumentResponse["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Payer;
}();
/**
 * @member {String} id
 */


Payer.prototype['id'] = undefined;
/**
 * @member {String} businessName
 */

Payer.prototype['businessName'] = undefined;
/**
 * @member {module:model/Contact} contact
 */

Payer.prototype['contact'] = undefined;
/**
 * @member {module:model/Address} businessAddress
 */

Payer.prototype['businessAddress'] = undefined;
/**
 * @member {Date} createdAt
 */

Payer.prototype['createdAt'] = undefined;
/**
 * @member {module:model/Status} status
 */

Payer.prototype['status'] = undefined;
/**
 * @member {Array.<module:model/IdentityDocumentResponse>} identityDocuments
 */

Payer.prototype['identityDocuments'] = undefined;
var _default = Payer;
exports["default"] = _default;