# PlastiqPublicApi.RecipientsApi

All URIs are relative to *https://connect.sandbox.plastiq.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipientsGet**](RecipientsApi.md#recipientsGet) | **GET** /recipients | Retrieve a paginated list of Recipients by query parameter(s)
[**recipientsIdDelete**](RecipientsApi.md#recipientsIdDelete) | **DELETE** /recipients/{id} | Delete a Recipient
[**recipientsIdGet**](RecipientsApi.md#recipientsIdGet) | **GET** /recipients/{id} | Retrieve a Recipient
[**recipientsIdPatch**](RecipientsApi.md#recipientsIdPatch) | **PATCH** /recipients/{id} | Update a Recipient
[**recipientsPost**](RecipientsApi.md#recipientsPost) | **POST** /recipients | Create a Recipient



## recipientsGet

> InlineResponse2004 recipientsGet(opts)

Retrieve a paginated list of Recipients by query parameter(s)

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.RecipientsApi();
let opts = {
  'payerId': null, // String | List only Recipients associated with this Payer ID
  'offset': 56, // Number | The number of records you wish to skip before selecting records
  'limit': 56 // Number | Number of items to return
};
apiInstance.recipientsGet(opts, (error, data, response) => {
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
 **payerId** | [**String**](.md)| List only Recipients associated with this Payer ID | [optional] 
 **offset** | **Number**| The number of records you wish to skip before selecting records | [optional] 
 **limit** | **Number**| Number of items to return | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recipientsIdDelete

> recipientsIdDelete(id, opts)

Delete a Recipient

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.RecipientsApi();
let id = null; // String | The ID of the Recipient
let opts = {
  'payerId': null // String | The ID of the Payer the Recipient is scoped to
};
apiInstance.recipientsIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| The ID of the Recipient | 
 **payerId** | [**String**](.md)| The ID of the Payer the Recipient is scoped to | [optional] 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recipientsIdGet

> Recipient recipientsIdGet(id, opts)

Retrieve a Recipient

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.RecipientsApi();
let id = null; // String | The ID of the Recipient
let opts = {
  'payerId': null // String | The ID of the Payer the Recipient is scoped to
};
apiInstance.recipientsIdGet(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| The ID of the Recipient | 
 **payerId** | [**String**](.md)| The ID of the Payer the Recipient is scoped to | [optional] 

### Return type

[**Recipient**](Recipient.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recipientsIdPatch

> Recipient recipientsIdPatch(id, patchRecipientRequest)

Update a Recipient

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.RecipientsApi();
let id = null; // String | The ID of the Recipient
let patchRecipientRequest = new PlastiqPublicApi.PatchRecipientRequest(); // PatchRecipientRequest | Recipient to create
apiInstance.recipientsIdPatch(id, patchRecipientRequest, (error, data, response) => {
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
 **id** | [**String**](.md)| The ID of the Recipient | 
 **patchRecipientRequest** | [**PatchRecipientRequest**](PatchRecipientRequest.md)| Recipient to create | 

### Return type

[**Recipient**](Recipient.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## recipientsPost

> Recipient recipientsPost(createRecipientRequest, opts)

Create a Recipient

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.RecipientsApi();
let createRecipientRequest = new PlastiqPublicApi.CreateRecipientRequest(); // CreateRecipientRequest | Recipient to create
let opts = {
  'traceId': "traceId_example", // String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
  'userAgent': "userAgent_example", // String | A string representing the User Agent. Required only when the request is not coming from the end user's browser.
  'endUserDeviceId': "endUserDeviceId_example", // String | A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
  'endUserIp': "endUserIp_example" // String | The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
};
apiInstance.recipientsPost(createRecipientRequest, opts, (error, data, response) => {
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
 **createRecipientRequest** | [**CreateRecipientRequest**](CreateRecipientRequest.md)| Recipient to create | 
 **traceId** | **String**| A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] 
 **userAgent** | **String**| A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser. | [optional] 
 **endUserDeviceId** | **String**| A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] 
 **endUserIp** | **String**| The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] 

### Return type

[**Recipient**](Recipient.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

