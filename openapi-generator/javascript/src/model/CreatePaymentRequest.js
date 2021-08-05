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
import CreatePaymentIntentRequestPayload from './CreatePaymentIntentRequestPayload';
import CreatePaymentRequestFromId from './CreatePaymentRequestFromId';
import OneOfamountDetails from './OneOfamountDetails';
import OneOfpayerId from './OneOfpayerId';
import OneOfpaymentIntentIdCreatePaymentIntentRequestPayload from './OneOfpaymentIntentIdCreatePaymentIntentRequestPayload';
import OneOfpaymentMethodId from './OneOfpaymentMethodId';
import OneOfrecipientIdCreateRecipientRequest from './OneOfrecipientIdCreateRecipientRequest';
import PaymentDetails from './PaymentDetails';

/**
 * The CreatePaymentRequest model module.
 * @module model/CreatePaymentRequest
 * @version 1.0.0
 */
class CreatePaymentRequest {
    /**
     * Constructs a new <code>CreatePaymentRequest</code>.
     * @alias module:model/CreatePaymentRequest
     * @implements module:model/CreatePaymentRequestFromId
     * @implements module:model/CreatePaymentIntentRequestPayload
     * @param payer {module:model/OneOfpayerId} 
     * @param paymentMethod {module:model/OneOfpaymentMethodId} 
     * @param recipient {module:model/OneOfrecipientIdCreateRecipientRequest} 
     */
    constructor(payer, paymentMethod, recipient) { 
        CreatePaymentRequestFromId.initialize(this);CreatePaymentIntentRequestPayload.initialize(this, paymentMethod, recipient, payer);
        CreatePaymentRequest.initialize(this, payer, paymentMethod, recipient);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, payer, paymentMethod, recipient) { 
        obj['payer'] = payer;
        obj['paymentMethod'] = paymentMethod;
        obj['recipient'] = recipient;
    }

    /**
     * Constructs a <code>CreatePaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePaymentRequest} obj Optional instance to populate.
     * @return {module:model/CreatePaymentRequest} The populated <code>CreatePaymentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePaymentRequest();
            CreatePaymentRequestFromId.constructFromObject(data, obj);
            CreatePaymentIntentRequestPayload.constructFromObject(data, obj);

            if (data.hasOwnProperty('paymentIntent')) {
                obj['paymentIntent'] = ApiClient.convertToType(data['paymentIntent'], OneOfpaymentIntentIdCreatePaymentIntentRequestPayload);
            }
            if (data.hasOwnProperty('payer')) {
                obj['payer'] = ApiClient.convertToType(data['payer'], OneOfpayerId);
            }
            if (data.hasOwnProperty('targetAmount')) {
                obj['targetAmount'] = ApiClient.convertToType(data['targetAmount'], OneOfamountDetails);
            }
            if (data.hasOwnProperty('paymentMethod')) {
                obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], OneOfpaymentMethodId);
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], OneOfrecipientIdCreateRecipientRequest);
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
 * @member {module:model/OneOfpaymentIntentIdCreatePaymentIntentRequestPayload} paymentIntent
 */
CreatePaymentRequest.prototype['paymentIntent'] = undefined;

/**
 * @member {module:model/OneOfpayerId} payer
 */
CreatePaymentRequest.prototype['payer'] = undefined;

/**
 * @member {module:model/OneOfamountDetails} targetAmount
 */
CreatePaymentRequest.prototype['targetAmount'] = undefined;

/**
 * @member {module:model/OneOfpaymentMethodId} paymentMethod
 */
CreatePaymentRequest.prototype['paymentMethod'] = undefined;

/**
 * @member {module:model/OneOfrecipientIdCreateRecipientRequest} recipient
 */
CreatePaymentRequest.prototype['recipient'] = undefined;

/**
 * @member {module:model/PaymentDetails} details
 */
CreatePaymentRequest.prototype['details'] = undefined;

/**
 * additional payment information to support operational requirements
 * @member {Object} metadata
 */
CreatePaymentRequest.prototype['metadata'] = undefined;


// Implement CreatePaymentRequestFromId interface:
/**
 * @member {module:model/OneOfpaymentIntentIdCreatePaymentIntentRequestPayload} paymentIntent
 */
CreatePaymentRequestFromId.prototype['paymentIntent'] = undefined;
/**
 * @member {module:model/PayerId} payer
 */
CreatePaymentRequestFromId.prototype['payer'] = undefined;
// Implement CreatePaymentIntentRequestPayload interface:
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




export default CreatePaymentRequest;
