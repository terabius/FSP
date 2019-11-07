class V1::ThingsController < ApplicationController 
    def index
        render json: {
            name: 'Bob',
            username: 'Chevre',
            age: 56
        }.to_json
    end
end
