# OpenapiClient::Card

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_holder_name** | **String** |  |  |
| **account_number** | **String** | Card number. |  |
| **cvv** | **String** | 3-4 digits |  |
| **expiration_month** | **String** |  |  |
| **expiration_year** | **String** |  |  |
| **billing_address** | [**Address**](Address.md) |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Card.new(
  card_holder_name: Jen Doe,
  account_number: 4242424242424242,
  cvv: 123,
  expiration_month: 01,
  expiration_year: 2021,
  billing_address: null
)
```

