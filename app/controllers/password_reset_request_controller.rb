class PasswordResetRequestController < ApplicationController

  # Show password reset request
  def new

  end

  # Create the request and email for verification
  def create
    email = params[:reset][:email]
    user = User.find_by(email: email)

    if user
      @hash = Digest::SHA1.hexdigest("#{user.email}-#{DateTime.now.strftime("%M%S%L")}").to_s
      reset_request = PasswordResetRequest.new
      reset_request.user = user
      reset_request.link = @hash
      puts @hash
      if reset_request.save
        @fulfill_link = "/password_reset_request/#{@hash}"
        #redirect_to '/'
      else
        render code: 500, text: "Unable to create code"
      end
    else
      render code: 400, text: "Cannot find user: #{email}" 
    end
  end

  # Redeem the reset code
  def show

  end
  
end
