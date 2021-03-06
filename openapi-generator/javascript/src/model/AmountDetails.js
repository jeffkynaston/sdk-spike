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
 * The AmountDetails model module.
 * @module model/AmountDetails
 * @version 1.0.0
 */
class AmountDetails {
    /**
     * Constructs a new <code>AmountDetails</code>.
     * Amount that will be credited to Recipient
     * @alias module:model/AmountDetails
     * @param value {Number} Value of the currency between 1 and 99999999.99
     * @param currency {module:model/AmountDetails.CurrencyEnum} Currency value
     */
    constructor(value, currency) { 
        
        AmountDetails.initialize(this, value, currency);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value, currency) { 
        obj['value'] = value;
        obj['currency'] = currency;
    }

    /**
     * Constructs a <code>AmountDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AmountDetails} obj Optional instance to populate.
     * @return {module:model/AmountDetails} The populated <code>AmountDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AmountDetails();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Value of the currency between 1 and 99999999.99
 * @member {Number} value
 */
AmountDetails.prototype['value'] = undefined;

/**
 * Currency value
 * @member {module:model/AmountDetails.CurrencyEnum} currency
 */
AmountDetails.prototype['currency'] = undefined;





/**
 * Allowed values for the <code>currency</code> property.
 * @enum {String}
 * @readonly
 */
AmountDetails['CurrencyEnum'] = {

    /**
     * value: "USD"
     * @const
     */
    "USD": "USD"
};



export default AmountDetails;

