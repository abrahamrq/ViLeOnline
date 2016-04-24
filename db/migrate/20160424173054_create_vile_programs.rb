class CreateVilePrograms < ActiveRecord::Migration
  def change
    create_table :vile_programs do |t|
      t.text :code
      t.text :xml_blocks
      t.boolean :hidden, default: false
      t.string :name, limit: 255, default: 'Untitled'
      t.integer :user_id, index: true
      t.datetime :deleted_at, index: true
      t.timestamps null: false
    end
  end
end
