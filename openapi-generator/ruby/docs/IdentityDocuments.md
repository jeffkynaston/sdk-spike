# OpenapiClient::IdentityDocuments

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** |  |  |
| **value** | **String** |  |  |
| **country_of_issuance** | **String** | Passport country of issuance. Two-letter country code (ISO 3166-1 alpha-2). | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::IdentityDocuments.new(
  type: US_SSN,
  value: 123456789,
  country_of_issuance: US
)
```

