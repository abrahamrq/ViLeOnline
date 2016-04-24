class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
    	t.string :email, limit: 255
    	t.string :name, limit: 255
    	t.string :last_name, limit: 255
    	t.string :user_name, limit: 255
    	t.string :password_hash, limit: 255
    	t.string :password_salt, limit: 255
    	t.datetime :deleted_at, index: true
      t.timestamps null: false
    end
  end
end