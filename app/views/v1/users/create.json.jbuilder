json.set! :users do
    json.extract! @user, :id, :last_name, :email
end
json.set! :wallets do
    Watchlist.find_by(user_id: @user.id).coins.each do |coin|
        json.set! coin.id do
            json.extract! coin, :id, :name
        end
    end    
end

fetch_assets = Assets.new
response = fetch_assets.getAssets

json.set! :assets do 
    json.merge! response
end