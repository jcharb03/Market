class MediaController < ApplicationController
  def index
    user_id = params[:user_id]
    render json: User.find(user_id).media.as_json unless user_id.nil?
    render json: Medium.all
  end
end
