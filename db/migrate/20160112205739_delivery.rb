class Delivery < ActiveRecord::Migration
  def change
  	add_column :companies, :delivery, :boolean, default: true
  end
end
	 