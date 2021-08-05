# OpenapiClient::PaymentsApi

All URIs are relative to *https://connect.sandbox.plastiq.com/api*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**payment_intents_id_get**](PaymentsApi.md#payment_intents_id_get) | **GET** /payment-intents/{id} | Retrieve a single Payment Intent |
| [**payment_intents_id_patch**](PaymentsApi.md#payment_intents_id_patch) | **PATCH** /payment-intents/{id} | Update a Payment Intent |
| [**payment_intents_post**](PaymentsApi.md#payment_intents_post) | **POST** /payment-intents | Create a Payment Intent |
| [**payments_get**](PaymentsApi.md#payments_get) | **GET** /payments | Retrieve a paginated list of payments by query parameter(s) |
| [**payments_id_get**](PaymentsApi.md#payments_id_get) | **GET** /payments/{id} | Retrieve a single Payment |
| [**payments_id_refunds_post**](PaymentsApi.md#payments_id_refunds_post) | **POST** /payments/{id}/refunds | Refund or cancel an existing Payment |
| [**payments_post**](PaymentsApi.md#payments_post) | **POST** /payments | Create a Payment from a Payment Intent |


## payment_intents_id_get

> <PaymentIntent> payment_intents_id_get(payer_id, id)

Retrieve a single Payment Intent

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PaymentsApi.new
payer_id = TODO # String | The Payer ID of the Payment Intent
id = TODO # String | The ID of the Payment Intent

begin
  # Retrieve a single Payment Intent
  result = api_instance.payment_intents_id_get(payer_id, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentsApi->payment_intents_id_get: #{e}"
end
```

#### Using the payment_intents_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PaymentIntent>, Integer, Hash)> payment_intents_id_get_with_http_info(payer_id, id)

```ruby
begin
  # Retrieve a single Payment Intent
  data, status_code, headers = api_instance.payment_intents_id_get_with_http_info(payer_id, id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PaymentIntent>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentsApi->payment_intents_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payer_id** | [**String**](.md) | The Payer ID of the Payment Intent |  |
| **id** | [**String**](.md) | The ID of the Payment Intent |  |

### Return type

[**PaymentIntent**](PaymentIntent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## payment_intents_id_patch

> <PaymentIntent> payment_intents_id_patch(id, patch_payment_intent_request_payload)

Update a Payment Intent

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PaymentsApi.new
id = TODO # String | The ID of the Payment Intent
patch_payment_intent_request_payload = OpenapiClient::PatchPaymentIntentRequestPayload.new # PatchPaymentIntentRequestPayload | Payment Intent to update

begin
  # Update a Payment Intent
  result = api_instance.payment_intents_id_patch(id, patch_payment_intent_request_payload)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentsApi->payment_intents_id_patch: #{e}"
end
```

#### Using the payment_intents_id_patch_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PaymentIntent>, Integer, Hash)> payment_intents_id_patch_with_http_info(id, patch_payment_intent_request_payload)

```ruby
begin
  # Update a Payment Intent
  data, status_code, headers = api_instance.payment_intents_id_patch_with_http_info(id, patch_payment_intent_request_payload)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PaymentIntent>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentsApi->payment_intents_id_patch_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | [**String**](.md) | The ID of the Payment Intent |  |
| **patch_payment_intent_request_payload** | [**PatchPaymentIntentRequestPayload**](PatchPaymentIntentRequestPayload.md) | Payment Intent to update |  |

### Return type

[**PaymentIntent**](PaymentIntent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## payment_intents_post

> <PaymentIntent> payment_intents_post(create_payment_intent_request_payload, opts)

Create a Payment Intent

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PaymentsApi.new
create_payment_intent_request_payload = OpenapiClient::CreatePaymentIntentRequestPayload.new({payment_method: TODO, recipient: TODO, payer: TODO}) # CreatePaymentIntentRequestPayload | Create a Payment Intent object staging it for execution
opts = {
  trace_id: 'trace_id_example', # String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
  user_agent: 'user_agent_example', # String | A string representing the User Agent. Required only when the request is not coming from the end user's browser.
  end_user_device_id: 'end_user_device_id_example', # String | A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
  end_user_ip: 'end_user_ip_example' # String | The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
}

begin
  # Create a Payment Intent
  result = api_instance.payment_intents_post(create_payment_intent_request_payload, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentsApi->payment_intents_post: #{e}"
end
```

#### Using the payment_intents_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PaymentIntent>, Integer, Hash)> payment_intents_post_with_http_info(create_payment_intent_request_payload, opts)

```ruby
begin
  # Create a Payment Intent
  data, status_code, headers = api_instance.payment_intents_post_with_http_info(create_payment_intent_request_payload, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PaymentIntent>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentsApi->payment_intents_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_payment_intent_request_payload** | [**CreatePaymentIntentRequestPayload**](CreatePaymentIntentRequestPayload.md) | Create a Payment Intent object staging it for execution |  |
| **trace_id** | **String** | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] |
| **user_agent** | **String** | A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser. | [optional] |
| **end_user_device_id** | **String** | A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] |
| **end_user_ip** | **String** | The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] |

### Return type

[**PaymentIntent**](PaymentIntent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## payments_get

> <InlineResponse2002> payments_get(payer_id, opts)

Retrieve a paginated list of payments by query parameter(s)

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PaymentsApi.new
payer_id = TODO # String | The associated Payer ID to list payments for
opts = {
  offset: 56, # Integer | The number of records you wish to skip before selecting records
  limit: 56 # Integer | Number of items to return
}

begin
  # Retrieve a paginated list of payments by query parameter(s)
  result = api_instance.payments_get(payer_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentsApi->payments_get: #{e}"
end
```

#### Using the payments_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<InlineResponse2002>, Integer, Hash)> payments_get_with_http_info(payer_id, opts)

```ruby
begin
  # Retrieve a paginated list of payments by query parameter(s)
  data, status_code, headers = api_instance.payments_get_with_http_info(payer_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <InlineResponse2002>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentsApi->payments_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payer_id** | [**String**](.md) | The associated Payer ID to list payments for |  |
| **offset** | **Integer** | The number of records you wish to skip before selecting records | [optional] |
| **limit** | **Integer** | Number of items to return | [optional] |

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## payments_id_get

> <Payment> payments_id_get(payer_id, id)

Retrieve a single Payment

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PaymentsApi.new
payer_id = TODO # String | The Payer ID associated with the Payment
id = TODO # String | The ID of the Payment

begin
  # Retrieve a single Payment
  result = api_instance.payments_id_get(payer_id, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentsApi->payments_id_get: #{e}"
end
```

#### Using the payments_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Payment>, Integer, Hash)> payments_id_get_with_http_info(payer_id, id)

```ruby
begin
  # Retrieve a single Payment
  data, status_code, headers = api_instance.payments_id_get_with_http_info(payer_id, id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Payment>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentsApi->payments_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payer_id** | [**String**](.md) | The Payer ID associated with the Payment |  |
| **id** | [**String**](.md) | The ID of the Payment |  |

### Return type

[**Payment**](Payment.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## payments_id_refunds_post

> <PaymentRefund> payments_id_refunds_post(id, payment_refund_request, opts)

Refund or cancel an existing Payment

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PaymentsApi.new
id = TODO # String | The ID of the Payment to refund
payment_refund_request = OpenapiClient::PaymentRefundRequest.new # PaymentRefundRequest | Payment Refund body
opts = {
  trace_id: 'trace_id_example' # String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
}

begin
  # Refund or cancel an existing Payment
  result = api_instance.payments_id_refunds_post(id, payment_refund_request, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentsApi->payments_id_refunds_post: #{e}"
end
```

#### Using the payments_id_refunds_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PaymentRefund>, Integer, Hash)> payments_id_refunds_post_with_http_info(id, payment_refund_request, opts)

```ruby
begin
  # Refund or cancel an existing Payment
  data, status_code, headers = api_instance.payments_id_refunds_post_with_http_info(id, payment_refund_request, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PaymentRefund>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentsApi->payments_id_refunds_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | [**String**](.md) | The ID of the Payment to refund |  |
| **payment_refund_request** | [**PaymentRefundRequest**](PaymentRefundRequest.md) | Payment Refund body |  |
| **trace_id** | **String** | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] |

### Return type

[**PaymentRefund**](PaymentRefund.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## payments_post

> <Payment> payments_post(create_payment_request, opts)

Create a Payment from a Payment Intent

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PaymentsApi.new
create_payment_request = OpenapiClient::CreatePaymentIntentRequestPayload.new({payment_method: TODO, recipient: TODO, payer: TODO}) # CreatePaymentRequest | Payment to create
opts = {
  trace_id: 'trace_id_example', # String | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
  user_agent: 'user_agent_example', # String | A string representing the User Agent. Required only when the request is not coming from the end user's browser.
  end_user_device_id: 'end_user_device_id_example', # String | A unique identifier for the end user's browser. Recommended for compliance when the request is not coming from the end user's browser.
  end_user_ip: 'end_user_ip_example', # String | The IP address of the end user. Recommended for compliance when the request is not coming from the end user's browser.
  idempotency_key: 'idempotency_key_example' # String | A valid UUID (V4) for handling duplicate requests. Will return original status code, response body, and set a 'Idempotent-Replay' header on response for a given key if a match exists.
}

begin
  # Create a Payment from a Payment Intent
  result = api_instance.payments_post(create_payment_request, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentsApi->payments_post: #{e}"
end
```

#### Using the payments_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Payment>, Integer, Hash)> payments_post_with_http_info(create_payment_request, opts)

```ruby
begin
  # Create a Payment from a Payment Intent
  data, status_code, headers = api_instance.payments_post_with_http_info(create_payment_request, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Payment>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PaymentsApi->payments_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_payment_request** | [**CreatePaymentRequest**](CreatePaymentRequest.md) | Payment to create |  |
| **trace_id** | **String** | A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned. | [optional] |
| **user_agent** | **String** | A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser. | [optional] |
| **end_user_device_id** | **String** | A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] |
| **end_user_ip** | **String** | The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser. | [optional] |
| **idempotency_key** | **String** | A valid UUID (V4) for handling duplicate requests. Will return original status code, response body, and set a &#39;Idempotent-Replay&#39; header on response for a given key if a match exists. | [optional] |

### Return type

[**Payment**](Payment.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

