json.requests do
  json.byId do
    @requests.each do |request|
      json.set! request.id do
        json.extract! request, :requester_id, :id
      end
    end
  end


  json.allId do
    json.array! @requests.pluck(:id)
  end
end


json.users do
  json.byId do
    @users.each do |user|
      json.set! user.id do
        json.extract! user, :id, :first_name, :last_name, :profile_img_url
      end
    end
  end
end
