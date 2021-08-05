# OpenapiClient::PaymentIntentFees

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | [**AmountDetails**](AmountDetails.md) |  | [optional] |
| **type** | **String** | The type of fee applied to the payment | [optional] |
| **rate** | **String** | The rate of the fee assessed, presented in percentage. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PaymentIntentFees.new(
  amount: null,
  type: null,
  rate: 2.85%
)
```

