json.extract! @post, :id, :author_id, :created_at, :receiver_id, :content
json.comment_id do
  json.array! @post.comments.pluck(:id)
end
