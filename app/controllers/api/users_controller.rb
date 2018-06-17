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
    @user = User.includes(:friends, :received_posts, :received_posts_likes, :received_posts_comments, :friendships).find(params[:id])
    if @user
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
    end
    render 'api/users/index'
  end

  def update
    @user = current_user
    if @user.update(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 404
    end
  end


  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :birth_date, :gender, :profile_img_url, :cover_img_url)
  end
end
