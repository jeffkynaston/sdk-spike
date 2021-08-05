    /* eslint-disable */
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
// eslint-disable-line
import ApiClient from '../ApiClient';
import PaymentIntentId from './PayerId';
import CreatePaymentIntentRequest from './CreatePayerRequest';


/**
 * The Check model module.
 * @module model/Check
 * @version 1.0.0
 */
class OneOfpaymentIntentIdCreatePaymentIntentRequestPayload {
    /**
     * Constructs a <code>Check</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Check} obj Optional instance to populate.
     * @return {module:model/Check} The populated <code>Check</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            if(data['id'] !== undefined)
                return PaymentIntentId.constructFromObject(data, obj);
            else
                return CreatePaymentIntentRequest.constructFromObject(data, obj);
        }
        return obj;
    }
}

export default OneOfpaymentIntentIdCreatePaymentIntentRequestPayload;
