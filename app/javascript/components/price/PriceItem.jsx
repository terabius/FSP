import React from 'react'

export default function PriceItem(props) {
    return (
        <>
            <div className="price-item">
                <div>{props.number}</div>
                <div className='crypto-name'>{props.name}</div>
                <div>{props.price}</div>
                <div>{props.change}</div>
                <div>{props.market}</div>
                <div>{props.trade}</div>
                <div><button onClick={handleFollow}>follow</button></div> 
            </div>
        </>
    )
}


