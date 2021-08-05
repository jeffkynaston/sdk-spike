# OpenapiClient::Wire

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** |  |  |
| **account_number** | **String** | Bank wire account number (alphanumeric) |  |
| **routing_number** | **String** | Bank wire routing number |  |
| **beneficiary_name** | **String** |  |  |
| **country** | **String** | Two-letter country code (ISO 3166-1 alpha-2). |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Wire.new(
  type: null,
  account_number: 3829473294723,
  routing_number: 021000021,
  beneficiary_name: Coffee Beans Supply Co.,
  country: null
)
```

