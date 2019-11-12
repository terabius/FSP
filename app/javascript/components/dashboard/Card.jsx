import React from 'react'

export default function Card(props) {
    return (
        <>
        <div className="card-container">
            <div className="card-sub-info">
                <div>{props.name}</div>
                <div>{props.time}</div>
        
            </div>
            <div className='card-sub-info'>
                <div>{props.price}</div>
                <div>{props.percentage}</div>
            </div>
        
            <div className="card-chart">
                GRAPH
            </div>
        </div>
        </>
        )
    }
    
    