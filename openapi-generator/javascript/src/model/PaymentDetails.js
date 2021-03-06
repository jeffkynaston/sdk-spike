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
 * The PaymentDetails model module.
 * @module model/PaymentDetails
 * @version 1.0.0
 */
class PaymentDetails {
    /**
     * Constructs a new <code>PaymentDetails</code>.
     * @alias module:model/PaymentDetails
     */
    constructor() { 
        
        PaymentDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentDetails} obj Optional instance to populate.
     * @return {module:model/PaymentDetails} The populated <code>PaymentDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentDetails();

            if (data.hasOwnProperty('accountName')) {
                obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
            }
            if (data.hasOwnProperty('accountNumber')) {
                obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'String');
            }
            if (data.hasOwnProperty('memo')) {
                obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
            }
        }
        return obj;
    }


}

/**
 * TBD
 * @member {String} accountName
 */
PaymentDetails.prototype['accountName'] = undefined;

/**
 * TBD
 * @member {String} accountNumber
 */
PaymentDetails.prototype['accountNumber'] = undefined;

/**
 * TBD
 * @member {String} memo
 */
PaymentDetails.prototype['memo'] = undefined;






export default PaymentDetails;

