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
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render 'api/users/show'
    else
      render json: ['Nice Try - niartenyaw'], status: 404
    end
  end

  def search
    if params[:query].present?
      @users = User.where('first_name ~ ?', params[:query])
      render 'api/users/index'

    else
      @users = User.none
      render 'api/users/index'
    end
  end


  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :birth_date, :gender)
  end
end
