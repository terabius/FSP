import React from 'react'
import PriceItem from './PriceItem'

export default function Price() {
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

                <PriceItem />
            </div>
        </>
    )
}


  