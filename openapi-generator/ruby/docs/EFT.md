# OpenapiClient::EFT

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** |  |  |
| **account_number** | **String** | Bank EFT account number |  |
| **routing_number** | **String** | 8 digit routing number |  |
| **beneficiary_name** | **String** |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EFT.new(
  type: null,
  account_number: 3864328462,
  routing_number: 00301094,
  beneficiary_name: Coffee Beans Supply Co.
)
```

