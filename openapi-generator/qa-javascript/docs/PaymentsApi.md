# PlastiqPublicApi.PaymentsApi

All URIs are relative to *https://connect.sandbox.plastiq.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentIntentsIdGet**](PaymentsApi.md#paymentIntentsIdGet) | **GET** /payment-intents/{id} | Retrieve a single Payment Intent
[**paymentIntentsIdPatch**](PaymentsApi.md#paymentIntentsIdPatch) | **PATCH** /payment-intents/{id} | Update a Payment Intent
[**paymentIntentsPost**](PaymentsApi.md#paymentIntentsPost) | **POST** /payment-intents | Create a Payment Intent
[**paymentsGet**](PaymentsApi.md#paymentsGet) | **GET** /payments | Retrieve a paginated list of payments by query parameter(s)
[**paymentsIdGet**](PaymentsApi.md#paymentsIdGet) | **GET** /payments/{id} | Retrieve a single Payment
[**paymentsIdRefundsPost**](PaymentsApi.md#paymentsIdRefundsPost) | **POST** /payments/{id}/refunds | Refund or cancel an existing Payment
[**paymentsPost**](PaymentsApi.md#paymentsPost) | **POST** /payments | Create a Payment from a Payment Intent



## paymentIntentsIdGet

> PaymentIntent paymentIntentsIdGet(payerId, id)

Retrieve a single Payment Intent

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.PaymentsApi();
let payerId = null; // String | The Payer ID of the Payment Intent
let id = null; // String | The ID of the Payment Intent
apiInstance.paymentIntentsIdGet(payerId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payerId** | [**String**](.md)| The Payer ID of the Payment Intent | 
 **id** | [**String**](.md)| The ID of the Payment Intent | 

### Return type

[**PaymentIntent**](PaymentIntent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentIntentsIdPatch

> PaymentIntent paymentIntentsIdPatch(id, patchPaymentIntentRequestPayload)

Update a Payment Intent

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.PaymentsApi();
let id = null; // String | The ID of the Payment Intent
let patchPaymentIntentRequestPayload = new PlastiqPublicApi.PatchPaymentIntentRequestPayload(); // PatchPaymentIntentRequestPayload | Payment Intent to update
apiInstance.paymentIntentsIdPatch(id, patchPaymentIntentRequestPayload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| The ID of the Payment Intent | 
 **patchPaymentIntentRequestPayload** | [**PatchPaymentIntentRequestPayload**](PatchPaymentIntentRequestPayload.md)| Payment Intent to update | 

### Return type

[**PaymentIntent**](PaymentIntent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentIntentsPost

> PaymentIntent paymentIntentsPost(createPaymentIntentRequestPayload, opts)

Create a Payment Intent

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.PaymentsApi();
let createPaymentIntentRequestPayload = new PlastiqPublicApi.CreatePaymentIntentRequestPayload(); // CreatePaymentIntentRequestPayload | Create a Payment Intent object staging it for execution
let opts = {
  'traceId': "traceId_example", // String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
  'userAgent': "userAgent_example", // String | A string representing the User Agent. Required only when the request is not coming from the end user's browser.
  'endUserDeviceId': "endUserDeviceId_example", // String | A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
  'endUserIp': "endUserIp_example" // String | The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
};
apiInstance.paymentIntentsPost(createPaymentIntentRequestPayload, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPaymentIntentRequestPayload** | [**CreatePaymentIntentRequestPayload**](CreatePaymentIntentRequestPayload.md)| Create a Payment Intent object staging it for execution | 
 **traceId** | **String**| A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] 
 **userAgent** | **String**| A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser. | [optional] 
 **endUserDeviceId** | **String**| A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] 
 **endUserIp** | **String**| The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] 

### Return type

[**PaymentIntent**](PaymentIntent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentsGet

> InlineResponse2002 paymentsGet(payerId, opts)

Retrieve a paginated list of payments by query parameter(s)

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.PaymentsApi();
let payerId = null; // String | The associated Payer ID to list payments for
let opts = {
  'offset': 56, // Number | The number of records you wish to skip before selecting records
  'limit': 56 // Number | Number of items to return
};
apiInstance.paymentsGet(payerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payerId** | [**String**](.md)| The associated Payer ID to list payments for | 
 **offset** | **Number**| The number of records you wish to skip before selecting records | [optional] 
 **limit** | **Number**| Number of items to return | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentsIdGet

> Payment paymentsIdGet(payerId, id)

Retrieve a single Payment

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.PaymentsApi();
let payerId = null; // String | The Payer ID associated with the Payment
let id = null; // String | The ID of the Payment
apiInstance.paymentsIdGet(payerId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payerId** | [**String**](.md)| The Payer ID associated with the Payment | 
 **id** | [**String**](.md)| The ID of the Payment | 

### Return type

[**Payment**](Payment.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentsIdRefundsPost

> PaymentRefund paymentsIdRefundsPost(id, paymentRefundRequest, opts)

Refund or cancel an existing Payment

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.PaymentsApi();
let id = null; // String | The ID of the Payment to refund
let paymentRefundRequest = new PlastiqPublicApi.PaymentRefundRequest(); // PaymentRefundRequest | Payment Refund body
let opts = {
  'traceId': "traceId_example" // String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
};
apiInstance.paymentsIdRefundsPost(id, paymentRefundRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| The ID of the Payment to refund | 
 **paymentRefundRequest** | [**PaymentRefundRequest**](PaymentRefundRequest.md)| Payment Refund body | 
 **traceId** | **String**| A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] 

### Return type

[**PaymentRefund**](PaymentRefund.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentsPost

> Payment paymentsPost(createPaymentRequest, opts)

Create a Payment from a Payment Intent

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.PaymentsApi();
let createPaymentRequest = new PlastiqPublicApi.CreatePaymentRequest(); // CreatePaymentRequest | Payment to create
let opts = {
  'traceId': "traceId_example", // String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
  'userAgent': "userAgent_example", // String | A string representing the User Agent. Required only when the request is not coming from the end user's browser.
  'endUserDeviceId': "endUserDeviceId_example", // String | A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
  'endUserIp': "endUserIp_example", // String | The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
  'idempotencyKey': "idempotencyKey_example" // String | A valid UUID (V4) for handling duplicate requests. Will return original status code, response body, and set a 'Idempotent-Replay' header on response for a given key if a match exists.
};
apiInstance.paymentsPost(createPaymentRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPaymentRequest** | [**CreatePaymentRequest**](CreatePaymentRequest.md)| Payment to create | 
 **traceId** | **String**| A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] 
 **userAgent** | **String**| A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser. | [optional] 
 **endUserDeviceId** | **String**| A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] 
 **endUserIp** | **String**| The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] 
 **idempotencyKey** | **String**| A valid UUID (V4) for handling duplicate requests. Will return original status code, response body, and set a &#39;Idempotent-Replay&#39; header on response for a given key if a match exists. | [optional] 

### Return type

[**Payment**](Payment.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

