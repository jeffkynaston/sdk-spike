# OpenapiClient::ACH

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** |  |  |
| **account_number** | **String** | Bank ACH account number |  |
| **routing_number** | **String** | 9 digit bank routing number |  |
| **beneficiary_name** | **String** |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ACH.new(
  type: null,
  account_number: 3829473294723,
  routing_number: 021000021,
  beneficiary_name: Coffee Beans Supply Co.
)
```

