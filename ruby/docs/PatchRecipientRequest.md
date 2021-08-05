# OpenapiClient::PatchRecipientRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **business_name** | **String** |  | [optional] |
| **business_address** | [**RecipientAddress**](RecipientAddress.md) |  | [optional] |
| **contact** | [**CreateRecipientRequestContact**](CreateRecipientRequestContact.md) |  | [optional] |
| **payer** | [**PayerId**](PayerId.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PatchRecipientRequest.new(
  business_name: Coffee Beans Supply Co.,
  business_address: null,
  contact: null,
  payer: null
)
```

