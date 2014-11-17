class MediaController < ApplicationController
  before_filter :getUser, :userPermission?

  #show all media
  def index
    user_id = params[:user_id]

    media = Medium.all
    media = User.find(user_id).media if user_id

    render json: media.to_json(include: {tags: {only: :name}})
  end

  #show single medium
  def show 
    user_id = params[:user_id]
    medium_id = params[:id]
    
    media = user_id ? User.find(user_id).media : Medium.all
    medium = media.find_by_id medium_id
    
    unless medium.nil?
      render json: medium.to_json(include: {tags: {only: :name}})
    else
      render status: 404, text: "Medium not found"
    end
  end

  #adds media
  def create
    user = User.find_by_id params[:user_id]

    if user
      media = Medium.create media_params

      if params[:tags]
        params[:tags].each do |tag|
          tag = Tag.find_or_create_by(name: tag[:name])
          media.tags << tag
        end
      end

      render status: 200, json: media.to_json(include: { tags: {only: :name}})
    else
      render status: 403, text: "Media needs to have a User"
    end
  end

  def update
    puts "hello"
  end

  def destroy
    media = Medium.find_by_id params[:id]

    if media
      render status: 200, json: media.to_json(include: { tags: {only: :name}})
      media.destroy
    else
      render status: 404, text: "Media not found"
    end
  end

  private
  def media_params
    params.delete :medium
    params.permit(:user_id, :title, :author, :secondary_info, :kind, :year_created)
  end

  def userPermission?
    puts params[:user_id] == @user.id
    #TODO: deny in some way
  end
end
