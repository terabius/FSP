class Coin < ApplicationRecord
    
    validates :name, :watchlist_id , presence: true

    belongs_to :watchlist

end
