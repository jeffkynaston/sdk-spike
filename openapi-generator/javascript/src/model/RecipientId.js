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
 * The RecipientId model module.
 * @module model/RecipientId
 * @version 1.0.0
 */
class RecipientId {
    /**
     * Constructs a new <code>RecipientId</code>.
     * @alias module:model/RecipientId
     * @param id {String} 
     */
    constructor(id) { 
        
        RecipientId.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>RecipientId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecipientId} obj Optional instance to populate.
     * @return {module:model/RecipientId} The populated <code>RecipientId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecipientId();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
RecipientId.prototype['id'] = undefined;






export default RecipientId;

