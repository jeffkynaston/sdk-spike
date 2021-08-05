# OpenapiClient::PaginationObject

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **offset** | **Integer** |  | [optional] |
| **limit** | **Integer** |  | [optional] |
| **total** | **Integer** |  | [optional] |
| **has_next_page** | **Boolean** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PaginationObject.new(
  offset: 0,
  limit: 20,
  total: 1,
  has_next_page: false
)
```

