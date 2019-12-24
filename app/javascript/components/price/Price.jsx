import React from 'react'
import PriceItem from './PriceItem'

export default function Price({assets, wallets}) {
    
    return (
        <>
            <div className="price-container">
                <div className="price-container-kid">
                    <p>In the last 24 hours</p>
                    <h2>Market is down <span>4.56%</span></h2>
                </div>
                <div className="price-container-kid">
                    <div className="search-bar">
                        <svg fill="none" height="20" viewBox="0 0 26 26" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#7d95b6" strokeMiterlimit="10" strokeWidth="2"><path d="M25 25l-7.034-7.035"></path><path d="M10.931 20.862c5.485 0 9.931-4.446 9.931-9.931C20.862 5.446 16.416 1 10.931 1 5.446 1 1 5.446 1 10.931c0 5.485 4.446 9.931 9.931 9.931z" strokeLinecap="square"></path></g></svg>
                        <input id='my_input' className='input-search' type="text" 
                            placeholder='Search all assets...' onKeyUp={handleSearch} />
                    </div>
                    <select name="time" id="time">
                        <option value="1h">1h</option>
                        <option value="24h">24h</option>
                        <option value="1w">1w</option>
                        <option value="1m">1m</option>
                        <option value="1y">1y</option>
                    </select>
                    <select name="assetType" id="assetType">
                        <option value="all">All assets</option>
                        <option value="tradable">Tradeable assets</option>
                        <option value="gain">Top gainers</option>
                        <option value="lose">Top losers</option>
                    </select>
                </div>
            
            </div>





            <div className="price-tableau">
                <div className="price-header">
                        <div>
                            #<div className='price-name'>Name</div>
                        </div>
                        <div>
                            <div className='price-data'>Price</div>
                            <div className='price-data'>Change</div>
                            <div className='price-data'>Market Cap</div>
                            <div className='price-data'>Trade</div>
                            <div className='price-data'>Follow</div>
                        </div>
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
   
    let assets = document.querySelectorAll('.price-element-border');
    let input = event.target.value.toUpperCase();

    assets.forEach((crypto) => {
        
        if(crypto.textContent.toUpperCase().indexOf(input) > -1){
            crypto.style.display = '';
        }else{
            crypto.style.display = 'none'; 
        }
    });
}

