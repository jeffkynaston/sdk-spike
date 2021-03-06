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
import OneOfCardBankAccount from './OneOfCardBankAccount';
import OneOfpayerId from './OneOfpayerId';

/**
 * The CreatePaymentMethodRequest model module.
 * @module model/CreatePaymentMethodRequest
 * @version 1.0.0
 */
class CreatePaymentMethodRequest {
    /**
     * Constructs a new <code>CreatePaymentMethodRequest</code>.
     * @alias module:model/CreatePaymentMethodRequest
     * @param type {module:model/CreatePaymentMethodRequest.TypeEnum} 
     */
    constructor(type) { 
        
        CreatePaymentMethodRequest.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>CreatePaymentMethodRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePaymentMethodRequest} obj Optional instance to populate.
     * @return {module:model/CreatePaymentMethodRequest} The populated <code>CreatePaymentMethodRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePaymentMethodRequest();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], OneOfCardBankAccount);
            }
            if (data.hasOwnProperty('payer')) {
                obj['payer'] = ApiClient.convertToType(data['payer'], OneOfpayerId);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CreatePaymentMethodRequest.TypeEnum} type
 */
CreatePaymentMethodRequest.prototype['type'] = undefined;

/**
 * @member {module:model/OneOfCardBankAccount} data
 */
CreatePaymentMethodRequest.prototype['data'] = undefined;

/**
 * @member {module:model/OneOfpayerId} payer
 */
CreatePaymentMethodRequest.prototype['payer'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CreatePaymentMethodRequest['TypeEnum'] = {

    /**
     * value: "CARD"
     * @const
     */
    "CARD": "CARD",

    /**
     * value: "BANK_ACCOUNT"
     * @const
     */
    "BANK_ACCOUNT": "BANK_ACCOUNT"
};



export default CreatePaymentMethodRequest;

