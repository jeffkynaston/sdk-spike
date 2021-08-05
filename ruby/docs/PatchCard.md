# OpenapiClient::PatchCard

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_holder_name** | **String** |  | [optional] |
| **cvv** | **String** | 3-4 digits |  |
| **expiration_month** | **String** |  | [optional] |
| **expiration_year** | **String** |  | [optional] |
| **billing_address** | [**Address**](Address.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PatchCard.new(
  card_holder_name: Jen Doe,
  cvv: 123,
  expiration_month: 01,
  expiration_year: 2021,
  billing_address: null
)
```

