# OpenapiClient::PayersApi

All URIs are relative to *https://connect.sandbox.plastiq.com/api*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**payers_id_delete**](PayersApi.md#payers_id_delete) | **DELETE** /payers/{id} | Delete a Payer |
| [**payers_id_get**](PayersApi.md#payers_id_get) | **GET** /payers/{id} | Retrieve a Payer |
| [**payers_id_patch**](PayersApi.md#payers_id_patch) | **PATCH** /payers/{id} | Update a Payer |
| [**payers_post**](PayersApi.md#payers_post) | **POST** /payers | Create a Payer |


## payers_id_delete

> payers_id_delete(id)

Delete a Payer

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PayersApi.new
id = TODO # String | The ID of the Payer

begin
  # Delete a Payer
  api_instance.payers_id_delete(id)
rescue OpenapiClient::ApiError => e
  puts "Error when calling PayersApi->payers_id_delete: #{e}"
end
```

#### Using the payers_id_delete_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> payers_id_delete_with_http_info(id)

```ruby
begin
  # Delete a Payer
  data, status_code, headers = api_instance.payers_id_delete_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling PayersApi->payers_id_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | [**String**](.md) | The ID of the Payer |  |

### Return type

nil (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## payers_id_get

> <Payer> payers_id_get(id)

Retrieve a Payer

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PayersApi.new
id = TODO # String | The ID of the Payer

begin
  # Retrieve a Payer
  result = api_instance.payers_id_get(id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PayersApi->payers_id_get: #{e}"
end
```

#### Using the payers_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Payer>, Integer, Hash)> payers_id_get_with_http_info(id)

```ruby
begin
  # Retrieve a Payer
  data, status_code, headers = api_instance.payers_id_get_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Payer>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PayersApi->payers_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | [**String**](.md) | The ID of the Payer |  |

### Return type

[**Payer**](Payer.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## payers_id_patch

> <Payer> payers_id_patch(id, update_payer_request)

Update a Payer

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PayersApi.new
id = TODO # String | The ID of the Payer
update_payer_request = OpenapiClient::UpdatePayerRequest.new # UpdatePayerRequest | Payer to update

begin
  # Update a Payer
  result = api_instance.payers_id_patch(id, update_payer_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PayersApi->payers_id_patch: #{e}"
end
```

#### Using the payers_id_patch_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Payer>, Integer, Hash)> payers_id_patch_with_http_info(id, update_payer_request)

```ruby
begin
  # Update a Payer
  data, status_code, headers = api_instance.payers_id_patch_with_http_info(id, update_payer_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Payer>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PayersApi->payers_id_patch_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | [**String**](.md) | The ID of the Payer |  |
| **update_payer_request** | [**UpdatePayerRequest**](UpdatePayerRequest.md) | Payer to update |  |

### Return type

[**Payer**](Payer.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## payers_post

> <Payer> payers_post(create_payer_request, opts)

Create a Payer

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PayersApi.new
create_payer_request = OpenapiClient::CreatePayerRequest.new({contact: OpenapiClient::ContactOneOf.new({phone: '4155550100'})}) # CreatePayerRequest | Payer to create
opts = {
  trace_id: 'trace_id_example', # String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
  user_agent: 'user_agent_example', # String | A string representing the User Agent. Required only when the request is not coming from the end user's browser.
  end_user_device_id: 'end_user_device_id_example', # String | A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
  end_user_ip: 'end_user_ip_example' # String | The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
}

begin
  # Create a Payer
  result = api_instance.payers_post(create_payer_request, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PayersApi->payers_post: #{e}"
end
```

#### Using the payers_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Payer>, Integer, Hash)> payers_post_with_http_info(create_payer_request, opts)

```ruby
begin
  # Create a Payer
  data, status_code, headers = api_instance.payers_post_with_http_info(create_payer_request, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Payer>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PayersApi->payers_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_payer_request** | [**CreatePayerRequest**](CreatePayerRequest.md) | Payer to create |  |
| **trace_id** | **String** | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] |
| **user_agent** | **String** | A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser. | [optional] |
| **end_user_device_id** | **String** | A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] |
| **end_user_ip** | **String** | The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] |

### Return type

[**Payer**](Payer.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

