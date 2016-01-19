class Company < ActiveRecord::Base
	belongs_to :user
	has_many :likes
	mount_uploader :logo, AttachmentUploader
end
	