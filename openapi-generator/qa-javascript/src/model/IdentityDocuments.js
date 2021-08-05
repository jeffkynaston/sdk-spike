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
 * The IdentityDocuments model module.
 * @module model/IdentityDocuments
 * @version 1.0.0
 */
class IdentityDocuments {
    /**
     * Constructs a new <code>IdentityDocuments</code>.
     * This is currently only required if a Payment method from Texas is added.
     * @alias module:model/IdentityDocuments
     * @param type {module:model/IdentityDocuments.TypeEnum} 
     * @param value {String} 
     */
    constructor(type, value) { 
        
        IdentityDocuments.initialize(this, type, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, value) { 
        obj['type'] = type;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>IdentityDocuments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdentityDocuments} obj Optional instance to populate.
     * @return {module:model/IdentityDocuments} The populated <code>IdentityDocuments</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdentityDocuments();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('countryOfIssuance')) {
                obj['countryOfIssuance'] = ApiClient.convertToType(data['countryOfIssuance'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/IdentityDocuments.TypeEnum} type
 */
IdentityDocuments.prototype['type'] = undefined;

/**
 * @member {String} value
 */
IdentityDocuments.prototype['value'] = undefined;

/**
 * Passport country of issuance. Two-letter country code (ISO 3166-1 alpha-2).
 * @member {String} countryOfIssuance
 */
IdentityDocuments.prototype['countryOfIssuance'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
IdentityDocuments['TypeEnum'] = {

    /**
     * value: "US_TIN"
     * @const
     */
    "US_TIN": "US_TIN",

    /**
     * value: "US_EIN"
     * @const
     */
    "US_EIN": "US_EIN",

    /**
     * value: "US_SSN"
     * @const
     */
    "US_SSN": "US_SSN",

    /**
     * value: "PASSPORT_NUMBER"
     * @const
     */
    "PASSPORT_NUMBER": "PASSPORT_NUMBER",

    /**
     * value: "ALIEN_REGISTRATION_NUMBER"
     * @const
     */
    "ALIEN_REGISTRATION_NUMBER": "ALIEN_REGISTRATION_NUMBER"
};



export default IdentityDocuments;
