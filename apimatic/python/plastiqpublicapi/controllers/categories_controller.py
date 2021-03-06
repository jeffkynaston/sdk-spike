# -*- coding: utf-8 -*-

"""
plastiqpublicapi

This file was automatically generated by APIMATIC v3.0 (
 https://www.apimatic.io ).
"""

from plastiqpublicapi.api_helper import APIHelper
from plastiqpublicapi.configuration import Server
from plastiqpublicapi.controllers.base_controller import BaseController
from plastiqpublicapi.http.auth.o_auth_2 import OAuth2
from plastiqpublicapi.models.categories_response import CategoriesResponse
from plastiqpublicapi.exceptions.error_exception import ErrorException


class CategoriesController(BaseController):

    """A Controller to access Endpoints in the plastiqpublicapi API."""

    def __init__(self, config, call_back=None):
        super(CategoriesController, self).__init__(config, call_back)

    def retrieve_a_paginated_list_of_categories_by_query_parameter_s(self):
        """Does a GET request to /categories.

        Retrieve a paginated list of Categories by query parameter(s)

        Returns:
            CategoriesResponse: Response from the API. A list of Categories

        Raises:
            APIException: When an error occurs while fetching the data from
                the remote API. This exception includes the HTTP Response
                code, an error message, and the HTTP body that was received in
                the request.

        """

        # Prepare query URL
        _url_path = '/categories'
        _query_builder = self.config.get_base_uri()
        _query_builder += _url_path
        _query_url = APIHelper.clean_url(_query_builder)

        # Prepare headers
        _headers = {
            'accept': 'application/json'
        }

        # Prepare and execute request
        _request = self.config.http_client.get(_query_url, headers=_headers)
        OAuth2.apply(self.config, _request)
        _response = self.execute_request(_request)

        # Endpoint and global error handling using HTTP status codes.
        if _response.status_code == 400:
            raise ErrorException('Bad Request', _response)
        elif _response.status_code == 401:
            raise ErrorException('Unauthorized', _response)
        elif _response.status_code == 403:
            raise ErrorException('Forbidden', _response)
        elif _response.status_code == 404:
            raise ErrorException('Not found', _response)
        elif _response.status_code == 500:
            raise ErrorException('Internal Server Error', _response)
        self.validate_response(_response)

        decoded = APIHelper.json_deserialize(_response.text, CategoriesResponse.from_dictionary)

        return decoded
