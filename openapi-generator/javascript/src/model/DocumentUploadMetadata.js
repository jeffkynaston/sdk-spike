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

import ApiClient from '../ApiClient';

/**
 * The DocumentUploadMetadata model module.
 * @module model/DocumentUploadMetadata
 * @version 1.0.0
 */
class DocumentUploadMetadata {
    /**
     * Constructs a new <code>DocumentUploadMetadata</code>.
     * @alias module:model/DocumentUploadMetadata
     */
    constructor() { 
        
        DocumentUploadMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentUploadMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentUploadMetadata} obj Optional instance to populate.
     * @return {module:model/DocumentUploadMetadata} The populated <code>DocumentUploadMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentUploadMetadata();

            if (data.hasOwnProperty('Key')) {
                obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
            }
            if (data.hasOwnProperty('success_action_status')) {
                obj['success_action_status'] = ApiClient.convertToType(data['success_action_status'], 'String');
            }
            if (data.hasOwnProperty('bucket')) {
                obj['bucket'] = ApiClient.convertToType(data['bucket'], 'String');
            }
            if (data.hasOwnProperty('X-Amz-Algorithm')) {
                obj['X-Amz-Algorithm'] = ApiClient.convertToType(data['X-Amz-Algorithm'], 'String');
            }
            if (data.hasOwnProperty('X-Amz-Credential')) {
                obj['X-Amz-Credential'] = ApiClient.convertToType(data['X-Amz-Credential'], 'String');
            }
            if (data.hasOwnProperty('X-Amz-Date')) {
                obj['X-Amz-Date'] = ApiClient.convertToType(data['X-Amz-Date'], 'String');
            }
            if (data.hasOwnProperty('X-Amz-Security-Token')) {
                obj['X-Amz-Security-Token'] = ApiClient.convertToType(data['X-Amz-Security-Token'], 'String');
            }
            if (data.hasOwnProperty('Policy')) {
                obj['Policy'] = ApiClient.convertToType(data['Policy'], 'String');
            }
            if (data.hasOwnProperty('X-Amz-Signature')) {
                obj['X-Amz-Signature'] = ApiClient.convertToType(data['X-Amz-Signature'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Key
 */
DocumentUploadMetadata.prototype['Key'] = undefined;

/**
 * @member {String} success_action_status
 */
DocumentUploadMetadata.prototype['success_action_status'] = undefined;

/**
 * @member {String} bucket
 */
DocumentUploadMetadata.prototype['bucket'] = undefined;

/**
 * @member {String} X-Amz-Algorithm
 */
DocumentUploadMetadata.prototype['X-Amz-Algorithm'] = undefined;

/**
 * @member {String} X-Amz-Credential
 */
DocumentUploadMetadata.prototype['X-Amz-Credential'] = undefined;

/**
 * @member {String} X-Amz-Date
 */
DocumentUploadMetadata.prototype['X-Amz-Date'] = undefined;

/**
 * @member {String} X-Amz-Security-Token
 */
DocumentUploadMetadata.prototype['X-Amz-Security-Token'] = undefined;

/**
 * @member {String} Policy
 */
DocumentUploadMetadata.prototype['Policy'] = undefined;

/**
 * @member {String} X-Amz-Signature
 */
DocumentUploadMetadata.prototype['X-Amz-Signature'] = undefined;






export default DocumentUploadMetadata;
