class Api::FriendRequestsController < ApplicationController
  before_action :require_login
  
  def index
    @requests = current_user.friend_requests.includes(:requester)
    incoming_users = @requests.map {|request| request.requester}
    @outgoing = current_user.friends_requested.includes(:requestee)
    outgoing_users = @outgoing.map {|request| request.requestee}
    @users = incoming_users + outgoing_users
    render 'api/friend_requests/index'
  end

  def create
    unless current_user.is_friends?(request_params[:requestee_id])
      @request = FriendRequest.new(request_params)
      @request.requester_id = current_user.id
      if @request.save
        render 'api/friend_requests/show'
      else
        render json: ['Cannot create friend request.'], status: 401
      end
    else
      render json: ['Already friends.'], status: 404
    end
  end

  def update
    @request = current_user.friend_requests.find(params[:id])
    if @request
      requester = @request.requester_id
      user = current_user.id
      friendship = Friendship.create(user_id: user, friend_id: requester)
      inverse_friendship = Friendship.create(user_id: requester, friend_id: user)
      @request.destroy
      render 'api/friend_requests/show'
    else
      render json: ['Cannot find friend request.'], status: 404
    end
  end

  def destroy
    @request = FriendRequest.find(params[:id])
    @request.destroy
    render 'api/friend_requests/show'
  end

  private
  def request_params
    params.require(:request).permit(:requester_id, :requestee_id, :status, :id)
  end
end
