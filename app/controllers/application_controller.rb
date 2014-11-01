class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def getUsername
    @userName = User.all.first.name
  end
  
  def getUserId
    @userId = User.all.first.id
  end
  
  def getSampleMediumId
    userId = User.all.first.id
    @mediaId = User.find(userId).media.first.id
  end
end
