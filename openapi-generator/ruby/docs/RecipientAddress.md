# OpenapiClient::RecipientAddress

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **line1** | **String** | Address line 1 (e.g., street, PO Box, or company name). |  |
| **line2** | **String** | Address line 2 (e.g., apartment, suite, unit, or building). | [optional] |
| **city** | **String** | City, district, suburb, town, or village. | [optional] |
| **state** | **String** | State, county, province, or region. | [optional] |
| **postal_code** | **String** | ZIP or postal code. | [optional] |
| **country** | **String** | Two-letter country code (ISO 3166-1 alpha-2). |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::RecipientAddress.new(
  line1: 19439 Stevens Creek Blvd,
  line2: null,
  city: Cupertino,
  state: CA,
  postal_code: 95014,
  country: US
)
```

