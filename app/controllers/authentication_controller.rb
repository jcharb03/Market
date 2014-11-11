class AuthenticationController < ApplicationController

  def authenticate
    email = params[:session][:email]
    password = params[:session][:password]
    
    puts session

    user = User.find_by(email: email)
    puts user
    if user and user.authenticate password
      session[:id] = user.id
      redirect_to "/"
    else
      if user.nil?
        puts "User not found"
      else
        puts "Password not authentic"
      end

      redirect_to action: 'login', failure: true
    end
  end


  def login
    @failed_attempt = false
    @failed_attempt |= params[:failure]
  end

end
