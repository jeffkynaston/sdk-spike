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
    instance = new PlastiqPublicApi.PaymentMethodsApi();
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

  describe('PaymentMethodsApi', function() {
    describe('paymentMethodsGet', function() {
      it('should call paymentMethodsGet successfully', function(done) {
        //uncomment below and update the code to test paymentMethodsGet
        //instance.paymentMethodsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentMethodsIdDelete', function() {
      it('should call paymentMethodsIdDelete successfully', function(done) {
        //uncomment below and update the code to test paymentMethodsIdDelete
        //instance.paymentMethodsIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentMethodsIdGet', function() {
      it('should call paymentMethodsIdGet successfully', function(done) {
        //uncomment below and update the code to test paymentMethodsIdGet
        //instance.paymentMethodsIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentMethodsIdPatch', function() {
      it('should call paymentMethodsIdPatch successfully', function(done) {
        //uncomment below and update the code to test paymentMethodsIdPatch
        //instance.paymentMethodsIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentMethodsPost', function() {
      it('should call paymentMethodsPost successfully', function(done) {
        //uncomment below and update the code to test paymentMethodsPost
        //instance.paymentMethodsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));