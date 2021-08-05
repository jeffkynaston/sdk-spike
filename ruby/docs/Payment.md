# OpenapiClient::Payment

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
| **delivery_date** | **Date** |  | [optional] |
| **created_at** | **Time** |  | [optional] |
| **status** | [**PaymentStatus**](PaymentStatus.md) |  | [optional] |
| **source_descriptor** | **String** |  | [optional] |
| **target_descriptor** | **String** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Payment.new(
  id: bbe023aa-ccd6-4bfc-a209-c6bb5859a9a8,
  fees: null,
  source_amount: null,
  target_amount: null,
  payment_method: null,
  recipient: null,
  payer: null,
  details: null,
  delivery_date: Thu Nov 19 16:00:00 PST 2020,
  created_at: 2020-11-19T01:35:55.096Z,
  status: null,
  source_descriptor: PQ Coffee Beans Supply Co #ARSSDF45,
  target_descriptor: PQ Philz Coffee #ARSSDF45
)
```

