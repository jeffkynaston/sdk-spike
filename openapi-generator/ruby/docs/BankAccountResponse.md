# OpenapiClient::BankAccountResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_type** | **String** | The type of the bank account | [optional] |
| **account_holder_name** | **String** | The legal name of the account holder | [optional] |
| **created_at** | **String** |  | [optional] |
| **account_last_four** | **String** | Last 4 digits of the account number | [optional] |
| **routing_number** | **String** | The routing number of the bank account | [optional] |
| **billing_address** | [**Address**](Address.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::BankAccountResponse.new(
  account_type: CHECKING,
  account_holder_name: Jane Payer,
  created_at: 2020-11-19T01:35:53.096Z,
  account_last_four: 4242,
  routing_number: 211371120,
  billing_address: null
)
```

