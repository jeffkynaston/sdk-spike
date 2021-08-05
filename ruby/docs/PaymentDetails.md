# OpenapiClient::PaymentDetails

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_name** | **String** | TBD | [optional] |
| **account_number** | **String** | TBD | [optional] |
| **memo** | **String** | TBD | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PaymentDetails.new(
  account_name: Jen Doe,
  account_number: 647823643287423,
  memo: Payment for Oct. coffee beans inventory
)
```

