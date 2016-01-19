class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.text :name
      t.text :geography
      t.boolean :hyperlocal
      t.decimal :commission
      t.text :category
      
      t.timestamps null: false
    end
  end
end
