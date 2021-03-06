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
 * The EFT model module.
 * @module model/EFT
 * @version 1.0.0
 */
class EFT {
    /**
     * Constructs a new <code>EFT</code>.
     * @alias module:model/EFT
     * @param type {module:model/EFT.TypeEnum} 
     * @param accountNumber {String} Bank EFT account number
     * @param routingNumber {String} 8 digit routing number
     * @param beneficiaryName {String} 
     */
    constructor(type, accountNumber, routingNumber, beneficiaryName) { 
        
        EFT.initialize(this, type, accountNumber, routingNumber, beneficiaryName);
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
     * Constructs a <code>EFT</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EFT} obj Optional instance to populate.
     * @return {module:model/EFT} The populated <code>EFT</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EFT();

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
 * @member {module:model/EFT.TypeEnum} type
 */
EFT.prototype['type'] = undefined;

/**
 * Bank EFT account number
 * @member {String} accountNumber
 */
EFT.prototype['accountNumber'] = undefined;

/**
 * 8 digit routing number
 * @member {String} routingNumber
 */
EFT.prototype['routingNumber'] = undefined;

/**
 * @member {String} beneficiaryName
 */
EFT.prototype['beneficiaryName'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
EFT['TypeEnum'] = {

    /**
     * value: "EFT"
     * @const
     */
    "EFT": "EFT"
};



export default EFT;

