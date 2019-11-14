class Assets

    attr_reader :result

    def initialize
        @assets = Assets.getAssets

        @result = {}

        @assets['data'].each do |crypto|
            result[crypto['symbol']] = crypto
        end
        
    end
        
    def self.getAssets
        link = 'https://raw.githubusercontent.com/bppandre/apitest/master/crypto.json'
        response = RestClient::Request.execute(
        method: :get,
        url: link
        # headers: ENV['NYT_API_KEY']
        )
        JSON.parse(response)
    end

    def self.getHistorical(symbol)
        link = 'https://raw.githubusercontent.com/bppandre/apitest/master/history.json'
        historyData = RestClient::Request.execute(
        method: :get,
        url: link
        )
        JSON.parse(historyData)
    end
    
end

