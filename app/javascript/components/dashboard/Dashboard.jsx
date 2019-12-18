import React from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'

const Dashboard = ({wallets,assets}) => {

    return (
        <React.Fragment>
            <div className="dash-container">
                <div className="dash-title">Following</div>
                <div className="dash-kid">
                    { Object.keys(wallets).map((el) =>
                        <div className="crypto-view" key={el}>
                            <Card 
                                symbol={el}
                                name={assets[el].name}
                                time={'24h'}
                                price={assets[el].quote.USD.price}
                                percentage={assets[el].quote.USD.percent_change_24h}
                            />
                        </div>
                    )}
                </div>
                <div className="dash-footer">
                    <Link to='/price' >Discover more assets > </Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Dashboard
