import React from 'react'
import BTC from '../../assets/images/logo/BTC.png'

export default function Account(props) {
    const names = ['Bitcoin', 'Bitcoin Cash', 'Chainlink', 'Dai', 'Ethereum', 'Ethereum Classic', 'Litecoin', 'Stellar Lumens', 'XRP'];
    const items = [];
    const colors = ['red','green','yellow','purple','blue']
    for(let name of names){
        items.push(
            <div className="portfolio-assets-data" key={name}>
                <div>
                    <div>
                        <img src={BTC} height='36px' width='36px' alt="" />
                        <h4>{name}</h4>
                    </div>
                    <div>
                        <span>$0.00</span>
                    </div>
                    <div>
                        <span className="mini-perc">0%</span>
                        <div className="mini-circle" style={{backgroundColor:colors[Math.floor(Math.random()*5)]}}></div>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className='portfolio-container'>
            <div className="portfolio-kid">
                <div className="portfolio-balance">
                    <p>Portfolio balance</p>
                    <span>$0.00</span>
                    <svg width="800" height="245" viewBox="0 0 800 245" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity=".5" d="M274.598 135.58C166.063 135.58 167.611 75.897 0 75.897V245h799V98.132S751.141 1 599.5 1 383.133 135.58 274.598 135.58z" fill="url(#a)"></path>
                        <path d="M0 75.897c167.611 0 166.063 59.683 274.598 59.683C383.133 135.58 447.859 1 599.5 1S799 98.132 799 98.132" stroke="#F1F3F5" strokeWidth="2"></path>
                        <defs>
                            <linearGradient id="a" x1="392.991" y1="1" x2="392.991" y2="245" gradientUnits="userSpaceOnUse"><stop stopColor="#F1F3F5"></stop><stop offset="1" stopColor="#F1F3F5" stopOpacity="0"></stop>
                            </linearGradient></defs>
                    </svg>
                </div>


                <div className='portfolio-assets'>
                    <div className="portfolio-assets-header">
                        <h2>Your assets</h2>
                        <p>
                        <span>Asset</span>
                        <span>Balance</span>
                        <span>Allocation</span>
                        </p>
                    </div>


                    <div className="portfolio-assets-data">
                        <div>
                            <div>
                                <svg height="36" width="36" role="img" size="36" bgcolor="backgroundAccent" lighten="0" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 0C7.176 0 0 7.176 0 16s7.176 16 16 16 16-7.176 16-16S24.824 0 16 0zm0 30.06C8.242 30.06 1.94 23.759 1.94 16 1.94 8.242 8.241 1.94 16 1.94c7.758 0 14.06 6.302 14.06 14.06 0 7.758-6.302 14.06-14.06 14.06z" fill="#1652F0"></path>
                                    <path d="M16.291 14.914c-1.969-.281-2.347-.747-2.347-1.668 0-.873.67-1.493 1.95-1.493 1.163 0 1.832.407 2.104 1.338a.486.486 0 0 0 .465.359h1.018a.456.456 0 0 0 .446-.543c-.32-1.474-1.318-2.366-2.88-2.648V8.727a.48.48 0 0 0-.485-.485h-.97a.48.48 0 0 0-.484.485v1.503c-1.92.272-3.161 1.552-3.161 3.19 0 2.124 1.28 2.949 3.995 3.317 1.842.3 2.366.698 2.366 1.745 0 1.048-.892 1.746-2.143 1.746-1.697 0-2.25-.737-2.453-1.697a.497.497 0 0 0-.476-.398h-1.115a.45.45 0 0 0-.446.524c.281 1.61 1.319 2.802 3.433 3.084v1.532a.48.48 0 0 0 .485.485h.97a.48.48 0 0 0 .484-.485V21.74c2.008-.32 3.278-1.717 3.278-3.433.01-2.27-1.377-3.026-4.034-3.394z" fill="#1652F0"></path>
                                </svg>
                                <h4>United States Dollar</h4>
                            </div>
                            <div>
                                <span>$0.00</span>
                            </div>
                            <div>
                                <span className="mini-perc">0%</span>
                                <div className="mini-circle"></div>
                            </div>
                        </div>
                    </div>
                    {items}
                </div>

            </div>

            <div className="portfolio-kid">

                <div className="portfolio-box">
                    <h2>Recurring purchases</h2>
                    <p>Invest in crypto every day, week, or month. <br/>
                     Automatically.</p>
                    <div> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{stroke:'none', fill:'#0000ff'}}>
                            <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm0 23a11 11 0 1 1 11-11 11 11 0 0 1-11 11z"></path>
                            <path d="M12 5.5A6.51 6.51 0 0 0 5.5 12h1a5.5 5.5 0 1 1 .89 3h1.86v-1h-3a.5.5 0 0 0-.5.5v3h1v-1.69A6.49 6.49 0 1 0 12 5.5z"></path>
                        </svg>
                        <span>Set up a recurring purchase</span>
                    </div>
                </div>

                <div className="portfolio-box">
                    <h2>Recent transactions</h2>
                    <p>You don’t own any crypto. <br/>
                        Ready to make a purchase?
                                <br/> <br/> <br/> 
                        <a className="btn btn-flat">Trade</a>
                    </p>
                </div>

            </div>

        </div>
    )
}
