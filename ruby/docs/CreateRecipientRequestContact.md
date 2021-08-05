# OpenapiClient::CreateRecipientRequestContact

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **first_name** | **String** |  | [optional] |
| **last_name** | **String** |  | [optional] |
| **email** | **String** |  |  |
| **phone** | **String** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::CreateRecipientRequestContact.new(
  first_name: Bob,
  last_name: Smith,
  email: bobsmith@coffeebean.supply,
  phone: 4155550100
)
```

