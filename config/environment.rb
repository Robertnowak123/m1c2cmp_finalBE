# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!

require 'carrierwave/orm/activerecord'

APPANNIE_API_KEY = "7aed43f7bccc2223af95187330805a30ef06dae9"