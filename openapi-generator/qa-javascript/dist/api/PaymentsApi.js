"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreatePaymentIntentRequestPayload = _interopRequireDefault(require("../model/CreatePaymentIntentRequestPayload"));

var _CreatePaymentRequest = _interopRequireDefault(require("../model/CreatePaymentRequest"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2002"));

var _PatchPaymentIntentRequestPayload = _interopRequireDefault(require("../model/PatchPaymentIntentRequestPayload"));

var _Payment = _interopRequireDefault(require("../model/Payment"));

var _PaymentIntent = _interopRequireDefault(require("../model/PaymentIntent"));

var _PaymentRefund = _interopRequireDefault(require("../model/PaymentRefund"));

var _PaymentRefundRequest = _interopRequireDefault(require("../model/PaymentRefundRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Payments service.
* @module api/PaymentsApi
* @version 1.0.0
*/
var PaymentsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PaymentsApi. 
  * @alias module:api/PaymentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentsApi(apiClient) {
    _classCallCheck(this, PaymentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Retrieve a single Payment Intent
   * @param {String} payerId The Payer ID of the Payment Intent
   * @param {String} id The ID of the Payment Intent
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentIntent} and HTTP response
   */


  _createClass(PaymentsApi, [{
    key: "paymentIntentsIdGetWithHttpInfo",
    value: function paymentIntentsIdGetWithHttpInfo(payerId, id) {
      var postBody = null; // verify the required parameter 'payerId' is set

      if (payerId === undefined || payerId === null) {
        throw new _Error["default"]("Missing the required parameter 'payerId' when calling paymentIntentsIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling paymentIntentsIdGet");
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
      var returnType = _PaymentIntent["default"];
      return this.apiClient.callApi('/payment-intents/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieve a single Payment Intent
     * @param {String} payerId The Payer ID of the Payment Intent
     * @param {String} id The ID of the Payment Intent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentIntent}
     */

  }, {
    key: "paymentIntentsIdGet",
    value: function paymentIntentsIdGet(payerId, id) {
      return this.paymentIntentsIdGetWithHttpInfo(payerId, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Payment Intent
     * @param {String} id The ID of the Payment Intent
     * @param {module:model/PatchPaymentIntentRequestPayload} patchPaymentIntentRequestPayload Payment Intent to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentIntent} and HTTP response
     */

  }, {
    key: "paymentIntentsIdPatchWithHttpInfo",
    value: function paymentIntentsIdPatchWithHttpInfo(id, patchPaymentIntentRequestPayload) {
      var postBody = patchPaymentIntentRequestPayload; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling paymentIntentsIdPatch");
      } // verify the required parameter 'patchPaymentIntentRequestPayload' is set


      if (patchPaymentIntentRequestPayload === undefined || patchPaymentIntentRequestPayload === null) {
        throw new _Error["default"]("Missing the required parameter 'patchPaymentIntentRequestPayload' when calling paymentIntentsIdPatch");
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
      var returnType = _PaymentIntent["default"];
      return this.apiClient.callApi('/payment-intents/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Payment Intent
     * @param {String} id The ID of the Payment Intent
     * @param {module:model/PatchPaymentIntentRequestPayload} patchPaymentIntentRequestPayload Payment Intent to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentIntent}
     */

  }, {
    key: "paymentIntentsIdPatch",
    value: function paymentIntentsIdPatch(id, patchPaymentIntentRequestPayload) {
      return this.paymentIntentsIdPatchWithHttpInfo(id, patchPaymentIntentRequestPayload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a Payment Intent
     * @param {module:model/CreatePaymentIntentRequestPayload} createPaymentIntentRequestPayload Create a Payment Intent object staging it for execution
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
     * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentIntent} and HTTP response
     */

  }, {
    key: "paymentIntentsPostWithHttpInfo",
    value: function paymentIntentsPostWithHttpInfo(createPaymentIntentRequestPayload, opts) {
      opts = opts || {};
      var postBody = createPaymentIntentRequestPayload; // verify the required parameter 'createPaymentIntentRequestPayload' is set

      if (createPaymentIntentRequestPayload === undefined || createPaymentIntentRequestPayload === null) {
        throw new _Error["default"]("Missing the required parameter 'createPaymentIntentRequestPayload' when calling paymentIntentsPost");
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
      var returnType = _PaymentIntent["default"];
      return this.apiClient.callApi('/payment-intents', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a Payment Intent
     * @param {module:model/CreatePaymentIntentRequestPayload} createPaymentIntentRequestPayload Create a Payment Intent object staging it for execution
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
     * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentIntent}
     */

  }, {
    key: "paymentIntentsPost",
    value: function paymentIntentsPost(createPaymentIntentRequestPayload, opts) {
      return this.paymentIntentsPostWithHttpInfo(createPaymentIntentRequestPayload, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieve a paginated list of payments by query parameter(s)
     * @param {String} payerId The associated Payer ID to list payments for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The number of records you wish to skip before selecting records
     * @param {Number} opts.limit Number of items to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */

  }, {
    key: "paymentsGetWithHttpInfo",
    value: function paymentsGetWithHttpInfo(payerId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'payerId' is set

      if (payerId === undefined || payerId === null) {
        throw new _Error["default"]("Missing the required parameter 'payerId' when calling paymentsGet");
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
      return this.apiClient.callApi('/payments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieve a paginated list of payments by query parameter(s)
     * @param {String} payerId The associated Payer ID to list payments for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The number of records you wish to skip before selecting records
     * @param {Number} opts.limit Number of items to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */

  }, {
    key: "paymentsGet",
    value: function paymentsGet(payerId, opts) {
      return this.paymentsGetWithHttpInfo(payerId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieve a single Payment
     * @param {String} payerId The Payer ID associated with the Payment
     * @param {String} id The ID of the Payment
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Payment} and HTTP response
     */

  }, {
    key: "paymentsIdGetWithHttpInfo",
    value: function paymentsIdGetWithHttpInfo(payerId, id) {
      var postBody = null; // verify the required parameter 'payerId' is set

      if (payerId === undefined || payerId === null) {
        throw new _Error["default"]("Missing the required parameter 'payerId' when calling paymentsIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling paymentsIdGet");
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
      var returnType = _Payment["default"];
      return this.apiClient.callApi('/payments/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieve a single Payment
     * @param {String} payerId The Payer ID associated with the Payment
     * @param {String} id The ID of the Payment
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payment}
     */

  }, {
    key: "paymentsIdGet",
    value: function paymentsIdGet(payerId, id) {
      return this.paymentsIdGetWithHttpInfo(payerId, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Refund or cancel an existing Payment
     * @param {String} id The ID of the Payment to refund
     * @param {module:model/PaymentRefundRequest} paymentRefundRequest Payment Refund body
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentRefund} and HTTP response
     */

  }, {
    key: "paymentsIdRefundsPostWithHttpInfo",
    value: function paymentsIdRefundsPostWithHttpInfo(id, paymentRefundRequest, opts) {
      opts = opts || {};
      var postBody = paymentRefundRequest; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling paymentsIdRefundsPost");
      } // verify the required parameter 'paymentRefundRequest' is set


      if (paymentRefundRequest === undefined || paymentRefundRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'paymentRefundRequest' when calling paymentsIdRefundsPost");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'Trace-Id': opts['traceId']
      };
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PaymentRefund["default"];
      return this.apiClient.callApi('/payments/{id}/refunds', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Refund or cancel an existing Payment
     * @param {String} id The ID of the Payment to refund
     * @param {module:model/PaymentRefundRequest} paymentRefundRequest Payment Refund body
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentRefund}
     */

  }, {
    key: "paymentsIdRefundsPost",
    value: function paymentsIdRefundsPost(id, paymentRefundRequest, opts) {
      return this.paymentsIdRefundsPostWithHttpInfo(id, paymentRefundRequest, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a Payment from a Payment Intent
     * @param {module:model/CreatePaymentRequest} createPaymentRequest Payment to create
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
     * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.idempotencyKey A valid UUID (V4) for handling duplicate requests. Will return original status code, response body, and set a 'Idempotent-Replay' header on response for a given key if a match exists.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Payment} and HTTP response
     */

  }, {
    key: "paymentsPostWithHttpInfo",
    value: function paymentsPostWithHttpInfo(createPaymentRequest, opts) {
      opts = opts || {};
      var postBody = createPaymentRequest; // verify the required parameter 'createPaymentRequest' is set

      if (createPaymentRequest === undefined || createPaymentRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'createPaymentRequest' when calling paymentsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Trace-Id': opts['traceId'],
        'User-Agent': opts['userAgent'],
        'End-User-Device-Id': opts['endUserDeviceId'],
        'End-User-Ip': opts['endUserIp'],
        'Idempotency-Key': opts['idempotencyKey']
      };
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Payment["default"];
      return this.apiClient.callApi('/payments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a Payment from a Payment Intent
     * @param {module:model/CreatePaymentRequest} createPaymentRequest Payment to create
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
     * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.idempotencyKey A valid UUID (V4) for handling duplicate requests. Will return original status code, response body, and set a 'Idempotent-Replay' header on response for a given key if a match exists.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payment}
     */

  }, {
    key: "paymentsPost",
    value: function paymentsPost(createPaymentRequest, opts) {
      return this.paymentsPostWithHttpInfo(createPaymentRequest, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PaymentsApi;
}();

exports["default"] = PaymentsApi;