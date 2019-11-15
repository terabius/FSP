import React from 'react'
import PanelItem from './PanelItem'

export default function Panel() {
    return (
        <>
        
        <div className="panel-tableau">
            <div className="panel-tableau-kid">
                    <div className='panel-item'># <span className='panel-name'>Name</span></div>
                <div className='panel-item'>Price</div>
                <div className='panel-item'>Change</div>
                <div className='panel-item'>Chart</div>
                <div className='panel-item'>Trade</div>
            </div>
            
                    {[{ name: 'Bitcoin', price: 300, change: 3, chart: 4 },
                    { name: 'Ethereum', price: 300, change: 3, chart: 4 },
                    { name: 'coucou Mams', price: 300, change: 3, chart: 4 },
                    { name: 'jtaime bizke', price: '😄', change: '❤️', chart: 4 }].map((data,idx)=>

                    <div className="panel-tableau-kid" key={data.name}>

                    <PanelItem name={data.name} 
                    num={idx}
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
