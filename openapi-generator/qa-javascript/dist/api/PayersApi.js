"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreatePayerRequest = _interopRequireDefault(require("../model/CreatePayerRequest"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _Payer = _interopRequireDefault(require("../model/Payer"));

var _UpdatePayerRequest = _interopRequireDefault(require("../model/UpdatePayerRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Payers service.
* @module api/PayersApi
* @version 1.0.0
*/
var PayersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PayersApi. 
  * @alias module:api/PayersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PayersApi(apiClient) {
    _classCallCheck(this, PayersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete a Payer
   * @param {String} id The ID of the Payer
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(PayersApi, [{
    key: "payersIdDeleteWithHttpInfo",
    value: function payersIdDeleteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling payersIdDelete");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/payers/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a Payer
     * @param {String} id The ID of the Payer
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "payersIdDelete",
    value: function payersIdDelete(id) {
      return this.payersIdDeleteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieve a Payer
     * @param {String} id The ID of the Payer
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Payer} and HTTP response
     */

  }, {
    key: "payersIdGetWithHttpInfo",
    value: function payersIdGetWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling payersIdGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Payer["default"];
      return this.apiClient.callApi('/payers/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieve a Payer
     * @param {String} id The ID of the Payer
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payer}
     */

  }, {
    key: "payersIdGet",
    value: function payersIdGet(id) {
      return this.payersIdGetWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Payer
     * @param {String} id The ID of the Payer
     * @param {module:model/UpdatePayerRequest} updatePayerRequest Payer to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Payer} and HTTP response
     */

  }, {
    key: "payersIdPatchWithHttpInfo",
    value: function payersIdPatchWithHttpInfo(id, updatePayerRequest) {
      var postBody = updatePayerRequest; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling payersIdPatch");
      } // verify the required parameter 'updatePayerRequest' is set


      if (updatePayerRequest === undefined || updatePayerRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'updatePayerRequest' when calling payersIdPatch");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Payer["default"];
      return this.apiClient.callApi('/payers/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Payer
     * @param {String} id The ID of the Payer
     * @param {module:model/UpdatePayerRequest} updatePayerRequest Payer to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payer}
     */

  }, {
    key: "payersIdPatch",
    value: function payersIdPatch(id, updatePayerRequest) {
      return this.payersIdPatchWithHttpInfo(id, updatePayerRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a Payer
     * @param {module:model/CreatePayerRequest} createPayerRequest Payer to create
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
     * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Payer} and HTTP response
     */

  }, {
    key: "payersPostWithHttpInfo",
    value: function payersPostWithHttpInfo(createPayerRequest, opts) {
      opts = opts || {};
      var postBody = createPayerRequest; // verify the required parameter 'createPayerRequest' is set

      if (createPayerRequest === undefined || createPayerRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'createPayerRequest' when calling payersPost");
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
      var returnType = _Payer["default"];
      return this.apiClient.callApi('/payers', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a Payer
     * @param {module:model/CreatePayerRequest} createPayerRequest Payer to create
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
     * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payer}
     */

  }, {
    key: "payersPost",
    value: function payersPost(createPayerRequest, opts) {
      return this.payersPostWithHttpInfo(createPayerRequest, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PayersApi;
}();

exports["default"] = PayersApi;