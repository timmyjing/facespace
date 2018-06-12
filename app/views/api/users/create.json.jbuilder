json.extract! @user, :id, :profile_img_url, :first_name, :last_name, :location, :cover_img_url, :bio, :gender, :birth_date


json.friends_id do
  json.array! @user.friends.pluck(:id)
end

json.post_id do
  json.array! []
end
