# OpenapiClient::PatchPaymentIntentRequestPayload

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **target_amount** | [**OneOfamountDetails**](OneOfamountDetails.md) |  | [optional] |
| **details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] |
| **metadata** | **Object** | additional payment information to support operational requirements | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PatchPaymentIntentRequestPayload.new(
  target_amount: null,
  details: null,
  metadata: null
)
```

