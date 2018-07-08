json.extract! @post, :id, :author_id, :receiver_id, :content, :image
json.image @post.image.attached? ? rails_blob_path(@post.image, disposition: "attachment") : false
json.created_at @post.created_at.strftime('%a %b %d %Y')
json.comment_id do
  json.array! @post.comments.pluck(:id) || []
end
json.like_id do
  json.array! @post.likes.pluck(:id) || []
end
json.liked @post.likes.find_by(user_id: current_user.id)
