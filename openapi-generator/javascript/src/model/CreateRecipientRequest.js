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
import OneOfACHCheckEFTWire from './OneOfACHCheckEFTWire';
import PayerId from './PayerId';
import RecipientAddress from './RecipientAddress';

/**
 * The CreateRecipientRequest model module.
 * @module model/CreateRecipientRequest
 * @version 1.0.0
 */
class CreateRecipientRequest {
    /**
     * Constructs a new <code>CreateRecipientRequest</code>.
     * @alias module:model/CreateRecipientRequest
     * @param businessName {String} 
     * @param categoryId {String} 
     * @param businessAddress {module:model/RecipientAddress} 
     * @param contact {module:model/CreateRecipientRequestContact} 
     * @param receivingMethod {module:model/OneOfACHCheckEFTWire} 
     */
    constructor(businessName, categoryId, businessAddress, contact, receivingMethod) { 
        
        CreateRecipientRequest.initialize(this, businessName, categoryId, businessAddress, contact, receivingMethod);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, businessName, categoryId, businessAddress, contact, receivingMethod) { 
        obj['businessName'] = businessName;
        obj['categoryId'] = categoryId;
        obj['businessAddress'] = businessAddress;
        obj['contact'] = contact;
        obj['receivingMethod'] = receivingMethod;
    }

    /**
     * Constructs a <code>CreateRecipientRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRecipientRequest} obj Optional instance to populate.
     * @return {module:model/CreateRecipientRequest} The populated <code>CreateRecipientRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRecipientRequest();

            if (data.hasOwnProperty('businessName')) {
                obj['businessName'] = ApiClient.convertToType(data['businessName'], 'String');
            }
            if (data.hasOwnProperty('categoryId')) {
                obj['categoryId'] = ApiClient.convertToType(data['categoryId'], 'String');
            }
            if (data.hasOwnProperty('businessAddress')) {
                obj['businessAddress'] = ApiClient.convertToType(data['businessAddress'], RecipientAddress);
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = CreateRecipientRequestContact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('receivingMethod')) {
                obj['receivingMethod'] = ApiClient.convertToType(data['receivingMethod'], OneOfACHCheckEFTWire);
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
CreateRecipientRequest.prototype['businessName'] = undefined;

/**
 * @member {String} categoryId
 */
CreateRecipientRequest.prototype['categoryId'] = undefined;

/**
 * @member {module:model/RecipientAddress} businessAddress
 */
CreateRecipientRequest.prototype['businessAddress'] = undefined;

/**
 * @member {module:model/CreateRecipientRequestContact} contact
 */
CreateRecipientRequest.prototype['contact'] = undefined;

/**
 * @member {module:model/OneOfACHCheckEFTWire} receivingMethod
 */
CreateRecipientRequest.prototype['receivingMethod'] = undefined;

/**
 * @member {module:model/PayerId} payer
 */
CreateRecipientRequest.prototype['payer'] = undefined;






export default CreateRecipientRequest;

