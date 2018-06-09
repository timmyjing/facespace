class Api::FriendRequestsController < ApplicationController

  def index
    @requests = current_user.friend_requests
    @users = @requests.map {|request| request.requester}
    render 'api/friend_requests/index'
  end

  def create
    params = request_params
    @request = FriendRequest.new(request_params)
    @request.requester_id = current_user.id
    if @request.save
      render 'api/friend_requests/show'
    else
      render json: ['ERROR'], status: 401
    end
  end

  def update
    @request = FriendRequest.find(params[:id])
    # ADD CREATE FRIENDSHIP THEN SHOW FRIENDSHIPS
    # if @request.update(params[:id])
    if @request
      @request.destroy
      render 'api/friend_requests/show'
    else
      render json: ['ERROR'], status: 401
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
