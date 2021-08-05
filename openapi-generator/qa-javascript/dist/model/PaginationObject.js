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
 * The PaginationObject model module.
 * @module model/PaginationObject
 * @version 1.0.0
 */
var PaginationObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaginationObject</code>.
   * @alias module:model/PaginationObject
   */
  function PaginationObject() {
    _classCallCheck(this, PaginationObject);

    PaginationObject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaginationObject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaginationObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginationObject} obj Optional instance to populate.
     * @return {module:model/PaginationObject} The populated <code>PaginationObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaginationObject();

        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('hasNextPage')) {
          obj['hasNextPage'] = _ApiClient["default"].convertToType(data['hasNextPage'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return PaginationObject;
}();
/**
 * @member {Number} offset
 */


PaginationObject.prototype['offset'] = undefined;
/**
 * @member {Number} limit
 */

PaginationObject.prototype['limit'] = undefined;
/**
 * @member {Number} total
 */

PaginationObject.prototype['total'] = undefined;
/**
 * @member {Boolean} hasNextPage
 */

PaginationObject.prototype['hasNextPage'] = undefined;
var _default = PaginationObject;
exports["default"] = _default;