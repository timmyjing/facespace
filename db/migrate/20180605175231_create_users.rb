class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.date :birth_date, null: false
      t.text :bio
      t.string :location
      t.string :profile_img_url
      t.string :cover_img_url
      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :first_name
    add_index :users, :last_name
    add_index :users, :session_token, unique: true
  end
end
