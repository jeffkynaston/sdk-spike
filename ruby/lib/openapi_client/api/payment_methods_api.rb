=begin
#Plastiq Public API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 5.2.0

=end

require 'cgi'

module OpenapiClient
  class PaymentMethodsApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Retrieve a paginated list of Payment Methods by query parameter(s)
    # @param payer_id [String] The associated Payer ID to list Payment Methods for
    # @param [Hash] opts the optional parameters
    # @option opts [Integer] :offset The number of records you wish to skip before selecting records
    # @option opts [Integer] :limit Number of items to return
    # @return [InlineResponse2003]
    def payment_methods_get(payer_id, opts = {})
      data, _status_code, _headers = payment_methods_get_with_http_info(payer_id, opts)
      data
    end

    # Retrieve a paginated list of Payment Methods by query parameter(s)
    # @param payer_id [String] The associated Payer ID to list Payment Methods for
    # @param [Hash] opts the optional parameters
    # @option opts [Integer] :offset The number of records you wish to skip before selecting records
    # @option opts [Integer] :limit Number of items to return
    # @return [Array<(InlineResponse2003, Integer, Hash)>] InlineResponse2003 data, response status code and response headers
    def payment_methods_get_with_http_info(payer_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: PaymentMethodsApi.payment_methods_get ...'
      end
      # verify the required parameter 'payer_id' is set
      if @api_client.config.client_side_validation && payer_id.nil?
        fail ArgumentError, "Missing the required parameter 'payer_id' when calling PaymentMethodsApi.payment_methods_get"
      end
      # resource path
      local_var_path = '/payment-methods'

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'payerId'] = payer_id
      query_params[:'offset'] = opts[:'offset'] if !opts[:'offset'].nil?
      query_params[:'limit'] = opts[:'limit'] if !opts[:'limit'].nil?

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'InlineResponse2003'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['BearerAuth']

      new_options = opts.merge(
        :operation => :"PaymentMethodsApi.payment_methods_get",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: PaymentMethodsApi#payment_methods_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Delete a Payment Method
    # @param id [String] The ID of the Payment Method
    # @param [Hash] opts the optional parameters
    # @return [nil]
    def payment_methods_id_delete(id, opts = {})
      payment_methods_id_delete_with_http_info(id, opts)
      nil
    end

    # Delete a Payment Method
    # @param id [String] The ID of the Payment Method
    # @param [Hash] opts the optional parameters
    # @return [Array<(nil, Integer, Hash)>] nil, response status code and response headers
    def payment_methods_id_delete_with_http_info(id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: PaymentMethodsApi.payment_methods_id_delete ...'
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling PaymentMethodsApi.payment_methods_id_delete"
      end
      # resource path
      local_var_path = '/payment-methods/{id}'.sub('{' + 'id' + '}', CGI.escape(id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type]

      # auth_names
      auth_names = opts[:debug_auth_names] || ['BearerAuth']

      new_options = opts.merge(
        :operation => :"PaymentMethodsApi.payment_methods_id_delete",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:DELETE, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: PaymentMethodsApi#payment_methods_id_delete\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Retrieve a Payment Method
    # @param payer_id [String] The Payer ID associated to the Payment Method
    # @param id [String] The ID of the Payment Method
    # @param [Hash] opts the optional parameters
    # @return [PaymentMethod]
    def payment_methods_id_get(payer_id, id, opts = {})
      data, _status_code, _headers = payment_methods_id_get_with_http_info(payer_id, id, opts)
      data
    end

    # Retrieve a Payment Method
    # @param payer_id [String] The Payer ID associated to the Payment Method
    # @param id [String] The ID of the Payment Method
    # @param [Hash] opts the optional parameters
    # @return [Array<(PaymentMethod, Integer, Hash)>] PaymentMethod data, response status code and response headers
    def payment_methods_id_get_with_http_info(payer_id, id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: PaymentMethodsApi.payment_methods_id_get ...'
      end
      # verify the required parameter 'payer_id' is set
      if @api_client.config.client_side_validation && payer_id.nil?
        fail ArgumentError, "Missing the required parameter 'payer_id' when calling PaymentMethodsApi.payment_methods_id_get"
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling PaymentMethodsApi.payment_methods_id_get"
      end
      # resource path
      local_var_path = '/payment-methods/{id}'.sub('{' + 'id' + '}', CGI.escape(id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'payerId'] = payer_id

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'PaymentMethod'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['BearerAuth']

      new_options = opts.merge(
        :operation => :"PaymentMethodsApi.payment_methods_id_get",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: PaymentMethodsApi#payment_methods_id_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Update a Payment Method
    # @param id [String] The ID of the Payment Method
    # @param patch_payment_method_request [PatchPaymentMethodRequest] Payment Method to update
    # @param [Hash] opts the optional parameters
    # @option opts [String] :trace_id A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
    # @option opts [String] :user_agent A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser.
    # @option opts [String] :end_user_device_id A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser.
    # @option opts [String] :end_user_ip The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser.
    # @return [PaymentMethod]
    def payment_methods_id_patch(id, patch_payment_method_request, opts = {})
      data, _status_code, _headers = payment_methods_id_patch_with_http_info(id, patch_payment_method_request, opts)
      data
    end

    # Update a Payment Method
    # @param id [String] The ID of the Payment Method
    # @param patch_payment_method_request [PatchPaymentMethodRequest] Payment Method to update
    # @param [Hash] opts the optional parameters
    # @option opts [String] :trace_id A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
    # @option opts [String] :user_agent A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser.
    # @option opts [String] :end_user_device_id A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser.
    # @option opts [String] :end_user_ip The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser.
    # @return [Array<(PaymentMethod, Integer, Hash)>] PaymentMethod data, response status code and response headers
    def payment_methods_id_patch_with_http_info(id, patch_payment_method_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: PaymentMethodsApi.payment_methods_id_patch ...'
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling PaymentMethodsApi.payment_methods_id_patch"
      end
      # verify the required parameter 'patch_payment_method_request' is set
      if @api_client.config.client_side_validation && patch_payment_method_request.nil?
        fail ArgumentError, "Missing the required parameter 'patch_payment_method_request' when calling PaymentMethodsApi.payment_methods_id_patch"
      end
      # resource path
      local_var_path = '/payment-methods/{id}'.sub('{' + 'id' + '}', CGI.escape(id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])
      header_params[:'Trace-Id'] = opts[:'trace_id'] if !opts[:'trace_id'].nil?
      header_params[:'User-Agent'] = opts[:'user_agent'] if !opts[:'user_agent'].nil?
      header_params[:'End-User-Device-Id'] = opts[:'end_user_device_id'] if !opts[:'end_user_device_id'].nil?
      header_params[:'End-User-Ip'] = opts[:'end_user_ip'] if !opts[:'end_user_ip'].nil?

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body] || @api_client.object_to_http_body(patch_payment_method_request)

      # return_type
      return_type = opts[:debug_return_type] || 'PaymentMethod'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['BearerAuth']

      new_options = opts.merge(
        :operation => :"PaymentMethodsApi.payment_methods_id_patch",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:PATCH, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: PaymentMethodsApi#payment_methods_id_patch\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Create a Payment Method
    # @param create_payment_method_request [CreatePaymentMethodRequest] Payment Method to create
    # @param [Hash] opts the optional parameters
    # @option opts [String] :trace_id A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
    # @option opts [String] :user_agent A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser.
    # @option opts [String] :end_user_device_id A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser.
    # @option opts [String] :end_user_ip The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser.
    # @return [PaymentMethod]
    def payment_methods_post(create_payment_method_request, opts = {})
      data, _status_code, _headers = payment_methods_post_with_http_info(create_payment_method_request, opts)
      data
    end

    # Create a Payment Method
    # @param create_payment_method_request [CreatePaymentMethodRequest] Payment Method to create
    # @param [Hash] opts the optional parameters
    # @option opts [String] :trace_id A valid UUID (V4) for tracing requests. Will be returned as a header. If not present or invalid, a generated UUID will be returned.
    # @option opts [String] :user_agent A string representing the User Agent. Required only when the request is not coming from the end user&#39;s browser.
    # @option opts [String] :end_user_device_id A unique identifier for the end user&#39;s browser. Recommended for compliance when the request is not coming from the end user&#39;s browser.
    # @option opts [String] :end_user_ip The IP address of the end user. Recommended for compliance when the request is not coming from the end user&#39;s browser.
    # @return [Array<(PaymentMethod, Integer, Hash)>] PaymentMethod data, response status code and response headers
    def payment_methods_post_with_http_info(create_payment_method_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: PaymentMethodsApi.payment_methods_post ...'
      end
      # verify the required parameter 'create_payment_method_request' is set
      if @api_client.config.client_side_validation && create_payment_method_request.nil?
        fail ArgumentError, "Missing the required parameter 'create_payment_method_request' when calling PaymentMethodsApi.payment_methods_post"
      end
      # resource path
      local_var_path = '/payment-methods'

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])
      header_params[:'Trace-Id'] = opts[:'trace_id'] if !opts[:'trace_id'].nil?
      header_params[:'User-Agent'] = opts[:'user_agent'] if !opts[:'user_agent'].nil?
      header_params[:'End-User-Device-Id'] = opts[:'end_user_device_id'] if !opts[:'end_user_device_id'].nil?
      header_params[:'End-User-Ip'] = opts[:'end_user_ip'] if !opts[:'end_user_ip'].nil?

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body] || @api_client.object_to_http_body(create_payment_method_request)

      # return_type
      return_type = opts[:debug_return_type] || 'PaymentMethod'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['BearerAuth']

      new_options = opts.merge(
        :operation => :"PaymentMethodsApi.payment_methods_post",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: PaymentMethodsApi#payment_methods_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
