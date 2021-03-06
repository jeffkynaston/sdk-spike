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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PlastiqPublicApi);
  }
}(this, function(expect, PlastiqPublicApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PlastiqPublicApi.BankAccountResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BankAccountResponse', function() {
    it('should create an instance of BankAccountResponse', function() {
      // uncomment below and update the code to test BankAccountResponse
      //var instane = new PlastiqPublicApi.BankAccountResponse();
      //expect(instance).to.be.a(PlastiqPublicApi.BankAccountResponse);
    });

    it('should have the property accountType (base name: "accountType")', function() {
      // uncomment below and update the code to test the property accountType
      //var instance = new PlastiqPublicApi.BankAccountResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountHolderName (base name: "accountHolderName")', function() {
      // uncomment below and update the code to test the property accountHolderName
      //var instance = new PlastiqPublicApi.BankAccountResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new PlastiqPublicApi.BankAccountResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountLastFour (base name: "accountLastFour")', function() {
      // uncomment below and update the code to test the property accountLastFour
      //var instance = new PlastiqPublicApi.BankAccountResponse();
      //expect(instance).to.be();
    });

    it('should have the property routingNumber (base name: "routingNumber")', function() {
      // uncomment below and update the code to test the property routingNumber
      //var instance = new PlastiqPublicApi.BankAccountResponse();
      //expect(instance).to.be();
    });

    it('should have the property billingAddress (base name: "billingAddress")', function() {
      // uncomment below and update the code to test the property billingAddress
      //var instance = new PlastiqPublicApi.BankAccountResponse();
      //expect(instance).to.be();
    });

  });

}));
