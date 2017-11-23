class UsersController < ApplicationController
  before_action :check_if_logged_in, :only => [:edit]
  before_action :check_if_admin, :only => [:index]

  def index
    @users = User.all # TODO: check out will_paginate gem for pagination
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @user = User.find params[:id]
  end

  def update
    # TODO: Handle errors arising from the validations
    user = @current_user # User.find params[:id]
    user.update user_params
    redirect_to root_path
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
