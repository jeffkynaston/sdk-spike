# OpenapiClient::PaymentIntent

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **fees** | [**Array&lt;PaymentIntentFees&gt;**](PaymentIntentFees.md) |  | [optional] |
| **source_amount** | [**AmountDetails**](AmountDetails.md) |  | [optional] |
| **target_amount** | [**AmountDetails**](AmountDetails.md) |  | [optional] |
| **payment_method** | [**PaymentMethodId**](PaymentMethodId.md) |  | [optional] |
| **recipient** | [**RecipientId**](RecipientId.md) |  | [optional] |
| **payer** | [**PayerId**](PayerId.md) |  | [optional] |
| **details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] |
| **status** | **String** |  | [optional] |
| **status_reasons** | **Array&lt;Object&gt;** |  | [optional] |
| **delivery_date** | **Date** |  | [optional] |
| **created_at** | **Time** |  | [optional] |
| **expires_at** | **Time** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PaymentIntent.new(
  id: 9998b94e-9008-4f10-9263-1476d2f7bd40,
  fees: null,
  source_amount: null,
  target_amount: null,
  payment_method: null,
  recipient: null,
  payer: null,
  details: null,
  status: CAPTURABLE,
  status_reasons: [],
  delivery_date: Thu Nov 19 16:00:00 PST 2020,
  created_at: 2020-11-19T01:35:53.096Z,
  expires_at: 2020-11-19T01:40:53.096Z
)
```

