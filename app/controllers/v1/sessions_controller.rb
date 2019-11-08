class V1::SessionsController < ApplicationController

  def create
    email = params[:user][:email]
    password = params[:user][:password]
    @user = User.find_by_credentials(email, password)

    if @user
      log_in!(@user)
      render "v1/users/show"
    else
      render json: ["error"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out!
      render "v1/users/show"
    else
      render json: ["No current user"], status: 404
    end
  end

end