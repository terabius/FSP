json.set! :users do
    json.( current_user, :id, :last_name, :email)
end

json.set! :wallets do
    Watchlist.find_by(user_id: current_user.id).coins.each do |coin|
        json.set! coin.name do
            json.( coin, :id, :name)
        end
    end    
end

res = Assets.new
json.set! :assets do 
    json.merge! res.result
end
