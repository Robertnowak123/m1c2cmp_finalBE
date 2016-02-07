	class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  	devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
	has_many :likes
	has_many :companies
	validates :email, uniqueness: true	
	

	ROLES = {0 => :guest, 1 => :user, 2 => :admin}
	attr_reader :role

	def role?(role_name)
		role == role_name
	end
end
