# json.extract! @user, :id, :profile_img_url, :first_name, :last_name, :location, :cover_img_url, :bio, :gender, :birth_date

json.byId do
  @friends.each do |friend|
    json.set! friend.id do
      # json.extract! friend, :id, :profile_img_url, :first_name, :last_name
      json.partial! 'api/users/user', user: friend
    end
  end
  json.set! @user.id do
    json.extract! @user, :id, :profile_img_url, :first_name, :last_name, :location, :cover_img_url, :bio, :gender, :birth_date
    json.friends_id do
      json.array! @friends.pluck(:id)
    end
  end
end
