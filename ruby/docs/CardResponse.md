# OpenapiClient::CardResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **last4** | **String** | Last 4 digits of card number | [optional] |
| **brand** | **String** |  | [optional] |
| **expiration_month** | **String** |  | [optional] |
| **expiration_year** | **String** |  | [optional] |
| **created_at** | **String** |  | [optional] |
| **billing_address** | [**Address**](Address.md) |  | [optional] |
| **sub_type** | **String** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::CardResponse.new(
  last4: 4242,
  brand: Visa,
  expiration_month: 01,
  expiration_year: 2021,
  created_at: 2020-11-19T01:35:53.096Z,
  billing_address: null,
  sub_type: CREDIT
)
```

