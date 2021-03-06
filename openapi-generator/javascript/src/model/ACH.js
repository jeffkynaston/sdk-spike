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
 * The ACH model module.
 * @module model/ACH
 * @version 1.0.0
 */
class ACH {
    /**
     * Constructs a new <code>ACH</code>.
     * @alias module:model/ACH
     * @param type {module:model/ACH.TypeEnum} 
     * @param accountNumber {String} Bank ACH account number
     * @param routingNumber {String} 9 digit bank routing number
     * @param beneficiaryName {String} 
     */
    constructor(type, accountNumber, routingNumber, beneficiaryName) { 
        
        ACH.initialize(this, type, accountNumber, routingNumber, beneficiaryName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, accountNumber, routingNumber, beneficiaryName) { 
        obj['type'] = type;
        obj['accountNumber'] = accountNumber;
        obj['routingNumber'] = routingNumber;
        obj['beneficiaryName'] = beneficiaryName;
    }

    /**
     * Constructs a <code>ACH</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ACH} obj Optional instance to populate.
     * @return {module:model/ACH} The populated <code>ACH</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ACH();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('accountNumber')) {
                obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'String');
            }
            if (data.hasOwnProperty('routingNumber')) {
                obj['routingNumber'] = ApiClient.convertToType(data['routingNumber'], 'String');
            }
            if (data.hasOwnProperty('beneficiaryName')) {
                obj['beneficiaryName'] = ApiClient.convertToType(data['beneficiaryName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ACH.TypeEnum} type
 */
ACH.prototype['type'] = undefined;

/**
 * Bank ACH account number
 * @member {String} accountNumber
 */
ACH.prototype['accountNumber'] = undefined;

/**
 * 9 digit bank routing number
 * @member {String} routingNumber
 */
ACH.prototype['routingNumber'] = undefined;

/**
 * @member {String} beneficiaryName
 */
ACH.prototype['beneficiaryName'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ACH['TypeEnum'] = {

    /**
     * value: "ACH"
     * @const
     */
    "ACH": "ACH"
};



export default ACH;

