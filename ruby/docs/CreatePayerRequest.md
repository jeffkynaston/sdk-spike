# OpenapiClient::CreatePayerRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **business_name** | **String** |  | [optional] |
| **contact** | [**Contact**](.md) |  |  |
| **business_address** | [**Address**](Address.md) |  | [optional] |
| **identity_documents** | [**Array&lt;IdentityDocuments&gt;**](IdentityDocuments.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::CreatePayerRequest.new(
  business_name: Philz Coffee,
  contact: null,
  business_address: null,
  identity_documents: null
)
```

