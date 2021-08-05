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
 * The RecipientAddress model module.
 * @module model/RecipientAddress
 * @version 1.0.0
 */
class RecipientAddress {
    /**
     * Constructs a new <code>RecipientAddress</code>.
     * @alias module:model/RecipientAddress
     * @param line1 {String} Address line 1 (e.g., street, PO Box, or company name).
     * @param country {String} Two-letter country code (ISO 3166-1 alpha-2).
     */
    constructor(line1, country) { 
        
        RecipientAddress.initialize(this, line1, country);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, line1, country) { 
        obj['line1'] = line1;
        obj['country'] = country;
    }

    /**
     * Constructs a <code>RecipientAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecipientAddress} obj Optional instance to populate.
     * @return {module:model/RecipientAddress} The populated <code>RecipientAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecipientAddress();

            if (data.hasOwnProperty('line1')) {
                obj['line1'] = ApiClient.convertToType(data['line1'], 'String');
            }
            if (data.hasOwnProperty('line2')) {
                obj['line2'] = ApiClient.convertToType(data['line2'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('postalCode')) {
                obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Address line 1 (e.g., street, PO Box, or company name).
 * @member {String} line1
 */
RecipientAddress.prototype['line1'] = undefined;

/**
 * Address line 2 (e.g., apartment, suite, unit, or building).
 * @member {String} line2
 */
RecipientAddress.prototype['line2'] = undefined;

/**
 * City, district, suburb, town, or village.
 * @member {String} city
 */
RecipientAddress.prototype['city'] = undefined;

/**
 * State, county, province, or region.
 * @member {String} state
 */
RecipientAddress.prototype['state'] = undefined;

/**
 * ZIP or postal code.
 * @member {String} postalCode
 */
RecipientAddress.prototype['postalCode'] = undefined;

/**
 * Two-letter country code (ISO 3166-1 alpha-2).
 * @member {String} country
 */
RecipientAddress.prototype['country'] = undefined;






export default RecipientAddress;
