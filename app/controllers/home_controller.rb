class HomeController < ApplicationController
  before_filter :getUser, :getUsername, :getUserId
  
  def home

  end

end
