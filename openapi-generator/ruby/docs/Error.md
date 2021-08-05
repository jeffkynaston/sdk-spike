# OpenapiClient::Error

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **code** | **String** |  | [optional] |
| **message** | **String** |  | [optional] |
| **errors** | [**Array&lt;ErrorErrors&gt;**](ErrorErrors.md) |  | [optional] |
| **trace_id** | **String** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Error.new(
  code: GENERIC_ERROR,
  message: null,
  errors: null,
  trace_id: null
)
```

