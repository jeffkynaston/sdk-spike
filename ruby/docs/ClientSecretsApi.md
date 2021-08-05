# OpenapiClient::ClientSecretsApi

All URIs are relative to *https://connect.sandbox.plastiq.com/api*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**client_secrets_post**](ClientSecretsApi.md#client_secrets_post) | **POST** /client-secrets | Create a single-use Client Secret |


## client_secrets_post

> <InlineResponse2001> client_secrets_post(inline_object, opts)

Create a single-use Client Secret

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::ClientSecretsApi.new
inline_object = OpenapiClient::InlineObject.new # InlineObject | 
opts = {
  trace_id: 'trace_id_example', # String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
  user_agent: 'user_agent_example', # String | A string representing the User Agent. Required only when the request is not coming from the end user's browser.
  end_user_device_id: 'end_user_device_id_example', # String | A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
  end_user_ip: 'end_user_ip_example' # String | The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
}

begin
  # Create a single-use Client Secret
  result = api_instance.client_secrets_post(inline_object, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ClientSecretsApi->client_secrets_post: #{e}"
end
```

#### Using the client_secrets_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<InlineResponse2001>, Integer, Hash)> client_secrets_post_with_http_info(inline_object, opts)

```ruby
begin
  # Create a single-use Client Secret
  data, status_code, headers = api_instance.client_secrets_post_with_http_info(inline_object, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <InlineResponse2001>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ClientSecretsApi->client_secrets_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **inline_object** | [**InlineObject**](InlineObject.md) |  |  |
| **trace_id** | **String** | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] |
| **user_agent** | **String** | A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser. | [optional] |
| **end_user_device_id** | **String** | A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] |
| **end_user_ip** | **String** | The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] |

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

