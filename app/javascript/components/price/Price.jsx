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
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div> 
            </div>

                <PriceItem />
            </div>
        </>
    )
}


  