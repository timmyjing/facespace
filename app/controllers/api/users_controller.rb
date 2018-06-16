class Api::UsersController < ApplicationController
  before_action :require_login, except: [:create]

  def index
    @users = User.all
    render 'api/users/index'
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/create'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    # @user = User.find(params[:id])
    @user = User.includes(:friends, :received_posts, :received_posts_likes, :received_posts_comments).find(params[:id])
    if @user
      # loading friends this way might not be the most efficient for larger scales
      # @friends = @user.friends
      render 'api/users/show'
    else
      render json: ['User not found.'], status: 404
    end
  end

  def search
    @users = User.none
    if params[:query].present?
      full_name = params[:query].split
      if full_name.length == 2
        @users = User.where('first_name ~ ? AND last_name ~ ?', full_name[0], full_name[1])
      else
        @users = User.where('first_name ~ ?', full_name[0])
      end
    # else
    #   @users = User.none
    end
    render 'api/users/index'
  end



  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :birth_date, :gender)
  end
end
