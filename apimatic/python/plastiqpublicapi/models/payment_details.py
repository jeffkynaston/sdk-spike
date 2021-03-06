# -*- coding: utf-8 -*-

"""
plastiqpublicapi

This file was automatically generated by APIMATIC v3.0 (
 https://www.apimatic.io ).
"""


class PaymentDetails(object):

    """Implementation of the 'PaymentDetails' model.

    TODO: type model description here.

    Attributes:
        account_name (string): TBD
        account_number (string): TBD
        memo (string): TBD

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "account_name": 'accountName',
        "account_number": 'accountNumber',
        "memo": 'memo'
    }

    def __init__(self,
                 account_name=None,
                 account_number=None,
                 memo=None):
        """Constructor for the PaymentDetails class"""

        # Initialize members of the class
        self.account_name = account_name
        self.account_number = account_number
        self.memo = memo

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
        account_name = dictionary.get('accountName')
        account_number = dictionary.get('accountNumber')
        memo = dictionary.get('memo')

        # Return an object of this model
        return cls(account_name,
                   account_number,
                   memo)
