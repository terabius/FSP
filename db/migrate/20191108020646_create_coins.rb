class CreateCoins < ActiveRecord::Migration[6.0]
  def change
    create_table :coins do |t|
      t.string :name, null: false
      t.integer :watchlist_id, null: false

      t.timestamps
    end
    add_index :coins, :watchlist_id
  end
end
