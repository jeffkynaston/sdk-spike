# PlastiqPublicApi.PayersApi

All URIs are relative to *https://connect.sandbox.plastiq.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payersIdDelete**](PayersApi.md#payersIdDelete) | **DELETE** /payers/{id} | Delete a Payer
[**payersIdGet**](PayersApi.md#payersIdGet) | **GET** /payers/{id} | Retrieve a Payer
[**payersIdPatch**](PayersApi.md#payersIdPatch) | **PATCH** /payers/{id} | Update a Payer
[**payersPost**](PayersApi.md#payersPost) | **POST** /payers | Create a Payer



## payersIdDelete

> payersIdDelete(id)

Delete a Payer

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.PayersApi();
let id = null; // String | The ID of the Payer
apiInstance.payersIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| The ID of the Payer | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## payersIdGet

> Payer payersIdGet(id)

Retrieve a Payer

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.PayersApi();
let id = null; // String | The ID of the Payer
apiInstance.payersIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| The ID of the Payer | 

### Return type

[**Payer**](Payer.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## payersIdPatch

> Payer payersIdPatch(id, updatePayerRequest)

Update a Payer

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.PayersApi();
let id = null; // String | The ID of the Payer
let updatePayerRequest = new PlastiqPublicApi.UpdatePayerRequest(); // UpdatePayerRequest | Payer to update
apiInstance.payersIdPatch(id, updatePayerRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| The ID of the Payer | 
 **updatePayerRequest** | [**UpdatePayerRequest**](UpdatePayerRequest.md)| Payer to update | 

### Return type

[**Payer**](Payer.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## payersPost

> Payer payersPost(createPayerRequest, opts)

Create a Payer

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.PayersApi();
let createPayerRequest = new PlastiqPublicApi.CreatePayerRequest(); // CreatePayerRequest | Payer to create
let opts = {
  'traceId': "traceId_example", // String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
  'userAgent': "userAgent_example", // String | A string representing the User Agent. Required only when the request is not coming from the end user's browser.
  'endUserDeviceId': "endUserDeviceId_example", // String | A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
  'endUserIp': "endUserIp_example" // String | The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
};
apiInstance.payersPost(createPayerRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPayerRequest** | [**CreatePayerRequest**](CreatePayerRequest.md)| Payer to create | 
 **traceId** | **String**| A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] 
 **userAgent** | **String**| A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser. | [optional] 
 **endUserDeviceId** | **String**| A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] 
 **endUserIp** | **String**| The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] 

### Return type

[**Payer**](Payer.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

