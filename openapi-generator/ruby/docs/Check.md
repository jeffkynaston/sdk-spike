# OpenapiClient::Check

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** |  |  |
| **line1** | **String** | Address line 1 (e.g., street, PO Box, or company name). |  |
| **line2** | **String** | Address line 2 (e.g., apartment, suite, unit, or building). | [optional] |
| **city** | **String** | City, district, suburb, town, or village. |  |
| **state** | **String** | State, county, province, or region. |  |
| **postal_code** | **String** | ZIP or postal code. |  |
| **country** | **String** | Two-letter country code (ISO 3166-1 alpha-2). |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Check.new(
  type: null,
  line1: 360 9th St.,
  line2: null,
  city: San Francisco,
  state: CA,
  postal_code: 94103,
  country: US
)
```

