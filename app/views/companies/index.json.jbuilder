json.array!(@companies) do |company|
  json.extract! company, :id, :name, :geography, :hyperlocal, :commission, :category, :delivery
  json.url company_url(company, format: :json)
end
