require 'test_helper'

class AuthenticationControllerTest < ActionController::TestCase

  test "create valid user" do
    new_user = User.new name: "First", phone: "111-111-1111", zipcode: '11111', email: 'email@email.com',
                        password: "password", password_confirmation: "password"
    assert new_user.save
  end
  test "dont allow duplicate users" do
    new_user = User.new name: "First", phone: "111-111-1111", zipcode: '11111', email: 'email@email.com',
                        password: "password", password_confirmation: "password"
    new_user.save
    user = User.new name: "First", phone: "111-111-1111", zipcode: '11111', email: 'email@email.com',
                    password: "password", password_confirmation: "password"
    assert_not user.save
  end
  test "invalid user: passwords mismatch" do
    new_user = User.new name: "First", phone: "111-111-1111", zipcode: '11111', email: 'email@email.com',
                        password: "password", password_confirmation: "pasword"
    assert_not new_user.save
  end
  test "invalid user: invalid email" do
    new_user = User.new name: "First", phone: "111-111-1111", zipcode: '11111', email: 'email',
                        password: "password", password_confirmation: "pasword"
    assert_not new_user.save
  end
  test "login with invalid password" do
    params[:session][:email] = "jeni@gmail.com"
    params[:session][:password] = "pass"
    assert_status :error
  end
  test "login works" do
    post :login, :user => { :email => "jeni@gmail.com", :password => "foobar" }
    assert_not_nil session[:user_id]
    assert_response :redirect
    assert_redirected_to :action => '/'
    end
end
