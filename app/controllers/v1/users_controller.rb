class V1::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    
    # HARD CODED FEATURE NEEDS TO BE IMPLEMENTED 
    ###################################################################################################
    @user.state = 'CA'
    @user.read_conditions = true
    ####################################################################################################
    if @user.save
      log_in!(@user)
      render json: {
        status: :created,
        user: @user
        }

    else
    render json: @user.errors.full_messages
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
    render json: {edit:'from edit'}
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: {edit:'from edit'}
    else
      render json: @user.errors.full_messages
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name,:last_name,:email, :password)
  end

end