import React from 'react'
import PanelItem from './PanelItem'

export default function Panel() {
    return (
        <>
        
        <div className="container-tableau">
            <div className="row-tableau header-tableau">
                <div># </div>
                <div className='panel-name'>Name</div>
                <div className='panel-price'>Price</div>
                <div className='panel-change'>Change</div>
                <div className='panel-chart'>Chart</div>
                <div className='panel-action'>Trade</div>
                <div className="panel-dummy"></div>
            </div>
            
            {
             [{ name: 'Bitcoin', price: 300, change: 2, chart: 4 },
             { name: 'Ethereum', price: 300, change: 3, chart: 4 },
             { name: 'Bitcoin Cash', price: 300, change: 3, chart: 4 },
             { name: 'Litecoin', price: 300, change: 3, chart: 4 }].map((data,idx)=>

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
