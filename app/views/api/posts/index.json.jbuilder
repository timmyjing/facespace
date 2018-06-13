json.posts do

  json.byId do
    @posts.each do |post|
      json.set! post.id do
        json.extract! post, :id, :receiver_id, :author_id, :content, :created_at
        json.comment_id do
          json.array! post.comments.pluck(:id).sort #comments sorted by id from oldest to newest
        end
      end
    end
  end

  json.allId do
    json.array! @posts.pluck(:id).sort.reverse #sort posts by most recent #NOW I FORGOT TO SORT LOL
  end

end

json.comments do
  json.byId do
    @posts.each do |post|
      post.comments.each do |comment|
        json.set! comment.id do
          json.extract! comment, :id, :parent_comment_id, :post_id, :author_id, :content
        end
      end
    end
  end

  json.allId do
    json.array! @posts.map{|post| post.comments}.flatten.pluck(:id)
  end
  # no need for allId for comments yet? maybe for nested

end

json.users do

  json.byId do
    @posts.each do |post|
      json.set! post.author.id do
        json.partial! 'api/users/user', user: post.author
      end
      json.set! post.receiver.id do
        json.partial! 'api/users/user', user: post.receiver
      end

      post.commenters.each do |commenter|
        json.set! commenter.id do
          json.partial! 'api/users/user', user: commenter
        end
      end
    end
  end
  
end
