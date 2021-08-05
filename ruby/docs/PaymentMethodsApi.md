# OpenapiClient::PaymentMethodsApi

All URIs are relative to *https://connect.sandbox.plastiq.com/api*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**payment_methods_get**](PaymentMethodsApi.md#payment_methods_get) | **GET** /payment-methods | Retrieve a paginated list of Payment Methods by query parameter(s) |
| [**payment_methods_id_delete**](PaymentMethodsApi.md#payment_methods_id_delete) | **DELETE** /payment-methods/{id} | Delete a Payment Method |
| [**payment_methods_id_get**](PaymentMethodsApi.md#payment_methods_id_get) | **GET** /payment-methods/{id} | Retrieve a Payment Method |
| [**payment_methods_id_patch**](PaymentMethodsApi.md#payment_methods_id_patch) | **PATCH** /payment-methods/{id} | Update a Payment Method |
| [**payment_methods_post**](PaymentMethodsApi.md#payment_methods_post) | **POST** /payment-methods | Create a Payment Method |


## payment_methods_get

> <InlineResponse2003> payment_methods_get(payer_id, opts)

Retrieve a paginated list of Payment Methods by query parameter(s)

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PaymentMethodsApi.new
payer_id = TODO # String | The associated Payer ID to list Payment Methods for
opts = {
  offset: 56, # Integer | The number of records you wish to skip before selecting records
  limit: 56 # Integer | Number of items to return
}

begin
  # Retrieve a paginated list of Payment Methods by query parameter(s)
  result = api_instance.payment_methods_get(payer_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentMethodsApi->payment_methods_get: #{e}"
end
```

#### Using the payment_methods_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<InlineResponse2003>, Integer, Hash)> payment_methods_get_with_http_info(payer_id, opts)

```ruby
begin
  # Retrieve a paginated list of Payment Methods by query parameter(s)
  data, status_code, headers = api_instance.payment_methods_get_with_http_info(payer_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <InlineResponse2003>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentMethodsApi->payment_methods_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payer_id** | [**String**](.md) | The associated Payer ID to list Payment Methods for |  |
| **offset** | **Integer** | The number of records you wish to skip before selecting records | [optional] |
| **limit** | **Integer** | Number of items to return | [optional] |

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## payment_methods_id_delete

> payment_methods_id_delete(id)

Delete a Payment Method

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PaymentMethodsApi.new
id = TODO # String | The ID of the Payment Method

begin
  # Delete a Payment Method
  api_instance.payment_methods_id_delete(id)
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentMethodsApi->payment_methods_id_delete: #{e}"
end
```

#### Using the payment_methods_id_delete_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> payment_methods_id_delete_with_http_info(id)

```ruby
begin
  # Delete a Payment Method
  data, status_code, headers = api_instance.payment_methods_id_delete_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentMethodsApi->payment_methods_id_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | [**String**](.md) | The ID of the Payment Method |  |

### Return type

nil (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## payment_methods_id_get

> <PaymentMethod> payment_methods_id_get(payer_id, id)

Retrieve a Payment Method

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PaymentMethodsApi.new
payer_id = TODO # String | The Payer ID associated to the Payment Method
id = TODO # String | The ID of the Payment Method

begin
  # Retrieve a Payment Method
  result = api_instance.payment_methods_id_get(payer_id, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentMethodsApi->payment_methods_id_get: #{e}"
end
```

#### Using the payment_methods_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PaymentMethod>, Integer, Hash)> payment_methods_id_get_with_http_info(payer_id, id)

```ruby
begin
  # Retrieve a Payment Method
  data, status_code, headers = api_instance.payment_methods_id_get_with_http_info(payer_id, id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PaymentMethod>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentMethodsApi->payment_methods_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payer_id** | [**String**](.md) | The Payer ID associated to the Payment Method |  |
| **id** | [**String**](.md) | The ID of the Payment Method |  |

### Return type

[**PaymentMethod**](PaymentMethod.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## payment_methods_id_patch

> <PaymentMethod> payment_methods_id_patch(id, patch_payment_method_request, opts)

Update a Payment Method

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PaymentMethodsApi.new
id = TODO # String | The ID of the Payment Method
patch_payment_method_request = OpenapiClient::PatchPaymentMethodRequest.new({type: 'CARD', data: TODO, payer: OpenapiClient::PayerId.new({id: '8f51c396-6e29-49a6-ba5a-1a31d5420158'})}) # PatchPaymentMethodRequest | Payment Method to update
opts = {
  trace_id: 'trace_id_example', # String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
  user_agent: 'user_agent_example', # String | A string representing the User Agent. Required only when the request is not coming from the end user's browser.
  end_user_device_id: 'end_user_device_id_example', # String | A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
  end_user_ip: 'end_user_ip_example' # String | The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
}

begin
  # Update a Payment Method
  result = api_instance.payment_methods_id_patch(id, patch_payment_method_request, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentMethodsApi->payment_methods_id_patch: #{e}"
end
```

#### Using the payment_methods_id_patch_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PaymentMethod>, Integer, Hash)> payment_methods_id_patch_with_http_info(id, patch_payment_method_request, opts)

```ruby
begin
  # Update a Payment Method
  data, status_code, headers = api_instance.payment_methods_id_patch_with_http_info(id, patch_payment_method_request, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PaymentMethod>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentMethodsApi->payment_methods_id_patch_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | [**String**](.md) | The ID of the Payment Method |  |
| **patch_payment_method_request** | [**PatchPaymentMethodRequest**](PatchPaymentMethodRequest.md) | Payment Method to update |  |
| **trace_id** | **String** | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] |
| **user_agent** | **String** | A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser. | [optional] |
| **end_user_device_id** | **String** | A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] |
| **end_user_ip** | **String** | The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] |

### Return type

[**PaymentMethod**](PaymentMethod.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## payment_methods_post

> <PaymentMethod> payment_methods_post(create_payment_method_request, opts)

Create a Payment Method

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PaymentMethodsApi.new
create_payment_method_request = OpenapiClient::CreatePaymentMethodRequest.new({type: 'CARD'}) # CreatePaymentMethodRequest | Payment Method to create
opts = {
  trace_id: 'trace_id_example', # String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
  user_agent: 'user_agent_example', # String | A string representing the User Agent. Required only when the request is not coming from the end user's browser.
  end_user_device_id: 'end_user_device_id_example', # String | A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
  end_user_ip: 'end_user_ip_example' # String | The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
}

begin
  # Create a Payment Method
  result = api_instance.payment_methods_post(create_payment_method_request, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentMethodsApi->payment_methods_post: #{e}"
end
```

#### Using the payment_methods_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PaymentMethod>, Integer, Hash)> payment_methods_post_with_http_info(create_payment_method_request, opts)

```ruby
begin
  # Create a Payment Method
  data, status_code, headers = api_instance.payment_methods_post_with_http_info(create_payment_method_request, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PaymentMethod>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentMethodsApi->payment_methods_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_payment_method_request** | [**CreatePaymentMethodRequest**](CreatePaymentMethodRequest.md) | Payment Method to create |  |
| **trace_id** | **String** | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] |
| **user_agent** | **String** | A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser. | [optional] |
| **end_user_device_id** | **String** | A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] |
| **end_user_ip** | **String** | The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] |

### Return type

[**PaymentMethod**](PaymentMethod.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

