=begin
#Plastiq Public API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 5.2.0

=end

require 'date'
require 'time'

module OpenapiClient
  class ACH
    attr_accessor :type

    # Bank ACH account number
    attr_accessor :account_number

    # 9 digit bank routing number
    attr_accessor :routing_number

    attr_accessor :beneficiary_name

    class EnumAttributeValidator
      attr_reader :datatype
      attr_reader :allowable_values

      def initialize(datatype, allowable_values)
        @allowable_values = allowable_values.map do |value|
          case datatype.to_s
          when /Integer/i
            value.to_i
          when /Float/i
            value.to_f
          else
            value
          end
        end
      end

      def valid?(value)
        !value || allowable_values.include?(value)
      end
    end

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'type' => :'type',
        :'account_number' => :'accountNumber',
        :'routing_number' => :'routingNumber',
        :'beneficiary_name' => :'beneficiaryName'
      }
    end

    # Returns all the JSON keys this model knows about
    def self.acceptable_attributes
      attribute_map.values
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'type' => :'String',
        :'account_number' => :'String',
        :'routing_number' => :'String',
        :'beneficiary_name' => :'String'
      }
    end

    # List of attributes with nullable: true
    def self.openapi_nullable
      Set.new([
      ])
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `OpenapiClient::ACH` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `OpenapiClient::ACH`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'type')
        self.type = attributes[:'type']
      end

      if attributes.key?(:'account_number')
        self.account_number = attributes[:'account_number']
      end

      if attributes.key?(:'routing_number')
        self.routing_number = attributes[:'routing_number']
      end

      if attributes.key?(:'beneficiary_name')
        self.beneficiary_name = attributes[:'beneficiary_name']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @type.nil?
        invalid_properties.push('invalid value for "type", type cannot be nil.')
      end

      if @account_number.nil?
        invalid_properties.push('invalid value for "account_number", account_number cannot be nil.')
      end

      if @routing_number.nil?
        invalid_properties.push('invalid value for "routing_number", routing_number cannot be nil.')
      end

      if @routing_number.to_s.length > 9
        invalid_properties.push('invalid value for "routing_number", the character length must be smaller than or equal to 9.')
      end

      if @routing_number.to_s.length < 9
        invalid_properties.push('invalid value for "routing_number", the character length must be great than or equal to 9.')
      end

      if @beneficiary_name.nil?
        invalid_properties.push('invalid value for "beneficiary_name", beneficiary_name cannot be nil.')
      end

      if @beneficiary_name.to_s.length > 35
        invalid_properties.push('invalid value for "beneficiary_name", the character length must be smaller than or equal to 35.')
      end

      if @beneficiary_name.to_s.length < 1
        invalid_properties.push('invalid value for "beneficiary_name", the character length must be great than or equal to 1.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @type.nil?
      type_validator = EnumAttributeValidator.new('String', ["ACH"])
      return false unless type_validator.valid?(@type)
      return false if @account_number.nil?
      return false if @routing_number.nil?
      return false if @routing_number.to_s.length > 9
      return false if @routing_number.to_s.length < 9
      return false if @beneficiary_name.nil?
      return false if @beneficiary_name.to_s.length > 35
      return false if @beneficiary_name.to_s.length < 1
      true
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] type Object to be assigned
    def type=(type)
      validator = EnumAttributeValidator.new('String', ["ACH"])
      unless validator.valid?(type)
        fail ArgumentError, "invalid value for \"type\", must be one of #{validator.allowable_values}."
      end
      @type = type
    end

    # Custom attribute writer method with validation
    # @param [Object] routing_number Value to be assigned
    def routing_number=(routing_number)
      if routing_number.nil?
        fail ArgumentError, 'routing_number cannot be nil'
      end

      if routing_number.to_s.length > 9
        fail ArgumentError, 'invalid value for "routing_number", the character length must be smaller than or equal to 9.'
      end

      if routing_number.to_s.length < 9
        fail ArgumentError, 'invalid value for "routing_number", the character length must be great than or equal to 9.'
      end

      @routing_number = routing_number
    end

    # Custom attribute writer method with validation
    # @param [Object] beneficiary_name Value to be assigned
    def beneficiary_name=(beneficiary_name)
      if beneficiary_name.nil?
        fail ArgumentError, 'beneficiary_name cannot be nil'
      end

      if beneficiary_name.to_s.length > 35
        fail ArgumentError, 'invalid value for "beneficiary_name", the character length must be smaller than or equal to 35.'
      end

      if beneficiary_name.to_s.length < 1
        fail ArgumentError, 'invalid value for "beneficiary_name", the character length must be great than or equal to 1.'
      end

      @beneficiary_name = beneficiary_name
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          type == o.type &&
          account_number == o.account_number &&
          routing_number == o.routing_number &&
          beneficiary_name == o.beneficiary_name
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [type, account_number, routing_number, beneficiary_name].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def self.build_from_hash(attributes)
      new.build_from_hash(attributes)
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
      self.class.openapi_types.each_pair do |key, type|
        if attributes[self.class.attribute_map[key]].nil? && self.class.openapi_nullable.include?(key)
          self.send("#{key}=", nil)
        elsif type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        end
      end

      self
    end

    # Deserializes the data based on type
    # @param string type Data type
    # @param string value Value to be deserialized
    # @return [Object] Deserialized data
    def _deserialize(type, value)
      case type.to_sym
      when :Time
        Time.parse(value)
      when :Date
        Date.parse(value)
      when :String
        value.to_s
      when :Integer
        value.to_i
      when :Float
        value.to_f
      when :Boolean
        if value.to_s =~ /\A(true|t|yes|y|1)\z/i
          true
        else
          false
        end
      when :Object
        # generic object (usually a Hash), return directly
        value
      when /\AArray<(?<inner_type>.+)>\z/
        inner_type = Regexp.last_match[:inner_type]
        value.map { |v| _deserialize(inner_type, v) }
      when /\AHash<(?<k_type>.+?), (?<v_type>.+)>\z/
        k_type = Regexp.last_match[:k_type]
        v_type = Regexp.last_match[:v_type]
        {}.tap do |hash|
          value.each do |k, v|
            hash[_deserialize(k_type, k)] = _deserialize(v_type, v)
          end
        end
      else # model
        # models (e.g. Pet) or oneOf
        klass = OpenapiClient.const_get(type)
        klass.respond_to?(:openapi_one_of) ? klass.build(value) : klass.build_from_hash(value)
      end
    end

    # Returns the string representation of the object
    # @return [String] String presentation of the object
    def to_s
      to_hash.to_s
    end

    # to_body is an alias to to_hash (backward compatibility)
    # @return [Hash] Returns the object in the form of hash
    def to_body
      to_hash
    end

    # Returns the object in the form of hash
    # @return [Hash] Returns the object in the form of hash
    def to_hash
      hash = {}
      self.class.attribute_map.each_pair do |attr, param|
        value = self.send(attr)
        if value.nil?
          is_nullable = self.class.openapi_nullable.include?(attr)
          next if !is_nullable || (is_nullable && !instance_variable_defined?(:"@#{attr}"))
        end

        hash[param] = _to_hash(value)
      end
      hash
    end

    # Outputs non-array value in the form of hash
    # For object, use to_hash. Otherwise, just return the value
    # @param [Object] value Any valid value
    # @return [Hash] Returns the value in the form of hash
    def _to_hash(value)
      if value.is_a?(Array)
        value.compact.map { |v| _to_hash(v) }
      elsif value.is_a?(Hash)
        {}.tap do |hash|
          value.each { |k, v| hash[k] = _to_hash(v) }
        end
      elsif value.respond_to? :to_hash
        value.to_hash
      else
        value
      end
    end

  end

end
