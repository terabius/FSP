import React from 'react'
import PanelItem from './PanelItem'

export default function Panel() {
    return (
        <>
        
        <div className="container-tableau">
            <div className="row-tableau header-tableau">
                <div className='panel-ord'># </div>
                <div className='panel-name'>Name</div>
                <div className='panel-price'>Price</div>
                <div className='panel-change'>Change</div>
                <div className='panel-chart'>Chart</div>
                <div className='panel-action'>Trade</div>
            </div>
            
            {
             [{ name: 'Bitcoin', price: 6875.80, change: -2.92, chart: 4 },
             { name: 'Ethereum', price: 132.22, change: -6.71, chart: 4 },
             { name: 'Bitcoin Cash', price: 195.75, change: -5.43, chart: 4 },
             { name: 'Litecoin', price: 39.95, change:  7.97, chart: 4 }].map((data,idx)=>

                <div className="row-tableau" key={data.name}>

                    <PanelItem name={data.name} 
                    num={(idx+1)}
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
