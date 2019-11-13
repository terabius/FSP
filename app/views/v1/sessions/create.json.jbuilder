json.set! :users do
    json.( @user, :id, :last_name, :email)
end

json.set! :wallets do
    Watchlist.find_by(user_id: @user.id).coins.each do |coin|
        json.set! coin.name do
            json.( coin, :id, :name)
        end
    end    
end

# fetch_assets = Assets.new
# response = fetch_assets.getAssets

# result = { }
# response['data'].each do |crypto|
#     result[crypto['symbol']] = crypto
# end

res = Assets.new
json.set! :assets do 
    json.merge! res.result
end
