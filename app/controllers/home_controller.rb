class HomeController < ApplicationController
  before_filter :getUsername, :getUserId, :getSampleMediumId

  def home

  end

end
