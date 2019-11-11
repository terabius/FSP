class Watchlist < ApplicationRecord

    validates :user_id, presence: true
    belongs_to :user
    has_many :coins, dependent: :destroy
    after_create :create_coin

    private
    STARTERS_SYM = [:BTC,:ETH,:XRP,:BCH,:LTC,:XLM]
    def create_coin
        STARTERS_SYM.each do |sym|
            c = Coin.create!(name: sym, watchlist_id: self.id) 
        
        end
    end
end
