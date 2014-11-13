class SearchController < ApplicationController

  def create
    kind = params[:kind]
    title = params[:title]
    
    content = Medium.all
    
    content = content.withKind kind if kind
    content = content.withTitleMatching title if title
    
    render json: content.as_json, status: 200
  end

end
