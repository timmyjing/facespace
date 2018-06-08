class Api::FriendRequestsController < ApplicationController

  def create
    params = request_params
    @request = FriendRequest.new(request_params)
    @request.requester_id = current_user.id
    if @request.save
      render json: ['NICE!']
    else
      render json: ['ERROR'], status: 401
    end
  end

  def update
    @request = FriendRequest.find(params[:id])
    if @request.update(request_params)
      render json: ['NICE!']
    else
      render json: ['ERROR'], status: 401
    end
  end

  def destroy
    request = Friendship.find(params[:id])
    request.destroy
  end

  private
  def request_params
    params.require(:request).permit(:requester_id, :requestee_id, :status)
  end
end
