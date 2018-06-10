class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login!(@user)
      render 'api/users/create'
    else
      render json: ['Invalid Email and/or Password'] , status: 400
    end
  end

  def destroy
    if logged_in?
      logout!
    else
      render json: ['No one logged in'], status: 403
    end
  end

end
