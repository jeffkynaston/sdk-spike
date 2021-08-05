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
 * The StatusReason model module.
 * @module model/StatusReason
 * @version 1.0.0
 */
var StatusReason = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StatusReason</code>.
   * Used to provide more context in reference to the status response
   * @alias module:model/StatusReason
   */
  function StatusReason() {
    _classCallCheck(this, StatusReason);

    StatusReason.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StatusReason, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StatusReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StatusReason} obj Optional instance to populate.
     * @return {module:model/StatusReason} The populated <code>StatusReason</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StatusReason();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return StatusReason;
}();
/**
 * @member {String} code
 */


StatusReason.prototype['code'] = undefined;
/**
 * @member {String} message
 */

StatusReason.prototype['message'] = undefined;
var _default = StatusReason;
exports["default"] = _default;