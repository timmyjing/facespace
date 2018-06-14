class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.string :liked_type, null: false
      t.integer :liked_id
      t.timestamps
    end

    add_index :likes, :user_id
    add_index :likes, :liked_id
    add_index :likes, [:user_id, :liked_type, :liked_id], unique: true
  end
end
