# PlastiqPublicApi.CreatePaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentIntent** | [**OneOfpaymentIntentIdCreatePaymentIntentRequestPayload**](OneOfpaymentIntentIdCreatePaymentIntentRequestPayload.md) |  | [optional] 
**payer** | [**OneOfpayerId**](OneOfpayerId.md) |  | 
**targetAmount** | [**OneOfamountDetails**](OneOfamountDetails.md) |  | [optional] 
**paymentMethod** | [**OneOfpaymentMethodId**](OneOfpaymentMethodId.md) |  | 
**recipient** | [**OneOfrecipientIdCreateRecipientRequest**](OneOfrecipientIdCreateRecipientRequest.md) |  | 
**details** | [**PaymentDetails**](PaymentDetails.md) |  | [optional] 
**metadata** | **Object** | additional payment information to support operational requirements | [optional] 


