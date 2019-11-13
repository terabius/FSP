json.set! :users do
    json.extract! @user, :id, :first_name, :email
end

json.set! :wallets do
    Watchlist.find_by(user_id: @user.id).coins.each do |coin|
        json.set! coin.name do
            json.extract! coin, :id, :name
        end
    end    
end

res = Assets.new
json.set! :assets do 
    json.merge! res.result
end