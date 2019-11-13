class Assets

    attr_reader :result

    def initialize
        @assets = Assets.getAssets

        @result = {}

        @assets['data'].each do |crypto|
            result[crypto['symbol']] = crypto
        end
        # p @result
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
    
end

