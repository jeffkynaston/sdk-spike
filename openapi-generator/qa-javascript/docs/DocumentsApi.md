# PlastiqPublicApi.DocumentsApi

All URIs are relative to *https://connect.sandbox.plastiq.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**documentsPost**](DocumentsApi.md#documentsPost) | **POST** /documents | Upload a document



## documentsPost

> DocumentUpload documentsPost(createDocumentUploadRequest, opts)

Upload a document

### Example

```javascript
import PlastiqPublicApi from 'plastiq_public_api';
let defaultClient = PlastiqPublicApi.ApiClient.instance;
// Configure Bearer (token) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PlastiqPublicApi.DocumentsApi();
let createDocumentUploadRequest = new PlastiqPublicApi.CreateDocumentUploadRequest(); // CreateDocumentUploadRequest | Document metadata
let opts = {
  'traceId': "traceId_example", // String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
  'userAgent': "userAgent_example", // String | A string representing the User Agent. Required only when the request is not coming from the end user's browser.
  'endUserDeviceId': "endUserDeviceId_example", // String | A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
  'endUserIp': "endUserIp_example" // String | The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
};
apiInstance.documentsPost(createDocumentUploadRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDocumentUploadRequest** | [**CreateDocumentUploadRequest**](CreateDocumentUploadRequest.md)| Document metadata | 
 **traceId** | **String**| A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] 
 **userAgent** | **String**| A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser. | [optional] 
 **endUserDeviceId** | **String**| A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] 
 **endUserIp** | **String**| The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] 

### Return type

[**DocumentUpload**](DocumentUpload.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

