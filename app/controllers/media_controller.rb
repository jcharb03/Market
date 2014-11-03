class MediaController < ApplicationController
  def index
    user_id = params[:user_id]

    media = Medium.all
    media = User.find(user_id).media if user_id

    render json: media.as_json
  end

  def show 
    user_id = params[:user_id]
    medium_id = params[:id]
    
    media = user_id ? User.find(user_id).media : Medium.all
    medium = media.find_by_id medium_id
    
    unless medium.nil?
      render json: medium.as_json
    else
      render status: 404, text: "Medium not found"
    end
  end
end
