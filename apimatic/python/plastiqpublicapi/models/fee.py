# -*- coding: utf-8 -*-

"""
plastiqpublicapi

This file was automatically generated by APIMATIC v3.0 (
 https://www.apimatic.io ).
"""
from plastiqpublicapi.models.amount import Amount


class Fee(object):

    """Implementation of the 'Fee' model.

    TODO: type model description here.

    Attributes:
        amount (Amount): TODO: type description here.
        mtype (TypeEnum): The type of fee applied to the payment
        rate (string): The rate of the fee assessed, presented in percentage.

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "amount": 'amount',
        "mtype": 'type',
        "rate": 'rate'
    }

    def __init__(self,
                 amount=None,
                 mtype=None,
                 rate=None):
        """Constructor for the Fee class"""

        # Initialize members of the class
        self.amount = amount
        self.mtype = mtype
        self.rate = rate

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
        amount = Amount.from_dictionary(dictionary.get('amount')) if dictionary.get('amount') else None
        mtype = dictionary.get('type')
        rate = dictionary.get('rate')

        # Return an object of this model
        return cls(amount,
                   mtype,
                   rate)
