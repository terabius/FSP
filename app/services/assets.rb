class Assets

    def getAssets
        link = 'https://raw.githubusercontent.com/bppandre/apitest/master/crypto.json'
        response = RestClient::Request.execute(
        method: :get,
        url: link
        # headers: ENV['NYT_API_KEY']
        )
        JSON.parse(response)
    end

end

