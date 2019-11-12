class V1::CoinsController < ApplicationController
  def index
  end

  def show
  end

  def create
    @new_coin = Coin.new(coin_params)
    @new_coin.watchlist_id = current_user.watchlist.id 

    if @new_coin.save
      render :create
    else
      render json: {status:-1}
    end
  end

  def destroy

    @coin_to_kill = current_user.watchlist.coins.find(params[:id])
    name = @coin_to_kill.name
    if @coin_to_kill.destroy
      p '#######################################################'
      p name
      render json: name.to_json

    else
      render json:{status:-1}
    end
  end


  private 
  def coin_params
    params.require(:coin).permit(:id,:name)
  end

end
