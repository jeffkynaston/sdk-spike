# OpenapiClient::RecipientsApi

All URIs are relative to *https://connect.sandbox.plastiq.com/api*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**recipients_get**](RecipientsApi.md#recipients_get) | **GET** /recipients | Retrieve a paginated list of Recipients by query parameter(s) |
| [**recipients_id_delete**](RecipientsApi.md#recipients_id_delete) | **DELETE** /recipients/{id} | Delete a Recipient |
| [**recipients_id_get**](RecipientsApi.md#recipients_id_get) | **GET** /recipients/{id} | Retrieve a Recipient |
| [**recipients_id_patch**](RecipientsApi.md#recipients_id_patch) | **PATCH** /recipients/{id} | Update a Recipient |
| [**recipients_post**](RecipientsApi.md#recipients_post) | **POST** /recipients | Create a Recipient |


## recipients_get

> <InlineResponse2004> recipients_get(opts)

Retrieve a paginated list of Recipients by query parameter(s)

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::RecipientsApi.new
opts = {
  payer_id: TODO, # String | List only Recipients associated with this Payer ID
  offset: 56, # Integer | The number of records you wish to skip before selecting records
  limit: 56 # Integer | Number of items to return
}

begin
  # Retrieve a paginated list of Recipients by query parameter(s)
  result = api_instance.recipients_get(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling RecipientsApi->recipients_get: #{e}"
end
```

#### Using the recipients_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<InlineResponse2004>, Integer, Hash)> recipients_get_with_http_info(opts)

```ruby
begin
  # Retrieve a paginated list of Recipients by query parameter(s)
  data, status_code, headers = api_instance.recipients_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <InlineResponse2004>
rescue OpenapiClient::ApiError => e
  puts "Error when calling RecipientsApi->recipients_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payer_id** | [**String**](.md) | List only Recipients associated with this Payer ID | [optional] |
| **offset** | **Integer** | The number of records you wish to skip before selecting records | [optional] |
| **limit** | **Integer** | Number of items to return | [optional] |

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recipients_id_delete

> recipients_id_delete(id, opts)

Delete a Recipient

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::RecipientsApi.new
id = TODO # String | The ID of the Recipient
opts = {
  payer_id: TODO # String | The ID of the Payer the Recipient is scoped to
}

begin
  # Delete a Recipient
  api_instance.recipients_id_delete(id, opts)
rescue OpenapiClient::ApiError => e
  puts "Error when calling RecipientsApi->recipients_id_delete: #{e}"
end
```

#### Using the recipients_id_delete_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> recipients_id_delete_with_http_info(id, opts)

```ruby
begin
  # Delete a Recipient
  data, status_code, headers = api_instance.recipients_id_delete_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling RecipientsApi->recipients_id_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | [**String**](.md) | The ID of the Recipient |  |
| **payer_id** | [**String**](.md) | The ID of the Payer the Recipient is scoped to | [optional] |

### Return type

nil (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recipients_id_get

> <Recipient> recipients_id_get(id, opts)

Retrieve a Recipient

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::RecipientsApi.new
id = TODO # String | The ID of the Recipient
opts = {
  payer_id: TODO # String | The ID of the Payer the Recipient is scoped to
}

begin
  # Retrieve a Recipient
  result = api_instance.recipients_id_get(id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling RecipientsApi->recipients_id_get: #{e}"
end
```

#### Using the recipients_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Recipient>, Integer, Hash)> recipients_id_get_with_http_info(id, opts)

```ruby
begin
  # Retrieve a Recipient
  data, status_code, headers = api_instance.recipients_id_get_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Recipient>
rescue OpenapiClient::ApiError => e
  puts "Error when calling RecipientsApi->recipients_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | [**String**](.md) | The ID of the Recipient |  |
| **payer_id** | [**String**](.md) | The ID of the Payer the Recipient is scoped to | [optional] |

### Return type

[**Recipient**](Recipient.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recipients_id_patch

> <Recipient> recipients_id_patch(id, patch_recipient_request)

Update a Recipient

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::RecipientsApi.new
id = TODO # String | The ID of the Recipient
patch_recipient_request = OpenapiClient::PatchRecipientRequest.new # PatchRecipientRequest | Recipient to create

begin
  # Update a Recipient
  result = api_instance.recipients_id_patch(id, patch_recipient_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling RecipientsApi->recipients_id_patch: #{e}"
end
```

#### Using the recipients_id_patch_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Recipient>, Integer, Hash)> recipients_id_patch_with_http_info(id, patch_recipient_request)

```ruby
begin
  # Update a Recipient
  data, status_code, headers = api_instance.recipients_id_patch_with_http_info(id, patch_recipient_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Recipient>
rescue OpenapiClient::ApiError => e
  puts "Error when calling RecipientsApi->recipients_id_patch_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | [**String**](.md) | The ID of the Recipient |  |
| **patch_recipient_request** | [**PatchRecipientRequest**](PatchRecipientRequest.md) | Recipient to create |  |

### Return type

[**Recipient**](Recipient.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## recipients_post

> <Recipient> recipients_post(create_recipient_request, opts)

Create a Recipient

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::RecipientsApi.new
create_recipient_request = OpenapiClient::CreateRecipientRequest.new({business_name: 'Coffee Beans Supply Co.', category_id: 'd7a2beba-0c2c-42de-9690-26f00ba08339', business_address: OpenapiClient::RecipientAddress.new({line1: '19439 Stevens Creek Blvd', country: 'US'}), contact: OpenapiClient::CreateRecipientRequestContact.new({email: 'bobsmith@coffeebean.supply'}), receiving_method: TODO}) # CreateRecipientRequest | Recipient to create
opts = {
  trace_id: 'trace_id_example', # String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
  user_agent: 'user_agent_example', # String | A string representing the User Agent. Required only when the request is not coming from the end user's browser.
  end_user_device_id: 'end_user_device_id_example', # String | A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
  end_user_ip: 'end_user_ip_example' # String | The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
}

begin
  # Create a Recipient
  result = api_instance.recipients_post(create_recipient_request, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling RecipientsApi->recipients_post: #{e}"
end
```

#### Using the recipients_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Recipient>, Integer, Hash)> recipients_post_with_http_info(create_recipient_request, opts)

```ruby
begin
  # Create a Recipient
  data, status_code, headers = api_instance.recipients_post_with_http_info(create_recipient_request, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Recipient>
rescue OpenapiClient::ApiError => e
  puts "Error when calling RecipientsApi->recipients_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_recipient_request** | [**CreateRecipientRequest**](CreateRecipientRequest.md) | Recipient to create |  |
| **trace_id** | **String** | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] |
| **user_agent** | **String** | A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser. | [optional] |
| **end_user_device_id** | **String** | A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] |
| **end_user_ip** | **String** | The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] |

### Return type

[**Recipient**](Recipient.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

