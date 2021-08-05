# OpenapiClient::InlineObject

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payer** | [**PayerId**](PayerId.md) |  | [optional] |
| **type** | **String** | The type of object to create the Client Secret for. Defaults to CARD. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::InlineObject.new(
  payer: null,
  type: CARD
)
```

