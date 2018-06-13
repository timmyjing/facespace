# json.extract! @user, :id, :profile_img_url, :first_name, :last_name, :location, :cover_img_url, :bio, :gender, :birth_date
json.users do
  json.byId do
    @user.friends.each do |friend|
      json.set! friend.id do
        # json.extract! friend, :id, :profile_img_url, :first_name, :last_name
        json.partial! 'api/users/user', user: friend
      end
    end
    json.set! @user.id do
      json.extract! @user, :id, :profile_img_url, :first_name, :last_name, :location, :cover_img_url, :bio, :gender, :birth_date
      json.friends_id do
        json.array! @user.friends.pluck(:id)
      end
      json.post_id do
        json.array! @user.received_posts.pluck(:id).sort.reverse
      end
    end
  end
end

json.posts do
  json.byId do
    @user.received_posts.each do |post|
      json.set! post.id do
        json.extract! post, :id, :content, :author_id, :receiver_id, :created_at
        json.comment_id do
          json.array! post.comments.pluck(:id)
        end
      end
    end
  end
  json.allId do
    json.array! @user.received_posts.pluck(:id).sort.reverse #reverse ID here so posts are sorted by most recent
  end
end
