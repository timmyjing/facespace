class Api::CommentsController < ApplicationController
  before_action :require_login

  def create
    @comment = current_user.comments.new(comment_params)
    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 403
    end
  end

  def destroy
    # check if current user made comment
    # WILL ADD A CHECK TO DELETE COMMENT IF MADE ON A POST MADE BY CURRENT USER?
    @comment = Comment.includes(:post, :commenter).find(params[:id])
    if @comment && (@comment.commenter == current_user || @comment.post.author == current_user || @comment.post.receiver == current_user)
      @comment.destroy
      render 'api/comments/show'
    else
      render json: ['Not allowed'], status: 403
    end
  end

  def update
    @comment = Comment.includes(:post, :commenter).find(params[:id])
    if @comment && (@comment.commenter == current_user)
      if @comment.update(comment_params)
        render 'api/comments/show'
      else
        render json: @comment.errors.full_messages, status: 403
      end
    else
      render json: ['Not authorized'], status: 403
    end
  end


  private
  def comment_params
    params.require(:comment).permit(:post_id, :content, :parent_comment_id)
  end
end
