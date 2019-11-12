import React from 'react'

export default function Account(props) {
    return (
        <div>
            Account:
            {console.log(props.wallets)}
            {Object.keys(props.wallets).map(el =>(
                (<div> {el} </div>)
            )
            )}
            {/* {props.wallets.forEach(el=>console.log(el))} */}
        </div>
    )
}
