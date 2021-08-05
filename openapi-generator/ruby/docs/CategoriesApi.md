# OpenapiClient::CategoriesApi

All URIs are relative to *https://connect.sandbox.plastiq.com/api*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**categories_get**](CategoriesApi.md#categories_get) | **GET** /categories | Retrieve a paginated list of Categories by query parameter(s) |


## categories_get

> <InlineResponse200> categories_get

Retrieve a paginated list of Categories by query parameter(s)

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (token): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::CategoriesApi.new

begin
  # Retrieve a paginated list of Categories by query parameter(s)
  result = api_instance.categories_get
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling CategoriesApi->categories_get: #{e}"
end
```

#### Using the categories_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<InlineResponse200>, Integer, Hash)> categories_get_with_http_info

```ruby
begin
  # Retrieve a paginated list of Categories by query parameter(s)
  data, status_code, headers = api_instance.categories_get_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <InlineResponse200>
rescue OpenapiClient::ApiError => e
  puts "Error when calling CategoriesApi->categories_get_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

