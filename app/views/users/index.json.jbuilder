json.array!(@users) do |user|
  json.extract! user, :id, :name, :name, :email, :location, :user_likes
  json.url user_url(user, format: :json)
end
