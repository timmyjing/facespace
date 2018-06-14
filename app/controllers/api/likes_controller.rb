class Api::LikesController < ApplicationController
  before_action :require_login

  def create
    @like = current_user.likes.new(like_params)
    if @like.save
      render 'api/likes/show'
    else
      render json: @like.errors.full_messages, status: 404
    end
  end


  def destroy
    @like = current_user.likes.find(params[:id])
    if @like.destroy
      render 'api/likes/show'
    else
      render json: ['Not permitted.'], status: 404
    end
  end

  private

  def like_params
    params.require(:like).permit(:liked_id, :liked_type);
  end
end
