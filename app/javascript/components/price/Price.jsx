import React from 'react'
import PriceItem from './PriceItem'

export default function Price({assets, wallets}) {
    return (
        <>
            <div className="search-bar">
                <input id='my_input' className='input-search' type="text" placeholder='Search' onKeyUp={handleSearch} />
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
                    {renderRow(assets,wallets)}
                </div>
            </div>
        </>
    )
}


const renderRow = (assets, wallets) => {

    const values = Object.values(assets);
    return values.map((el, idx) => {
        return (<PriceItem
            key={idx}
            number={idx}
            name={el.name}
            price={el.quote.USD.price}
            change={el.quote.USD.percent_change_24h}
            market={el.quote.USD.market_cap}
            symbol={el.symbol}
            wallets={wallets}
        />)
    })
}

const handleSearch = (event) => {
    console.log(event.target.value)
    let assets = document.querySelectorAll('.price-item');
    let input = event.target.value.toUpperCase();
    assets.forEach((crypto) => {
        if(crypto.childNodes[1].textContent.toUpperCase().indexOf(input) > -1){
            crypto.style.display = '';
        }else{
            crypto.style.display = 'none'; 
        }
    });
}

