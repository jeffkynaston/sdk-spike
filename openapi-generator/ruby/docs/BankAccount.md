# OpenapiClient::BankAccount

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_holder_name** | **String** | The legal name of the account holder |  |
| **account_number** | **String** | The account number of the bank account |  |
| **account_type** | **String** | The type of the bank account | [optional] |
| **routing_number** | **String** | The routing number of the bank account |  |
| **billing_address** | [**Address**](Address.md) |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::BankAccount.new(
  account_holder_name: Jane Payer,
  account_number: 41541433888,
  account_type: CHECKING,
  routing_number: 211371120,
  billing_address: null
)
```

