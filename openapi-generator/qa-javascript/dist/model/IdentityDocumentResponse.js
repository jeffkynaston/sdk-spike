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
 * The IdentityDocumentResponse model module.
 * @module model/IdentityDocumentResponse
 * @version 1.0.0
 */
var IdentityDocumentResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdentityDocumentResponse</code>.
   * @alias module:model/IdentityDocumentResponse
   */
  function IdentityDocumentResponse() {
    _classCallCheck(this, IdentityDocumentResponse);

    IdentityDocumentResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IdentityDocumentResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IdentityDocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdentityDocumentResponse} obj Optional instance to populate.
     * @return {module:model/IdentityDocumentResponse} The populated <code>IdentityDocumentResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdentityDocumentResponse();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IdentityDocumentResponse;
}();
/**
 * @member {module:model/IdentityDocumentResponse.TypeEnum} type
 */


IdentityDocumentResponse.prototype['type'] = undefined;
/**
 * @member {String} id
 */

IdentityDocumentResponse.prototype['id'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

IdentityDocumentResponse['TypeEnum'] = {
  /**
   * value: "US_TIN"
   * @const
   */
  "US_TIN": "US_TIN",

  /**
   * value: "US_EIN"
   * @const
   */
  "US_EIN": "US_EIN",

  /**
   * value: "US_SSN"
   * @const
   */
  "US_SSN": "US_SSN",

  /**
   * value: "PASSPORT_NUMBER"
   * @const
   */
  "PASSPORT_NUMBER": "PASSPORT_NUMBER",

  /**
   * value: "ALIEN_REGISTRATION_NUMBER"
   * @const
   */
  "ALIEN_REGISTRATION_NUMBER": "ALIEN_REGISTRATION_NUMBER"
};
var _default = IdentityDocumentResponse;
exports["default"] = _default;