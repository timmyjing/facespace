json.extract! user, :id, :first_name, :last_name
json.profile_img_url user.profile_image.attached? ? rails_blob_path(user.profile_image, disposition: "attachment") : user.profile_img_url

# :profile_img_url
