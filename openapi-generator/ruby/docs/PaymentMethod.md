# OpenapiClient::PaymentMethod

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **type** | **String** |  | [optional] |
| **data** | [**OneOfCardResponseBankAccountResponse**](OneOfCardResponseBankAccountResponse.md) |  | [optional] |
| **status** | [**PaymentMethodStatus**](PaymentMethodStatus.md) |  | [optional] |
| **status_reasons** | [**Array&lt;StatusReason&gt;**](StatusReason.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PaymentMethod.new(
  id: 6f0eb884-3f41-4b57-b86a-80f62dca011e,
  type: null,
  data: null,
  status: ACTIVE,
  status_reasons: null
)
```

