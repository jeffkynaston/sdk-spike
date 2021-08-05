# OpenapiClient::AmountDetails

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **value** | **Float** | Value of the currency between 1 and 99999999.99 |  |
| **currency** | **String** | Currency value |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::AmountDetails.new(
  value: 100,
  currency: null
)
```

