# PlastiqPublicApi.PaymentIntent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**fees** | [**[PaymentIntentFees]**](PaymentIntentFees.md) |  | [optional] 
**sourceAmount** | [**AmountDetails**](AmountDetails.md) |  | [optional] 
**targetAmount** | [**AmountDetails**](AmountDetails.md) |  | [optional] 
**paymentMethod** | [**PaymentMethodId**](PaymentMethodId.md) |  | [optional] 
**recipient** | [**RecipientId**](RecipientId.md) |  | [optional] 
**payer** | [**PayerId**](PayerId.md) |  | [optional] 
**details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**status** | **String** |  | [optional] 
**statusReasons** | **[Object]** |  | [optional] 
**deliveryDate** | **Date** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**expiresAt** | **Date** |  | [optional] 



## Enum: StatusEnum


* `CAPTURABLE` (value: `"CAPTURABLE"`)

* `CAPTURED` (value: `"CAPTURED"`)

* `EXPIRED` (value: `"EXPIRED"`)

* `UNCAPTURABLE` (value: `"UNCAPTURABLE"`)




