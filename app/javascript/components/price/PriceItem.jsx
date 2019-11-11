import React from 'react'

export default function PriceItem(props) {
    return (
        <>
            <div className="price-item">
                <div>{props.number}</div>
                <div>{props.name}</div>
                <div>{props.price}</div>
                <div>{props.changer}</div>
                <div>{props.market}</div>
                <div>{props.trade}</div>
                <div>{props.follow}</div> 
            </div>
        </>
    )
}
