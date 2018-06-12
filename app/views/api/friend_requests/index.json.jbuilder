json.requests do
  json.byId do
    (@requests + @outgoing).each do |request|
      json.set! request.id do
        json.extract! request, :requester_id, :id, :requestee_id
      end
    end
    # @outgoing.each do |outgoing|
    #   json.set! outgoing.id do
    #     json.extract! outgoing, :id, :requestee_id
    #   end
    # end
  end


  json.outgoingId do
    json.array! @outgoing.pluck(:id)
  end

  json.incomingId do
    json.array! @requests.pluck(:id)
  end

  json.outgoingUserId do
    json.array! @outgoing.pluck(:requestee_id)
  end

  json.incomingUserId do
    json.array! @requests.pluck(:requester_id)
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
