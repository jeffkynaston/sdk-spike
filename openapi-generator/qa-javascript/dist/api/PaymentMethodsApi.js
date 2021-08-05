"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreatePaymentMethodRequest = _interopRequireDefault(require("../model/CreatePaymentMethodRequest"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2003"));

var _PatchPaymentMethodRequest = _interopRequireDefault(require("../model/PatchPaymentMethodRequest"));

var _PaymentMethod = _interopRequireDefault(require("../model/PaymentMethod"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* PaymentMethods service.
* @module api/PaymentMethodsApi
* @version 1.0.0
*/
var PaymentMethodsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PaymentMethodsApi. 
  * @alias module:api/PaymentMethodsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentMethodsApi(apiClient) {
    _classCallCheck(this, PaymentMethodsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Retrieve a paginated list of Payment Methods by query parameter(s)
   * @param {String} payerId The associated Payer ID to list Payment Methods for
   * @param {Object} opts Optional parameters
   * @param {Number} opts.offset The number of records you wish to skip before selecting records
   * @param {Number} opts.limit Number of items to return
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
   */


  _createClass(PaymentMethodsApi, [{
    key: "paymentMethodsGetWithHttpInfo",
    value: function paymentMethodsGetWithHttpInfo(payerId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payerId' is set

      if (payerId === undefined || payerId === null) {
        throw new _Error["default"]("Missing the required parameter 'payerId' when calling paymentMethodsGet");
      }

      var pathParams = {};
      var queryParams = {
        'payerId': payerId,
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/payment-methods', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieve a paginated list of Payment Methods by query parameter(s)
     * @param {String} payerId The associated Payer ID to list Payment Methods for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The number of records you wish to skip before selecting records
     * @param {Number} opts.limit Number of items to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */

  }, {
    key: "paymentMethodsGet",
    value: function paymentMethodsGet(payerId, opts) {
      return this.paymentMethodsGetWithHttpInfo(payerId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a Payment Method
     * @param {String} id The ID of the Payment Method
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "paymentMethodsIdDeleteWithHttpInfo",
    value: function paymentMethodsIdDeleteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling paymentMethodsIdDelete");
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
      return this.apiClient.callApi('/payment-methods/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a Payment Method
     * @param {String} id The ID of the Payment Method
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "paymentMethodsIdDelete",
    value: function paymentMethodsIdDelete(id) {
      return this.paymentMethodsIdDeleteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieve a Payment Method
     * @param {String} payerId The Payer ID associated to the Payment Method
     * @param {String} id The ID of the Payment Method
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentMethod} and HTTP response
     */

  }, {
    key: "paymentMethodsIdGetWithHttpInfo",
    value: function paymentMethodsIdGetWithHttpInfo(payerId, id) {
      var postBody = null; // verify the required parameter 'payerId' is set

      if (payerId === undefined || payerId === null) {
        throw new _Error["default"]("Missing the required parameter 'payerId' when calling paymentMethodsIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling paymentMethodsIdGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'payerId': payerId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaymentMethod["default"];
      return this.apiClient.callApi('/payment-methods/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieve a Payment Method
     * @param {String} payerId The Payer ID associated to the Payment Method
     * @param {String} id The ID of the Payment Method
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentMethod}
     */

  }, {
    key: "paymentMethodsIdGet",
    value: function paymentMethodsIdGet(payerId, id) {
      return this.paymentMethodsIdGetWithHttpInfo(payerId, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Payment Method
     * @param {String} id The ID of the Payment Method
     * @param {module:model/PatchPaymentMethodRequest} patchPaymentMethodRequest Payment Method to update
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
     * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentMethod} and HTTP response
     */

  }, {
    key: "paymentMethodsIdPatchWithHttpInfo",
    value: function paymentMethodsIdPatchWithHttpInfo(id, patchPaymentMethodRequest, opts) {
      opts = opts || {};
      var postBody = patchPaymentMethodRequest; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling paymentMethodsIdPatch");
      } // verify the required parameter 'patchPaymentMethodRequest' is set


      if (patchPaymentMethodRequest === undefined || patchPaymentMethodRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'patchPaymentMethodRequest' when calling paymentMethodsIdPatch");
      }

      var pathParams = {
        'id': id
      };
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
      var returnType = _PaymentMethod["default"];
      return this.apiClient.callApi('/payment-methods/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Payment Method
     * @param {String} id The ID of the Payment Method
     * @param {module:model/PatchPaymentMethodRequest} patchPaymentMethodRequest Payment Method to update
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
     * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentMethod}
     */

  }, {
    key: "paymentMethodsIdPatch",
    value: function paymentMethodsIdPatch(id, patchPaymentMethodRequest, opts) {
      return this.paymentMethodsIdPatchWithHttpInfo(id, patchPaymentMethodRequest, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a Payment Method
     * @param {module:model/CreatePaymentMethodRequest} createPaymentMethodRequest Payment Method to create
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
     * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentMethod} and HTTP response
     */

  }, {
    key: "paymentMethodsPostWithHttpInfo",
    value: function paymentMethodsPostWithHttpInfo(createPaymentMethodRequest, opts) {
      opts = opts || {};
      var postBody = createPaymentMethodRequest; // verify the required parameter 'createPaymentMethodRequest' is set

      if (createPaymentMethodRequest === undefined || createPaymentMethodRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'createPaymentMethodRequest' when calling paymentMethodsPost");
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
      var returnType = _PaymentMethod["default"];
      return this.apiClient.callApi('/payment-methods', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a Payment Method
     * @param {module:model/CreatePaymentMethodRequest} createPaymentMethodRequest Payment Method to create
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
     * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentMethod}
     */

  }, {
    key: "paymentMethodsPost",
    value: function paymentMethodsPost(createPaymentMethodRequest, opts) {
      return this.paymentMethodsPostWithHttpInfo(createPaymentMethodRequest, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PaymentMethodsApi;
}();

exports["default"] = PaymentMethodsApi;