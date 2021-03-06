# -*- coding: utf-8 -*-

"""
plastiqpublicapi

This file was automatically generated by APIMATIC v3.0 (
 https://www.apimatic.io ).
"""

import unittest

from plastiqpublicapi.configuration import Configuration
from plastiqpublicapi.configuration import Environment
from plastiqpublicapi.plastiqpublicapi_client import PlastiqpublicapiClient


class ControllerTestBase(unittest.TestCase):

    """All test classes inherit from this base class. It abstracts out
    common functionality and configuration variables set up."""

    @classmethod
    def setUpClass(cls):
        """Class method called once before running tests in a test class."""
        cls.request_timeout = 30
        cls.assert_precision = 0.01
        cls.config = ControllerTestBase.create_configuration()
        cls.client = PlastiqpublicapiClient()

    @staticmethod
    def create_configuration():
        return Configuration()
