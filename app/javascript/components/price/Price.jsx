import React from 'react'
import PriceItem from './PriceItem'

export default function Price({assets}) {
    return (
        <>
            <div className="search-bar">
                <input className='input-search' type="text" placeholder='Search' />
            </div>

            <div className="price-tableau">
                <div className="price-header">
                    <div>#</div>
                    <div>Name</div>
                    <div>Price</div>
                    <div>Change</div>
                    <div>Market Cap</div>
                    <div>Trade</div>
                    <div>Follow</div> 
                </div>  
                <div>
                    {ren(assets)}
                </div>
            </div>
        </>
    )
}


const ren = (assets) => {   
        return assets.assets.map((el, idx) => {
        return (<PriceItem
            number={idx}
            name={el.name}
            price={el.quote.USD.price}
            change={el.quote.USD.percent_change_24h}
            market={el.quote.USD.market_cap}
        />)
    }
    )
}