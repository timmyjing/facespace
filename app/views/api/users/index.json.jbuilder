# json.users @users, partial: 'api/users/user', as: :user

json.byId do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :profile_img_url, :first_name, :last_name
    end
  end
end

json.allId do
  json.array! @users.pluck(:id)
end
