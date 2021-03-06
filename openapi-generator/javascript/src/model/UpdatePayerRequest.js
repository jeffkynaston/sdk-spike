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
import Address from './Address';
import Contact from './Contact';
import IdentityDocuments from './IdentityDocuments';

/**
 * The UpdatePayerRequest model module.
 * @module model/UpdatePayerRequest
 * @version 1.0.0
 */
class UpdatePayerRequest {
    /**
     * Constructs a new <code>UpdatePayerRequest</code>.
     * @alias module:model/UpdatePayerRequest
     */
    constructor() { 
        
        UpdatePayerRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePayerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePayerRequest} obj Optional instance to populate.
     * @return {module:model/UpdatePayerRequest} The populated <code>UpdatePayerRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePayerRequest();

            if (data.hasOwnProperty('businessName')) {
                obj['businessName'] = ApiClient.convertToType(data['businessName'], 'String');
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = Contact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('businessAddress')) {
                obj['businessAddress'] = ApiClient.convertToType(data['businessAddress'], Address);
            }
            if (data.hasOwnProperty('identityDocuments')) {
                obj['identityDocuments'] = ApiClient.convertToType(data['identityDocuments'], [IdentityDocuments]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} businessName
 */
UpdatePayerRequest.prototype['businessName'] = undefined;

/**
 * @member {module:model/Contact} contact
 */
UpdatePayerRequest.prototype['contact'] = undefined;

/**
 * @member {module:model/Address} businessAddress
 */
UpdatePayerRequest.prototype['businessAddress'] = undefined;

/**
 * @member {Array.<module:model/IdentityDocuments>} identityDocuments
 */
UpdatePayerRequest.prototype['identityDocuments'] = undefined;






export default UpdatePayerRequest;

