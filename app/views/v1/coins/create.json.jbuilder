res = {id: @new_coin.id , name: @new_coin.name}

json.set! @new_coin.name do 
    json.merge! res
end
