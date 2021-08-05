"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateDocumentUploadRequest = _interopRequireDefault(require("../model/CreateDocumentUploadRequest"));

var _DocumentUpload = _interopRequireDefault(require("../model/DocumentUpload"));

var _Error = _interopRequireDefault(require("../model/Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Documents service.
* @module api/DocumentsApi
* @version 1.0.0
*/
var DocumentsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DocumentsApi. 
  * @alias module:api/DocumentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DocumentsApi(apiClient) {
    _classCallCheck(this, DocumentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Upload a document
   * @param {module:model/CreateDocumentUploadRequest} createDocumentUploadRequest Document metadata
   * @param {Object} opts Optional parameters
   * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
   * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
   * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
   * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DocumentUpload} and HTTP response
   */


  _createClass(DocumentsApi, [{
    key: "documentsPostWithHttpInfo",
    value: function documentsPostWithHttpInfo(createDocumentUploadRequest, opts) {
      opts = opts || {};
      var postBody = createDocumentUploadRequest; // verify the required parameter 'createDocumentUploadRequest' is set

      if (createDocumentUploadRequest === undefined || createDocumentUploadRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'createDocumentUploadRequest' when calling documentsPost");
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
      var returnType = _DocumentUpload["default"];
      return this.apiClient.callApi('/documents', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Upload a document
     * @param {module:model/CreateDocumentUploadRequest} createDocumentUploadRequest Document metadata
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
     * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DocumentUpload}
     */

  }, {
    key: "documentsPost",
    value: function documentsPost(createDocumentUploadRequest, opts) {
      return this.documentsPostWithHttpInfo(createDocumentUploadRequest, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return DocumentsApi;
}();

exports["default"] = DocumentsApi;