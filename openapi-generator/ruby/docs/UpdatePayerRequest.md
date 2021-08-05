# OpenapiClient::UpdatePayerRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **business_name** | **String** |  | [optional] |
| **contact** | [**Contact**](.md) |  | [optional] |
| **business_address** | [**Address**](Address.md) |  | [optional] |
| **identity_documents** | [**Array&lt;IdentityDocuments&gt;**](IdentityDocuments.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::UpdatePayerRequest.new(
  business_name: Philz Coffee,
  contact: null,
  business_address: null,
  identity_documents: null
)
```

