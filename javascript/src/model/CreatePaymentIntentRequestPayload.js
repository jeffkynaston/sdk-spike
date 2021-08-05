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
import OneOfamountDetails from './OneOfamountDetails';
import OneOfpayerId from './OneOfpayerId';
import OneOfpaymentMethodId from './OneOfpaymentMethodId';
import OneOfrecipientIdCreateRecipientRequest from './OneOfrecipientIdCreateRecipientRequest';
import PaymentDetails from './PaymentDetails';

/**
 * The CreatePaymentIntentRequestPayload model module.
 * @module model/CreatePaymentIntentRequestPayload
 * @version 1.0.0
 */
class CreatePaymentIntentRequestPayload {
    /**
     * Constructs a new <code>CreatePaymentIntentRequestPayload</code>.
     * @alias module:model/CreatePaymentIntentRequestPayload
     * @param paymentMethod {module:model/OneOfpaymentMethodId} 
     * @param recipient {module:model/OneOfrecipientIdCreateRecipientRequest} 
     * @param payer {module:model/OneOfpayerId} 
     */
    constructor(paymentMethod, recipient, payer) { 
        
        CreatePaymentIntentRequestPayload.initialize(this, paymentMethod, recipient, payer);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, paymentMethod, recipient, payer) { 
        obj['paymentMethod'] = paymentMethod;
        obj['recipient'] = recipient;
        obj['payer'] = payer;
    }

    /**
     * Constructs a <code>CreatePaymentIntentRequestPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePaymentIntentRequestPayload} obj Optional instance to populate.
     * @return {module:model/CreatePaymentIntentRequestPayload} The populated <code>CreatePaymentIntentRequestPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePaymentIntentRequestPayload();

            if (data.hasOwnProperty('targetAmount')) {
                obj['targetAmount'] = ApiClient.convertToType(data['targetAmount'], OneOfamountDetails);
            }
            if (data.hasOwnProperty('paymentMethod')) {
                obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], OneOfpaymentMethodId);
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], OneOfrecipientIdCreateRecipientRequest);
            }
            if (data.hasOwnProperty('payer')) {
                obj['payer'] = ApiClient.convertToType(data['payer'], OneOfpayerId);
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = PaymentDetails.constructFromObject(data['details']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OneOfamountDetails} targetAmount
 */
CreatePaymentIntentRequestPayload.prototype['targetAmount'] = undefined;

/**
 * @member {module:model/OneOfpaymentMethodId} paymentMethod
 */
CreatePaymentIntentRequestPayload.prototype['paymentMethod'] = undefined;

/**
 * @member {module:model/OneOfrecipientIdCreateRecipientRequest} recipient
 */
CreatePaymentIntentRequestPayload.prototype['recipient'] = undefined;

/**
 * @member {module:model/OneOfpayerId} payer
 */
CreatePaymentIntentRequestPayload.prototype['payer'] = undefined;

/**
 * @member {module:model/PaymentDetails} details
 */
CreatePaymentIntentRequestPayload.prototype['details'] = undefined;

/**
 * additional payment information to support operational requirements
 * @member {Object} metadata
 */
CreatePaymentIntentRequestPayload.prototype['metadata'] = undefined;






export default CreatePaymentIntentRequestPayload;

