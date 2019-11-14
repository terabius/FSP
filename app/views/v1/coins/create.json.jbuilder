closingPos = []
Assets.getHistorical('BTC')['Data']['Data'].each do |historyHash|
    closingPos << historyHash['close']
end

res = {id: @new_coin.id , name: @new_coin.name, history: closingPos}

json.set! @new_coin.name do 
    json.merge! res
end
