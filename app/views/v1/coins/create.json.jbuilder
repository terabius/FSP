    json.set! @new_coin.name do
        json.extract! @new_coin, :id, :name
    end 

