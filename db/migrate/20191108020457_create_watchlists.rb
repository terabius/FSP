class CreateWatchlists < ActiveRecord::Migration[6.0]
  def change
    create_table :watchlists do |t|
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :watchlists, :user_id
  end
end
