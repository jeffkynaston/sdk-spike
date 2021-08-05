# -*- coding: utf-8 -*-

"""
plastiqpublicapi

This file was automatically generated by APIMATIC v3.0 (
 https://www.apimatic.io ).
"""


class StatusReason(object):

    """Implementation of the 'StatusReason' model.

    Used to provide more context in reference to the status response

    Attributes:
        code (string): TODO: type description here.
        message (string): TODO: type description here.

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "code": 'code',
        "message": 'message'
    }

    def __init__(self,
                 code=None,
                 message=None):
        """Constructor for the StatusReason class"""

        # Initialize members of the class
        self.code = code
        self.message = message

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
        code = dictionary.get('code')
        message = dictionary.get('message')

        # Return an object of this model
        return cls(code,
                   message)
