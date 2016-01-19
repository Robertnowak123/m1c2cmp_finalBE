class CreateImageuploads < ActiveRecord::Migration
  def change
    create_table :imageuploads do |t|
      t.string :name
      t.string :attachment

      t.timestamps null: false
    end
  end
end
