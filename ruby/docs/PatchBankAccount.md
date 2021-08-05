# OpenapiClient::PatchBankAccount

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_holder_name** | **String** | The legal name of the account holder | [optional] |
| **routing_number** | **String** | The routing number of the bank account | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PatchBankAccount.new(
  account_holder_name: Jane Payer,
  routing_number: 211371120
)
```

