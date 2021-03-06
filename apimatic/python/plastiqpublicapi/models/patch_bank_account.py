# -*- coding: utf-8 -*-

"""
plastiqpublicapi

This file was automatically generated by APIMATIC v3.0 (
 https://www.apimatic.io ).
"""


class PatchBankAccount(object):

    """Implementation of the 'PatchBankAccount' model.

    Bank Account Funded

    Attributes:
        account_holder_name (string): The legal name of the account holder
        routing_number (string): The routing number of the bank account

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "account_holder_name": 'accountHolderName',
        "routing_number": 'routingNumber'
    }

    def __init__(self,
                 account_holder_name=None,
                 routing_number=None):
        """Constructor for the PatchBankAccount class"""

        # Initialize members of the class
        self.account_holder_name = account_holder_name
        self.routing_number = routing_number

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
        account_holder_name = dictionary.get('accountHolderName')
        routing_number = dictionary.get('routingNumber')

        # Return an object of this model
        return cls(account_holder_name,
                   routing_number)
