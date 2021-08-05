"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateRecipientRequest = _interopRequireDefault(require("../model/CreateRecipientRequest"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2004"));

var _PatchRecipientRequest = _interopRequireDefault(require("../model/PatchRecipientRequest"));

var _Recipient = _interopRequireDefault(require("../model/Recipient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Recipients service.
* @module api/RecipientsApi
* @version 1.0.0
*/
var RecipientsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RecipientsApi. 
  * @alias module:api/RecipientsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RecipientsApi(apiClient) {
    _classCallCheck(this, RecipientsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Retrieve a paginated list of Recipients by query parameter(s)
   * @param {Object} opts Optional parameters
   * @param {String} opts.payerId List only Recipients associated with this Payer ID
   * @param {Number} opts.offset The number of records you wish to skip before selecting records
   * @param {Number} opts.limit Number of items to return
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
   */


  _createClass(RecipientsApi, [{
    key: "recipientsGetWithHttpInfo",
    value: function recipientsGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'payerId': opts['payerId'],
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/recipients', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieve a paginated list of Recipients by query parameter(s)
     * @param {Object} opts Optional parameters
     * @param {String} opts.payerId List only Recipients associated with this Payer ID
     * @param {Number} opts.offset The number of records you wish to skip before selecting records
     * @param {Number} opts.limit Number of items to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */

  }, {
    key: "recipientsGet",
    value: function recipientsGet(opts) {
      return this.recipientsGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a Recipient
     * @param {String} id The ID of the Recipient
     * @param {Object} opts Optional parameters
     * @param {String} opts.payerId The ID of the Payer the Recipient is scoped to
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "recipientsIdDeleteWithHttpInfo",
    value: function recipientsIdDeleteWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling recipientsIdDelete");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'payerId': opts['payerId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/recipients/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a Recipient
     * @param {String} id The ID of the Recipient
     * @param {Object} opts Optional parameters
     * @param {String} opts.payerId The ID of the Payer the Recipient is scoped to
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "recipientsIdDelete",
    value: function recipientsIdDelete(id, opts) {
      return this.recipientsIdDeleteWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieve a Recipient
     * @param {String} id The ID of the Recipient
     * @param {Object} opts Optional parameters
     * @param {String} opts.payerId The ID of the Payer the Recipient is scoped to
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Recipient} and HTTP response
     */

  }, {
    key: "recipientsIdGetWithHttpInfo",
    value: function recipientsIdGetWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling recipientsIdGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'payerId': opts['payerId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Recipient["default"];
      return this.apiClient.callApi('/recipients/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieve a Recipient
     * @param {String} id The ID of the Recipient
     * @param {Object} opts Optional parameters
     * @param {String} opts.payerId The ID of the Payer the Recipient is scoped to
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Recipient}
     */

  }, {
    key: "recipientsIdGet",
    value: function recipientsIdGet(id, opts) {
      return this.recipientsIdGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Recipient
     * @param {String} id The ID of the Recipient
     * @param {module:model/PatchRecipientRequest} patchRecipientRequest Recipient to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Recipient} and HTTP response
     */

  }, {
    key: "recipientsIdPatchWithHttpInfo",
    value: function recipientsIdPatchWithHttpInfo(id, patchRecipientRequest) {
      var postBody = patchRecipientRequest; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling recipientsIdPatch");
      } // verify the required parameter 'patchRecipientRequest' is set


      if (patchRecipientRequest === undefined || patchRecipientRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'patchRecipientRequest' when calling recipientsIdPatch");
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
      var returnType = _Recipient["default"];
      return this.apiClient.callApi('/recipients/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Recipient
     * @param {String} id The ID of the Recipient
     * @param {module:model/PatchRecipientRequest} patchRecipientRequest Recipient to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Recipient}
     */

  }, {
    key: "recipientsIdPatch",
    value: function recipientsIdPatch(id, patchRecipientRequest) {
      return this.recipientsIdPatchWithHttpInfo(id, patchRecipientRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a Recipient
     * @param {module:model/CreateRecipientRequest} createRecipientRequest Recipient to create
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
     * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Recipient} and HTTP response
     */

  }, {
    key: "recipientsPostWithHttpInfo",
    value: function recipientsPostWithHttpInfo(createRecipientRequest, opts) {
      opts = opts || {};
      var postBody = createRecipientRequest; // verify the required parameter 'createRecipientRequest' is set

      if (createRecipientRequest === undefined || createRecipientRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'createRecipientRequest' when calling recipientsPost");
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
      var returnType = _Recipient["default"];
      return this.apiClient.callApi('/recipients', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a Recipient
     * @param {module:model/CreateRecipientRequest} createRecipientRequest Recipient to create
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
     * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Recipient}
     */

  }, {
    key: "recipientsPost",
    value: function recipientsPost(createRecipientRequest, opts) {
      return this.recipientsPostWithHttpInfo(createRecipientRequest, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return RecipientsApi;
}();

exports["default"] = RecipientsApi;