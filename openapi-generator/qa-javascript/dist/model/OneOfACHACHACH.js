"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ACH = _interopRequireDefault(require("./ACH"));

var _Check = _interopRequireDefault(require("./Check"));

var _EFT = _interopRequireDefault(require("./EFT"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Check model module.
 * @module model/Check
 * @version 1.0.0
 */
var OneOfACHACHACH = /*#__PURE__*/function () {
  function OneOfACHACHACH() {
    _classCallCheck(this, OneOfACHACHACH);
  }

  _createClass(OneOfACHACHACH, null, [{
    key: "constructFromObject",
    value:
    /**
     * Constructs a <code>Check</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Check} obj Optional instance to populate.
     * @return {module:model/Check} The populated <code>Check</code> instance.
     */
    function constructFromObject(data, obj) {
      if (data) {
        switch (data['type']) {
          case 'ACH':
            obj = obj || new _ACH["default"]();

            _ACH["default"].constructFromObject(data, obj);

          case 'CHECK':
            obj = obj || new _Check["default"]();

            _Check["default"].constructFromObject(data, obj);

          case 'EFT':
            obj = obj || new _EFT["default"]();

            _EFT["default"].constructFromObject(data, obj);

        }
      }

      return obj;
    }
  }]);

  return OneOfACHACHACH;
}();

var _default = OneOfACHACHACH;
exports["default"] = _default;