# -*- coding: utf-8 -*-

"""
plastiqpublicapi

This file was automatically generated by APIMATIC v3.0 (
 https://www.apimatic.io ).
"""


class Contact1(object):

    """Implementation of the 'Contact1' model.

    TODO: type model description here.

    Attributes:
        first_name (string): TODO: type description here.
        last_name (string): TODO: type description here.
        email (string): TODO: type description here.
        phone (string): TODO: type description here.

    """

    # Create a mapping from Model property names to API property names
    _names = {
        "first_name": 'firstName',
        "last_name": 'lastName',
        "email": 'email',
        "phone": 'phone'
    }

    def __init__(self,
                 first_name=None,
                 last_name=None,
                 email=None,
                 phone=None):
        """Constructor for the Contact1 class"""

        # Initialize members of the class
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.phone = phone

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
        first_name = dictionary.get('firstName')
        last_name = dictionary.get('lastName')
        email = dictionary.get('email')
        phone = dictionary.get('phone')

        # Return an object of this model
        return cls(first_name,
                   last_name,
                   email,
                   phone)
