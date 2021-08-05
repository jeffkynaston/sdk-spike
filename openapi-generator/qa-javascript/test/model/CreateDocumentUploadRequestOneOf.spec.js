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
    instance = new PlastiqPublicApi.CreateDocumentUploadRequestOneOf();
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

  describe('CreateDocumentUploadRequestOneOf', function() {
    it('should create an instance of CreateDocumentUploadRequestOneOf', function() {
      // uncomment below and update the code to test CreateDocumentUploadRequestOneOf
      //var instane = new PlastiqPublicApi.CreateDocumentUploadRequestOneOf();
      //expect(instance).to.be.a(PlastiqPublicApi.CreateDocumentUploadRequestOneOf);
    });

    it('should have the property paymentIntent (base name: "paymentIntent")', function() {
      // uncomment below and update the code to test the property paymentIntent
      //var instance = new PlastiqPublicApi.CreateDocumentUploadRequestOneOf();
      //expect(instance).to.be();
    });

  });

}));
