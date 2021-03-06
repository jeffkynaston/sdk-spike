=begin
#Plastiq Public API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 5.2.0

=end

require 'spec_helper'
require 'json'

# Unit tests for OpenapiClient::CategoriesApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'CategoriesApi' do
  before do
    # run before each test
    @api_instance = OpenapiClient::CategoriesApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of CategoriesApi' do
    it 'should create an instance of CategoriesApi' do
      expect(@api_instance).to be_instance_of(OpenapiClient::CategoriesApi)
    end
  end

  # unit tests for categories_get
  # Retrieve a paginated list of Categories by query parameter(s)
  # @param [Hash] opts the optional parameters
  # @return [InlineResponse200]
  describe 'categories_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
