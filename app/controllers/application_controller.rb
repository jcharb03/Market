class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def getUser
    if session[:id]
      @user = User.find_by_id(session[:id])
    else
      redirect_to '/login'
    end
  end
end
