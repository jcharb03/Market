class User < ActiveRecord::Base
  has_many :library, foreign_key: 'user_id', class_name: "Media"
end
