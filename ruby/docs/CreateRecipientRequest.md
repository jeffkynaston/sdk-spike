# OpenapiClient::CreateRecipientRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **business_name** | **String** |  |  |
| **category_id** | **String** |  |  |
| **business_address** | [**RecipientAddress**](RecipientAddress.md) |  |  |
| **contact** | [**CreateRecipientRequestContact**](CreateRecipientRequestContact.md) |  |  |
| **receiving_method** | [**OneOfACHCheckEFTWire**](OneOfACHCheckEFTWire.md) |  |  |
| **payer** | [**PayerId**](PayerId.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::CreateRecipientRequest.new(
  business_name: Coffee Beans Supply Co.,
  category_id: d7a2beba-0c2c-42de-9690-26f00ba08339,
  business_address: null,
  contact: null,
  receiving_method: {&quot;type&quot;:&quot;ACH&quot;,&quot;accountNumber&quot;:&quot;3829473294723&quot;,&quot;routingNumber&quot;:&quot;021000021&quot;,&quot;beneficiaryName&quot;:&quot;Coffee Beans Supply Co.&quot;},
  payer: null
)
```

