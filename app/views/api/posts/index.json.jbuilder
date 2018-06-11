json.posts do

  json.byId do
    @posts.each do |post|
      json.set! post.id do
        json.extract! post, :id, :receiver_id, :author_id, :content, :created_at
      end
    end
  end

  json.allId do
    json.array! @posts.pluck(:id).sort.reverse #sort posts by most recent #NOW I FORGOT TO SORT LOL
  end

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
    end
  end

end
