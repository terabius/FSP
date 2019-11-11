class Assets

    def getAssets
        link = 'https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com'
        response = RestClient::Request.execute(
        method: :get,
        url: link
        # headers: ENV['NYT_API_KEY']
        )
        p JSON.parse(response)
    end
end