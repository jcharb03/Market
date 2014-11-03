class User < ActiveRecord::Base
  has_many :media
#  has_many :library, foreign_key: 'user_id', class_name: "Medium"
end
