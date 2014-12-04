class PasswordResetRequestController < ApplicationController

  # Show password reset request
  def new

  end

  # Create the request and email for verification
  def create
    name = params[:reset][:name]
    user = User.find_by(name: name)

    if user
      @hash = Digest::SHA1.hexdigest("#{user.name}-#{DateTime.now.strftime("%M%S%L")}").to_s
      reset_request = PasswordResetRequest.new
      reset_request.user = user
      reset_request.link = @hash
      puts @hash
      if reset_request.save
        @fulfill_link = "/password_reset_request/#{@hash}"
      else
        render code: 500, text: "Unable to create code"
      end
    else
      render code: 400, text: "Cannot find user: #{name}" 
    end
  end

  # Redeem the reset code
  def show
    @reset_request = PasswordResetRequest.find_by(link: params[:id])
  end

  def update
    @reset_request = PasswordResetRequest.find_by(link: params[:id])
    new_password = params[:reset][:new_password]
    puts new_password
    puts @reset_request
    puts @reset_request.is_valid?
    puts @reset_request.user
    if new_password and not @reset_request.nil? and @reset_request.is_valid?
      @reset_request.fulfill new_password
      redirect_to "/login"
    end
  end
end
