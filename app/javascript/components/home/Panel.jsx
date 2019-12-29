import React from 'react'
import PanelItem from './PanelItem'

export default function Panel() {

    return (
        <>
           
        <div className="container-tableau">
            <div className="row-tableau header-tableau">
                <div className='panel-ord header-ord'># </div>
                <div className='panel-name'>Name</div>
                <div className='panel-price'>Price</div>
                <div className='panel-change'>Change</div>
                <div className='panel-chart'>Chart</div>
                <div className='panel-action'>Trade</div>
            </div>
            
            {
             [{ name: 'Bitcoin', symbol:'BTC', price: 6875.80, change: -2.92, chart: 4 },
             { name: 'Ethereum', symbol:'ETH', price: 132.22, change: -6.71, chart: 4 },
             { name: 'Bitcoin Cash', symbol:'BCH', price: 195.75, change: -5.43, chart: 4 },
             { name: 'Litecoin', symbol:'LTC', price: 39.95, change:  7.97, chart: 4 }].map((data,idx)=>

                <div className="row-tableau" key={data.name}>

                    <PanelItem name={data.name} 
                    num={(idx+1)}
                    symbol={data.symbol}
                    price={data.price} 
                    change={data.change} 
                    chart={data.chart}
                    />

                </div>
            )}
                    
        </div>

        </>
    )
}

