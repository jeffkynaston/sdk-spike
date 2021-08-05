# OpenapiClient::Payer

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **business_name** | **String** |  | [optional] |
| **contact** | [**Contact**](.md) |  | [optional] |
| **business_address** | [**Address**](Address.md) |  | [optional] |
| **created_at** | **Time** |  | [optional] |
| **status** | [**Status**](Status.md) |  | [optional] |
| **identity_documents** | [**Array&lt;IdentityDocumentResponse&gt;**](IdentityDocumentResponse.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Payer.new(
  id: 8f51c396-6e29-49a6-ba5a-1a31d5420158,
  business_name: Philz Coffee,
  contact: null,
  business_address: null,
  created_at: null,
  status: null,
  identity_documents: null
)
```

