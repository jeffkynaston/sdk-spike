/**
 * Plastiq Public API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateRecipientRequest from '../model/CreateRecipientRequest';
import Error from '../model/Error';
import InlineResponse2004 from '../model/InlineResponse2004';
import PatchRecipientRequest from '../model/PatchRecipientRequest';
import Recipient from '../model/Recipient';

/**
* Recipients service.
* @module api/RecipientsApi
* @version 1.0.0
*/
export default class RecipientsApi {

    /**
    * Constructs a new RecipientsApi. 
    * @alias module:api/RecipientsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the recipientsGet operation.
     * @callback module:api/RecipientsApi~recipientsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a paginated list of Recipients by query parameter(s)
     * @param {Object} opts Optional parameters
     * @param {String} opts.payerId List only Recipients associated with this Payer ID
     * @param {Number} opts.offset The number of records you wish to skip before selecting records
     * @param {Number} opts.limit Number of items to return
     * @param {module:api/RecipientsApi~recipientsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    recipientsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'payerId': opts['payerId'],
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2004;
      return this.apiClient.callApi(
        '/recipients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the recipientsIdDelete operation.
     * @callback module:api/RecipientsApi~recipientsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Recipient
     * @param {String} id The ID of the Recipient
     * @param {Object} opts Optional parameters
     * @param {String} opts.payerId The ID of the Payer the Recipient is scoped to
     * @param {module:api/RecipientsApi~recipientsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    recipientsIdDelete(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling recipientsIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'payerId': opts['payerId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/recipients/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the recipientsIdGet operation.
     * @callback module:api/RecipientsApi~recipientsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Recipient
     * @param {String} id The ID of the Recipient
     * @param {Object} opts Optional parameters
     * @param {String} opts.payerId The ID of the Payer the Recipient is scoped to
     * @param {module:api/RecipientsApi~recipientsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipient}
     */
    recipientsIdGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling recipientsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'payerId': opts['payerId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Recipient;
      return this.apiClient.callApi(
        '/recipients/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the recipientsIdPatch operation.
     * @callback module:api/RecipientsApi~recipientsIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Recipient
     * @param {String} id The ID of the Recipient
     * @param {module:model/PatchRecipientRequest} patchRecipientRequest Recipient to create
     * @param {module:api/RecipientsApi~recipientsIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipient}
     */
    recipientsIdPatch(id, patchRecipientRequest, callback) {
      let postBody = patchRecipientRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling recipientsIdPatch");
      }
      // verify the required parameter 'patchRecipientRequest' is set
      if (patchRecipientRequest === undefined || patchRecipientRequest === null) {
        throw new Error("Missing the required parameter 'patchRecipientRequest' when calling recipientsIdPatch");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Recipient;
      return this.apiClient.callApi(
        '/recipients/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the recipientsPost operation.
     * @callback module:api/RecipientsApi~recipientsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recipient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Recipient
     * @param {module:model/CreateRecipientRequest} createRecipientRequest Recipient to create
     * @param {Object} opts Optional parameters
     * @param {String} opts.traceId A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
     * @param {String} opts.userAgent A string representing the User Agent. Required only when the request is not coming from the end user's browser.
     * @param {String} opts.endUserDeviceId A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {String} opts.endUserIp The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
     * @param {module:api/RecipientsApi~recipientsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recipient}
     */
    recipientsPost(createRecipientRequest, opts, callback) {
      opts = opts || {};
      let postBody = createRecipientRequest;
      // verify the required parameter 'createRecipientRequest' is set
      if (createRecipientRequest === undefined || createRecipientRequest === null) {
        throw new Error("Missing the required parameter 'createRecipientRequest' when calling recipientsPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Trace-Id': opts['traceId'],
        'User-Agent': opts['userAgent'],
        'End-User-Device-Id': opts['endUserDeviceId'],
        'End-User-Ip': opts['endUserIp']
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Recipient;
      return this.apiClient.callApi(
        '/recipients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
