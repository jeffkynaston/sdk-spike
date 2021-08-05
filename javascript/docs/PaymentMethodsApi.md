# PlastiqPublicApi.PaymentMethodsApi

All URIs are relative to *https://connect.sandbox.plastiq.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentMethodsGet**](PaymentMethodsApi.md#paymentMethodsGet) | **GET** /payment-methods | Retrieve a paginated list of Payment Methods by query parameter(s)
[**paymentMethodsIdDelete**](PaymentMethodsApi.md#paymentMethodsIdDelete) | **DELETE** /payment-methods/{id} | Delete a Payment Method
[**paymentMethodsIdGet**](PaymentMethodsApi.md#paymentMethodsIdGet) | **GET** /payment-methods/{id} | Retrieve a Payment Method
[**paymentMethodsIdPatch**](PaymentMethodsApi.md#paymentMethodsIdPatch) | **PATCH** /payment-methods/{id} | Update a Payment Method
[**paymentMethodsPost**](PaymentMethodsApi.md#paymentMethodsPost) | **POST** /payment-methods | Create a Payment Method



## paymentMethodsGet

> InlineResponse2003 paymentMethodsGet(payerId, opts)

Retrieve a paginated list of Payment Methods by query parameter(s)

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.PaymentMethodsApi();
let payerId = null; // String | The associated Payer ID to list Payment Methods for
let opts = {
  'offset': 56, // Number | The number of records you wish to skip before selecting records
  'limit': 56 // Number | Number of items to return
};
apiInstance.paymentMethodsGet(payerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payerId** | [**String**](.md)| The associated Payer ID to list Payment Methods for | 
 **offset** | **Number**| The number of records you wish to skip before selecting records | [optional] 
 **limit** | **Number**| Number of items to return | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentMethodsIdDelete

> paymentMethodsIdDelete(id)

Delete a Payment Method

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.PaymentMethodsApi();
let id = null; // String | The ID of the Payment Method
apiInstance.paymentMethodsIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| The ID of the Payment Method | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentMethodsIdGet

> PaymentMethod paymentMethodsIdGet(payerId, id)

Retrieve a Payment Method

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.PaymentMethodsApi();
let payerId = null; // String | The Payer ID associated to the Payment Method
let id = null; // String | The ID of the Payment Method
apiInstance.paymentMethodsIdGet(payerId, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payerId** | [**String**](.md)| The Payer ID associated to the Payment Method | 
 **id** | [**String**](.md)| The ID of the Payment Method | 

### Return type

[**PaymentMethod**](PaymentMethod.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentMethodsIdPatch

> PaymentMethod paymentMethodsIdPatch(id, patchPaymentMethodRequest, opts)

Update a Payment Method

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.PaymentMethodsApi();
let id = null; // String | The ID of the Payment Method
let patchPaymentMethodRequest = new PlastiqPublicApi.PatchPaymentMethodRequest(); // PatchPaymentMethodRequest | Payment Method to update
let opts = {
  'traceId': "traceId_example", // String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
  'userAgent': "userAgent_example", // String | A string representing the User Agent. Required only when the request is not coming from the end user's browser.
  'endUserDeviceId': "endUserDeviceId_example", // String | A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
  'endUserIp': "endUserIp_example" // String | The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
};
apiInstance.paymentMethodsIdPatch(id, patchPaymentMethodRequest, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| The ID of the Payment Method | 
 **patchPaymentMethodRequest** | [**PatchPaymentMethodRequest**](PatchPaymentMethodRequest.md)| Payment Method to update | 
 **traceId** | **String**| A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] 
 **userAgent** | **String**| A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser. | [optional] 
 **endUserDeviceId** | **String**| A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] 
 **endUserIp** | **String**| The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] 

### Return type

[**PaymentMethod**](PaymentMethod.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentMethodsPost

> PaymentMethod paymentMethodsPost(createPaymentMethodRequest, opts)

Create a Payment Method

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.PaymentMethodsApi();
let createPaymentMethodRequest = new PlastiqPublicApi.CreatePaymentMethodRequest(); // CreatePaymentMethodRequest | Payment Method to create
let opts = {
  'traceId': "traceId_example", // String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
  'userAgent': "userAgent_example", // String | A string representing the User Agent. Required only when the request is not coming from the end user's browser.
  'endUserDeviceId': "endUserDeviceId_example", // String | A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
  'endUserIp': "endUserIp_example" // String | The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
};
apiInstance.paymentMethodsPost(createPaymentMethodRequest, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPaymentMethodRequest** | [**CreatePaymentMethodRequest**](CreatePaymentMethodRequest.md)| Payment Method to create | 
 **traceId** | **String**| A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] 
 **userAgent** | **String**| A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser. | [optional] 
 **endUserDeviceId** | **String**| A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] 
 **endUserIp** | **String**| The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] 

### Return type

[**PaymentMethod**](PaymentMethod.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

