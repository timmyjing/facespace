class Api::PostsController < ApplicationController
  before_action :require_login

  def index
    # work on a better way to do this through associations
    # how would i get older posts? hmm
    # @posts = Post.all.includes(:author, :receiver).last(15)
    network = current_user.network
    @posts =  Post.with_attached_image.where({author_id: network}).or(Post.with_attached_image.where({receiver_id: network}))
      .includes(:author, :receiver, :commenters, :comments, :likes).distinct.last(25)
    render 'api/posts/index'
  end

  def create
    @post = current_user.authored_posts.new(post_params)
    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  def show
  end

  def update
    @post = Post.find(params[:id])
    if (@post.author_id == current_user.id) && @post.update(post_params)
      render 'api/posts/show'
    else
      render json: ['Not authorized'], status: 404
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post && @post.author_id === current_user.id || @post.receiver_id == current_user.id
      @post.destroy
      render 'api/posts/show'
    else
      render json: ['Not authorized.'], status: 404
    end
  end

  private
  def post_params
    params.permit(:author_id, :receiver_id, :content, :image)
  end
end