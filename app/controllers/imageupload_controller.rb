class ImageuploadController < ApplicationController
  def index
  	@imageupload=Imageupload.all
  end

  def new
  	@imageupload=Imageupload.new
  end

  def create
  	@imageupload=Imageupload.new(imageupload_params)

  	if @imageupload.save
  		redirect_to_imageuploads_path, notice: "The Image has been uploaded."
  	else
  		render "new"
  	end
  end

  def destroy
  	@imageupload=Imageupload.find(params[:id])
  	@imageupload.destroy
  	redirect_to_imageuploads_path, notice: "The Image has been deleted."
  end
end
