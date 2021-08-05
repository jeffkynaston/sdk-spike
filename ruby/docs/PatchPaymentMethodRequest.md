# OpenapiClient::PatchPaymentMethodRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** |  |  |
| **data** | [**OneOfPatchCardPatchBankAccount**](OneOfPatchCardPatchBankAccount.md) |  |  |
| **payer** | [**PayerId**](PayerId.md) |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PatchPaymentMethodRequest.new(
  type: null,
  data: null,
  payer: null
)
```

