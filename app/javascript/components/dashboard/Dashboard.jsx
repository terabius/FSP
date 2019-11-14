import React from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'

const Dashboard = ({wallets,assets}) => {

    return (
        <React.Fragment>
           {/* {console.log(wallets['BTC'].name)} */}
           {/* {console.log(assets)} */}
           
            <div className="dash-container">
                <div className="dash-title">Following</div>
                <div className="dash-kid">
                    { Object.keys(wallets).map((el) =>
                        <div className="crypto-view" key={el}><Card 
                        name={el}
                        time={'24h'}
                        price={assets[el].quote.USD.price}
                        percentage={assets[el].quote.USD.percent_change_24h}
                        />
                        </div>
                    )}
                </div>
                <Link to='/price' className='className="dash-title"'>Discover more #LINK</Link>
            </div>
        </React.Fragment>
    );
}

export default Dashboard



