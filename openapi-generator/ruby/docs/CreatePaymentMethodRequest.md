# OpenapiClient::CreatePaymentMethodRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** |  |  |
| **data** | [**OneOfCardBankAccount**](OneOfCardBankAccount.md) |  | [optional] |
| **payer** | [**OneOfpayerId**](OneOfpayerId.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::CreatePaymentMethodRequest.new(
  type: null,
  data: null,
  payer: null
)
```

