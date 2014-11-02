class MediaController < ApplicationController
  def index
    user_id = params[:user_id]
    render json: User.find(user_id).media.as_json unless user_id.nil?
    render json: Medium.all
  end

  def show 
    user_id = params[:user_id]
    medium_id = params[:id]
    
    media = user_id ? User.find(user_id).media : Medium.all
    render json: media.find(medium_id).as_json
  end
end
