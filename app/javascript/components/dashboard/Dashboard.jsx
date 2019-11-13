import React from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'

const Dashboard = ({wallets}) => {

    return (
        <React.Fragment>
           { console.log(wallets)}
            <div className="dash-container">
                <div className="dash-title">Following</div>
                <div className="dash-kid">
                    <div className="crypto-view"><Card /></div>
                    <div className="crypto-view"><Card /></div>
                    <div className="crypto-view"><Card /></div>
                </div>
                <div className="dash-kid">
                    <div className="crypto-view"><Card /></div>
                    <div className="crypto-view"><Card /></div>
                    <div className="crypto-view"><Card /></div>
                </div>
                <Link to='/price' className='className="dash-title"'>Discover more #LINK</Link>
            </div>
        </React.Fragment>
    );
}

export default Dashboard



