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
import OneOfpaymentIntentIdCreatePaymentIntentRequestPayload from './OneOfpaymentIntentIdCreatePaymentIntentRequestPayload';
import PayerId from './PayerId';

/**
 * The CreatePaymentRequestFromId model module.
 * @module model/CreatePaymentRequestFromId
 * @version 1.0.0
 */
class CreatePaymentRequestFromId {
    /**
     * Constructs a new <code>CreatePaymentRequestFromId</code>.
     * @alias module:model/CreatePaymentRequestFromId
     */
    constructor() { 
        
        CreatePaymentRequestFromId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreatePaymentRequestFromId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePaymentRequestFromId} obj Optional instance to populate.
     * @return {module:model/CreatePaymentRequestFromId} The populated <code>CreatePaymentRequestFromId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePaymentRequestFromId();

            if (data.hasOwnProperty('paymentIntent')) {
                obj['paymentIntent'] = ApiClient.convertToType(data['paymentIntent'], OneOfpaymentIntentIdCreatePaymentIntentRequestPayload);
            }
            if (data.hasOwnProperty('payer')) {
                obj['payer'] = PayerId.constructFromObject(data['payer']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OneOfpaymentIntentIdCreatePaymentIntentRequestPayload} paymentIntent
 */
CreatePaymentRequestFromId.prototype['paymentIntent'] = undefined;

/**
 * @member {module:model/PayerId} payer
 */
CreatePaymentRequestFromId.prototype['payer'] = undefined;






export default CreatePaymentRequestFromId;

