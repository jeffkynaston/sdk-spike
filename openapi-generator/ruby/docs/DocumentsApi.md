# OpenapiClient::DocumentsApi

All URIs are relative to *https://connect.sandbox.plastiq.com/api*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**documents_post**](DocumentsApi.md#documents_post) | **POST** /documents | Upload a document |


## documents_post

> <DocumentUpload> documents_post(create_document_upload_request, opts)

Upload a document

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DocumentsApi.new
create_document_upload_request = OpenapiClient::CreateDocumentUploadRequestOneOf.new # CreateDocumentUploadRequest | Document metadata
opts = {
  trace_id: 'trace_id_example', # String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
  user_agent: 'user_agent_example', # String | A string representing the User Agent. Required only when the request is not coming from the end user's browser.
  end_user_device_id: 'end_user_device_id_example', # String | A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
  end_user_ip: 'end_user_ip_example' # String | The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
}

begin
  # Upload a document
  result = api_instance.documents_post(create_document_upload_request, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DocumentsApi->documents_post: #{e}"
end
```

#### Using the documents_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<DocumentUpload>, Integer, Hash)> documents_post_with_http_info(create_document_upload_request, opts)

```ruby
begin
  # Upload a document
  data, status_code, headers = api_instance.documents_post_with_http_info(create_document_upload_request, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DocumentUpload>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DocumentsApi->documents_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_document_upload_request** | [**CreateDocumentUploadRequest**](CreateDocumentUploadRequest.md) | Document metadata |  |
| **trace_id** | **String** | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] |
| **user_agent** | **String** | A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser. | [optional] |
| **end_user_device_id** | **String** | A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] |
| **end_user_ip** | **String** | The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] |

### Return type

[**DocumentUpload**](DocumentUpload.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

