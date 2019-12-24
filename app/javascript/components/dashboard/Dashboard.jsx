import React from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'

import BTC from '../../../assets/images/logo/BTC.png'
import BCH from '../../../assets/images/logo/BCH.png'
import ETH from '../../../assets/images/logo/ETH.png'
import ETC from '../../../assets/images/logo/ETC.png'

const Dashboard = ({wallets,assets}) => {

    return (
        <React.Fragment>
            <div className="dash-container">
                <div className="dash-title">Following</div>
                <div className="dash-kid">
                    { Object.keys(wallets).map((el) =>
                        <div className="crypto-view" key={el}>

                            <button className="btn btn-flat">View asset</button>
                            
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
                    <Link to='/price'>Discover more assets > </Link>
                </div>
            </div>




            <div className="dash-container-two">
                <div className='dash-container-two-kid'>


                    <div className='dash-container-two-title'>
                        Complete Your Account
                    </div>
                    <div className='dash-container-two-data'>
                        <div className='dash-logo-blue'>
                            <svg completed="1"  height="18" viewBox="0 0 23 18" width="23" xmlns="http://www.w3.org/2000/svg"><path d="M20.536 14.481l-4.032-5.064-1.8 1.325 3.893 4.883H4.185l4.102-5.162-1.8-1.325-4.255 5.357V6.11L0 4.213v13.644h22.768V4.646l-2.232 1.883zM0 0v1.883l9.584 7.283c.586.432 1.34.641 2.093.641.767 0 1.52-.209 2.106-.641l8.985-6.85V0zm12.458 7.408c-.404.293-1.144.293-1.548 0L3.92 2.232h15.528z" fill="#727272" fillRule="evenodd"></path></svg>
                        </div>
                        <p>
                        <span>Confirm your email address</span> <br/>
                        Adds basic account security
                        </p>
                        <img src="" alt=""/>
                    </div>
                    <div className='dash-container-two-data'>
                        <div className='dash-logo-blue'>
                            <svg completed="1"  height="63" viewBox="0 0 38 63" width="38" xmlns="http://www.w3.org/2000/svg"><g fill="#0269c8"><path d="M2.318 7.38C1.59 7.38 1 7.968 1 8.692c0 .725.59 1.313 1.318 1.313zm33.885 2.625c.728 0 1.318-.588 1.318-1.313 0-.724-.59-1.312-1.318-1.312zm-33.885 0h33.885V7.38H2.318zM36.203 53.465c.728 0 1.318-.588 1.318-1.313 0-.724-.59-1.312-1.318-1.312zM2.318 50.84C1.59 50.84 1 51.428 1 52.153c0 .724.59 1.312 1.318 1.312zm33.885 0H2.318v2.625h33.885zM15.818 55.29c-.728 0-1.318.588-1.318 1.313 0 .724.59 1.312 1.318 1.312zm6.777 2.625c.728 0 1.318-.588 1.318-1.313 0-.724-.59-1.312-1.318-1.312zm-6.777 0h6.777V55.29h-6.777z"></path><path d="M34.885 56.607c0 1.726-1.42 3.145-3.2 3.145v2.625c3.211 0 5.836-2.571 5.836-5.77zm-3.2 3.145H6.835v2.625h24.85zm-24.85 0c-1.778 0-3.2-1.42-3.2-3.145H1c0 3.199 2.625 5.77 5.836 5.77zm-3.2-3.145V6.46H1v50.147zm0-50.147c0-1.725 1.422-3.145 3.2-3.145V.69C3.626.69 1 3.262 1 6.46zm3.2-3.145h24.85V.69H6.835zm24.85 0c1.78 0 3.2 1.42 3.2 3.145h2.636c0-3.198-2.625-5.77-5.836-5.77zm3.2 3.145v50.147h2.636V6.46z"></path></g></svg>
                        </div>
                        <p>
                       <span> Add your phone number </span> <br/>
                        Enables 2-factor authentication
                        </p>
                        <img src="" alt=""/>
                    </div>
                    <div className='dash-container-two-data'>
                        <div className='dash-logo-yellow'>
                            <svg completed="0" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"><g fill="#727272" fillRule="evenodd"><ellipse cx="5.271" cy="13.896" rx="1.438" ry="1.438"></ellipse><path d="M1.917 20.23h19.166V6.814H1.917V20.23zM5.75 1.99l10.084 2.907H5.75V1.99zm16.72 3.4c-.34-.46-.818-.819-1.356-.953L5.689.057C4.657-.201 3.833.449 3.833 1.506v3.391H1.921C.86 4.897 0 5.647 0 6.704V20.13c0 1.056.86 2.017 1.921 2.017H21.08c1.061 0 1.921-.961 1.921-2.017V6.704c0-.51-.203-.97-.53-1.313z"></path></g></svg>
                        </div>
                        <p>
                        <span>Add a payment method </span> <br/>
                        Use a bank account or card to make your first purchase
                        </p>
                        <img src="" alt=""/>
                    </div>
                    <div className='dash-container-two-footer'>Complete your account ></div>
                </div>  






                <div className='dash-container-two-kid'>


                    <div className='dash-container-two-title'>
                        Your Portfolio
                    </div>



                    <div className='dash-container-two-data'>
                        <div>
                            <svg height="36" width="36" role="img" size="36" bgcolor="backgroundAccent" lighten="0" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0C7.176 0 0 7.176 0 16s7.176 16 16 16 16-7.176 16-16S24.824 0 16 0zm0 30.06C8.242 30.06 1.94 23.759 1.94 16 1.94 8.242 8.241 1.94 16 1.94c7.758 0 14.06 6.302 14.06 14.06 0 7.758-6.302 14.06-14.06 14.06z" fill="#1652F0"></path><path d="M16.291 14.914c-1.969-.281-2.347-.747-2.347-1.668 0-.873.67-1.493 1.95-1.493 1.163 0 1.832.407 2.104 1.338a.486.486 0 0 0 .465.359h1.018a.456.456 0 0 0 .446-.543c-.32-1.474-1.318-2.366-2.88-2.648V8.727a.48.48 0 0 0-.485-.485h-.97a.48.48 0 0 0-.484.485v1.503c-1.92.272-3.161 1.552-3.161 3.19 0 2.124 1.28 2.949 3.995 3.317 1.842.3 2.366.698 2.366 1.745 0 1.048-.892 1.746-2.143 1.746-1.697 0-2.25-.737-2.453-1.697a.497.497 0 0 0-.476-.398h-1.115a.45.45 0 0 0-.446.524c.281 1.61 1.319 2.802 3.433 3.084v1.532a.48.48 0 0 0 .485.485h.97a.48.48 0 0 0 .484-.485V21.74c2.008-.32 3.278-1.717 3.278-3.433.01-2.27-1.377-3.026-4.034-3.394z" fill="#1652F0"></path></svg>
                            <span>US Dollars</span>
                        </div>
                        <div>
                            <span>$0.00</span>
                            <span>$0.00</span>
                        </div>
                    </div>



                    <div className='dash-container-two-data'>
                        <div>
                            <img src={BTC} height="36" width="36" alt="bitcoin"/>
                            <span>US Dollars</span>
                        </div>
                        <div>
                            <span>$0.00</span>
                            <span>$0.00</span>
                        </div>
                    </div>


                    <div className='dash-container-two-data'>
                        <div>
                            <img src={BCH} height="36" width="36" alt="bitcash"/>
                            <span>US Dollars</span>
                        </div>
                        <div>
                            <span>$0.00</span>
                            <span>$0.00</span>
                        </div>
                    </div>



                    <div className='dash-container-two-data'>
                        <div>
                            <img src={ETH} height="36" width="36" alt="etherum"/>
                            <span>US Dollars</span>
                        </div>
                        <div>
                            <span>$0.00</span>
                            <span>$0.00</span>
                        </div>
                    </div>



                    <div className='dash-container-two-data'>
                        <div>
                            <img src={ETC} height="36" width="36" alt="etherum cash"/>
                            <span>US Dollars</span>
                        </div>
                        <div>
                            <span>$0.00</span>
                            <span>$0.00</span>
                        </div>
                    </div>




                    <div className='dash-container-two-footer'>Total Balance = $0.00</div>
                </div>  

        </div>  
        
        </React.Fragment>
    );
}

export default Dashboard
