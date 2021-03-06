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
import Address from './Address';

/**
 * The CardResponse model module.
 * @module model/CardResponse
 * @version 1.0.0
 */
class CardResponse {
    /**
     * Constructs a new <code>CardResponse</code>.
     * @alias module:model/CardResponse
     */
    constructor() { 
        
        CardResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CardResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CardResponse} obj Optional instance to populate.
     * @return {module:model/CardResponse} The populated <code>CardResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CardResponse();

            if (data.hasOwnProperty('last4')) {
                obj['last4'] = ApiClient.convertToType(data['last4'], 'String');
            }
            if (data.hasOwnProperty('brand')) {
                obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
            }
            if (data.hasOwnProperty('expirationMonth')) {
                obj['expirationMonth'] = ApiClient.convertToType(data['expirationMonth'], 'String');
            }
            if (data.hasOwnProperty('expirationYear')) {
                obj['expirationYear'] = ApiClient.convertToType(data['expirationYear'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('billingAddress')) {
                obj['billingAddress'] = ApiClient.convertToType(data['billingAddress'], Address);
            }
            if (data.hasOwnProperty('subType')) {
                obj['subType'] = ApiClient.convertToType(data['subType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Last 4 digits of card number
 * @member {String} last4
 */
CardResponse.prototype['last4'] = undefined;

/**
 * @member {String} brand
 */
CardResponse.prototype['brand'] = undefined;

/**
 * @member {String} expirationMonth
 */
CardResponse.prototype['expirationMonth'] = undefined;

/**
 * @member {String} expirationYear
 */
CardResponse.prototype['expirationYear'] = undefined;

/**
 * @member {String} createdAt
 */
CardResponse.prototype['createdAt'] = undefined;

/**
 * @member {module:model/Address} billingAddress
 */
CardResponse.prototype['billingAddress'] = undefined;

/**
 * @member {module:model/CardResponse.SubTypeEnum} subType
 */
CardResponse.prototype['subType'] = undefined;





/**
 * Allowed values for the <code>subType</code> property.
 * @enum {String}
 * @readonly
 */
CardResponse['SubTypeEnum'] = {

    /**
     * value: "CREDIT"
     * @const
     */
    "CREDIT": "CREDIT",

    /**
     * value: "DEBIT"
     * @const
     */
    "DEBIT": "DEBIT"
};



export default CardResponse;

