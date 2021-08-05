# OpenapiClient::CreatePaymentRequestFromId

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_intent** | [**OneOfpaymentIntentIdCreatePaymentIntentRequestPayload**](OneOfpaymentIntentIdCreatePaymentIntentRequestPayload.md) |  | [optional] |
| **payer** | [**PayerId**](PayerId.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::CreatePaymentRequestFromId.new(
  payment_intent: null,
  payer: null
)
```

