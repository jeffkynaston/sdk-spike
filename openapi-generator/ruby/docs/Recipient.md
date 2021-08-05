# OpenapiClient::Recipient

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **business_name** | **String** |  | [optional] |
| **category_id** | **String** |  | [optional] |
| **business_address** | [**RecipientAddress**](RecipientAddress.md) |  | [optional] |
| **contact** | [**RecipientContact**](RecipientContact.md) |  | [optional] |
| **receiving_method** | [**OneOfACHCheckEFT**](OneOfACHCheckEFT.md) |  | [optional] |
| **created_at** | **Time** |  | [optional] |
| **status** | [**Status**](Status.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Recipient.new(
  id: a8d4e641-e130-43d1-90a0-9717561539aa,
  business_name: Coffee Beans Supply Co.,
  category_id: d7a2beba-0c2c-42de-9690-26f00ba08339,
  business_address: null,
  contact: null,
  receiving_method: {&quot;type&quot;:&quot;ACH&quot;,&quot;accountLastFour&quot;:&quot;4723&quot;,&quot;routingNumber&quot;:&quot;021000021&quot;,&quot;beneficiaryName&quot;:&quot;Coffee Beans Supply Co.&quot;},
  created_at: 2020-11-19T01:35:53.096Z,
  status: null
)
```

