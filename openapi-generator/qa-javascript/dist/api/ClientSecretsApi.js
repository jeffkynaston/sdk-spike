"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2001"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ClientSecrets service.
* @module api/ClientSecretsApi
* @version 1.0.0
*/
var ClientSecretsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ClientSecretsApi. 
  * @alias module:api/ClientSecretsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ClientSecretsApi(apiClient) {
    _classCallCheck(this, ClientSecretsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create a single-use Client Secret
   * @param {module:model/InlineObject} inlineObject 
   * @param {Object} opts Optional parameters
   * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
   * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
   * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
   * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
   */


  _createClass(ClientSecretsApi, [{
    key: "clientSecretsPostWithHttpInfo",
    value: function clientSecretsPostWithHttpInfo(inlineObject, opts) {
      opts = opts || {};
      var postBody = inlineObject; // verify the required parameter 'inlineObject' is set

      if (inlineObject === undefined || inlineObject === null) {
        throw new _Error["default"]("Missing the required parameter 'inlineObject' when calling clientSecretsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Trace-Id': opts['traceId'],
        'User-Agent': opts['userAgent'],
        'End-User-Device-Id': opts['endUserDeviceId'],
        'End-User-Ip': opts['endUserIp']
      };
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/client-secrets', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a single-use Client Secret
     * @param {module:model/InlineObject} inlineObject 
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
     * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */

  }, {
    key: "clientSecretsPost",
    value: function clientSecretsPost(inlineObject, opts) {
      return this.clientSecretsPostWithHttpInfo(inlineObject, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ClientSecretsApi;
}();

exports["default"] = ClientSecretsApi;