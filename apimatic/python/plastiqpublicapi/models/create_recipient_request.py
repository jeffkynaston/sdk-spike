# -*- coding: utf-8 -*-

"""
plastiqpublicapi

This file was automatically generated by APIMATIC v3.0 (
 https://www.apimatic.io ).
"""
from plastiqpublicapi.models.contact import Contact
from plastiqpublicapi.models.payer_id import PayerId
from plastiqpublicapi.models.recipient_address import RecipientAddress


class CreateRecipientRequest(object):

    """Implementation of the 'CreateRecipientRequest' model.

    TODO: type model description here.

    Attributes:
        business_name (string): TODO: type description here.
        category_id (uuid|string): TODO: type description here.
        business_address (RecipientAddress): TODO: type description here.
        contact (Contact): TODO: type description here.
        receiving_method (object): TODO: type description here.
        payer (PayerId): TODO: type description here.

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "business_name": 'businessName',
        "category_id": 'categoryId',
        "business_address": 'businessAddress',
        "contact": 'contact',
        "receiving_method": 'receivingMethod',
        "payer": 'payer'
    }

    def __init__(self,
                 business_name=None,
                 category_id=None,
                 business_address=None,
                 contact=None,
                 receiving_method=None,
                 payer=None):
        """Constructor for the CreateRecipientRequest class"""

        # Initialize members of the class
        self.business_name = business_name
        self.category_id = category_id
        self.business_address = business_address
        self.contact = contact
        self.receiving_method = receiving_method
        self.payer = payer

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
        business_name = dictionary.get('businessName')
        category_id = dictionary.get('categoryId')
        business_address = RecipientAddress.from_dictionary(dictionary.get('businessAddress')) if dictionary.get('businessAddress') else None
        contact = Contact.from_dictionary(dictionary.get('contact')) if dictionary.get('contact') else None
        receiving_method = dictionary.get('receivingMethod')
        payer = PayerId.from_dictionary(dictionary.get('payer')) if dictionary.get('payer') else None

        # Return an object of this model
        return cls(business_name,
                   category_id,
                   business_address,
                   contact,
                   receiving_method,
                   payer)