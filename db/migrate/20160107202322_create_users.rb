class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :name
      t.text :name
      t.text :email
      t.text :location
      t.text :user_likes

      t.timestamps null: false
    end
  end
end
