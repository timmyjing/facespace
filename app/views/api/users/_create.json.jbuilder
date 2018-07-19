json.extract! user, :id, :first_name, :last_name, :location, :bio, :gender, :birth_date
json.profile_img_url user.profile_image.attached? ? rails_blob_path(user.profile_image, disposition: "attachment") : user.profile_img_url
json.cover_img_url user.cover_image.attached? ? rails_blob_path(user.cover_image, disposition: "attachment") : user.cover_img_url



json.friends_id do
  json.array! user.friends.pluck(:id)
end

json.post_id do
  json.array! []
end
