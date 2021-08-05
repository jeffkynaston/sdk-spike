# OpenapiClient::CreatePaymentIntentRequestPayload

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **target_amount** | [**OneOfamountDetails**](OneOfamountDetails.md) |  | [optional] |
| **payment_method** | [**OneOfpaymentMethodId**](OneOfpaymentMethodId.md) |  |  |
| **recipient** | [**OneOfrecipientIdCreateRecipientRequest**](OneOfrecipientIdCreateRecipientRequest.md) |  |  |
| **payer** | [**OneOfpayerId**](OneOfpayerId.md) |  |  |
| **details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] |
| **metadata** | **Object** | additional payment information to support operational requirements | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::CreatePaymentIntentRequestPayload.new(
  target_amount: null,
  payment_method: null,
  recipient: null,
  payer: null,
  details: null,
  metadata: null
)
```

