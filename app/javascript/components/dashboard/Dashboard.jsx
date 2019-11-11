import React from 'react'
import Card from './Card'

const Dashboard = ({wallets}) => {

    return (
        <React.Fragment>
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
                <div className="dash-title">Discover more #LINK</div>
            </div>
        </React.Fragment>
    );
}

export default Dashboard



