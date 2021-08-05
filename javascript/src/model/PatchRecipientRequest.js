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
import CreateRecipientRequestContact from './CreateRecipientRequestContact';
import PayerId from './PayerId';
import RecipientAddress from './RecipientAddress';

/**
 * The PatchRecipientRequest model module.
 * @module model/PatchRecipientRequest
 * @version 1.0.0
 */
class PatchRecipientRequest {
    /**
     * Constructs a new <code>PatchRecipientRequest</code>.
     * @alias module:model/PatchRecipientRequest
     */
    constructor() { 
        
        PatchRecipientRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchRecipientRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchRecipientRequest} obj Optional instance to populate.
     * @return {module:model/PatchRecipientRequest} The populated <code>PatchRecipientRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchRecipientRequest();

            if (data.hasOwnProperty('businessName')) {
                obj['businessName'] = ApiClient.convertToType(data['businessName'], 'String');
            }
            if (data.hasOwnProperty('businessAddress')) {
                obj['businessAddress'] = ApiClient.convertToType(data['businessAddress'], RecipientAddress);
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = CreateRecipientRequestContact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('payer')) {
                obj['payer'] = PayerId.constructFromObject(data['payer']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} businessName
 */
PatchRecipientRequest.prototype['businessName'] = undefined;

/**
 * @member {module:model/RecipientAddress} businessAddress
 */
PatchRecipientRequest.prototype['businessAddress'] = undefined;

/**
 * @member {module:model/CreateRecipientRequestContact} contact
 */
PatchRecipientRequest.prototype['contact'] = undefined;

/**
 * @member {module:model/PayerId} payer
 */
PatchRecipientRequest.prototype['payer'] = undefined;






export default PatchRecipientRequest;

