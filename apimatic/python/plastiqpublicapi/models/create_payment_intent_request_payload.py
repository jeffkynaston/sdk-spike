# -*- coding: utf-8 -*-

"""
plastiqpublicapi

This file was automatically generated by APIMATIC v3.0 (
 https://www.apimatic.io ).
"""
from plastiqpublicapi.models.amount_details import AmountDetails
from plastiqpublicapi.models.payer_id import PayerId
from plastiqpublicapi.models.payment_details import PaymentDetails
from plastiqpublicapi.models.payment_method_id import PaymentMethodId


class CreatePaymentIntentRequestPayload(object):

    """Implementation of the 'CreatePaymentIntentRequestPayload' model.

    TODO: type model description here.

    Attributes:
        target_amount (AmountDetails): TODO: type description here.
        payment_method (PaymentMethodId): TODO: type description here.
        recipient (object): TODO: type description here.
        payer (PayerId): TODO: type description here.
        details (PaymentDetails): TODO: type description here.
        metadata (object): additional payment information to support
            operational requirements

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "payment_method": 'paymentMethod',
        "recipient": 'recipient',
        "payer": 'payer',
        "target_amount": 'targetAmount',
        "details": 'details',
        "metadata": 'metadata'
    }

    def __init__(self,
                 payment_method=None,
                 recipient=None,
                 payer=None,
                 target_amount=None,
                 details=None,
                 metadata=None):
        """Constructor for the CreatePaymentIntentRequestPayload class"""

        # Initialize members of the class
        self.target_amount = target_amount
        self.payment_method = payment_method
        self.recipient = recipient
        self.payer = payer
        self.details = details
        self.metadata = metadata

    @classmethod
    def from_dictionary(cls,
                        dictionary):
        """Creates an instance of this model from a dictionary

        Args:
            dictionary (dictionary): A dictionary representation of the object
            as obtained from the deserialization of the server's response. The
            keys MUST match property names in the API description.

        Returns:
            object: An instance of this structure class.

        """
        if dictionary is None:
            return None

        # Extract variables from the dictionary
        payment_method = PaymentMethodId.from_dictionary(dictionary.get('paymentMethod')) if dictionary.get('paymentMethod') else None
        recipient = dictionary.get('recipient')
        payer = PayerId.from_dictionary(dictionary.get('payer')) if dictionary.get('payer') else None
        target_amount = AmountDetails.from_dictionary(dictionary.get('targetAmount')) if dictionary.get('targetAmount') else None
        details = PaymentDetails.from_dictionary(dictionary.get('details')) if dictionary.get('details') else None
        metadata = dictionary.get('metadata')

        # Return an object of this model
        return cls(payment_method,
                   recipient,
                   payer,
                   target_amount,
                   details,
                   metadata)