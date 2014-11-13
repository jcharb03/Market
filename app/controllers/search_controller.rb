class SearchController < ApplicationController

  def create
    kind = params[:kind]
    titleMatching = params[:title]


    render json: [], status: 100
  end

end
