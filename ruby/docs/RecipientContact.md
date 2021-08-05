# OpenapiClient::RecipientContact

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **first_name** | **String** |  | [optional] |
| **last_name** | **String** |  | [optional] |
| **email** | **String** |  | [optional] |
| **phone** | **String** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::RecipientContact.new(
  first_name: Bob,
  last_name: Smith,
  email: bobsmith@coffeebean.supply,
  phone: 4155550100
)
```

