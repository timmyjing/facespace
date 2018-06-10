class Api::PostsController < ApplicationController

  def index
  end

  def create
    @post = current_user.authored_posts.new(post_params)
    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  def update
  end

  def destroy
  end

  private
  def post_params
    params.require(:post).permit(:author_id, :receiver_id, :content)
  end
end
