import React from 'react'

export default function Footer({currentUserId},props) {
    
    function logIn(){
        return (
            <>
                <div className="test"></div>
                <div className="footer-container">
                    <div>
                        <a href="">Home</a>
                        <a href="">Careers</a>
                        <a href="">Legal & Privacy</a>
                    </div>

                    <div>
                        <span>© 2019 Koinbase</span>
                        <span>
                            <select name="lang" id="lang">
                                <option value="english">English</option>
                                <option value="francais">Francais</option>
                            </select>
                        </span>
                        <span>
                            <div className="btn btn-flat spec">Need Help?</div>
                        </span>
                    </div>
                </div>
            </>
        )
    }







    function logOut(){
        return (
            <>
            <div className='footerHome-container'>
                <div className="footerHome-data">
                    <span className="footertitle">Koinbase</span>
                    <span>###-###-#### </span>
                    <span>easynametoremember.</span>
                    <br/>
                    <span>© 2019 Koinbase</span>
                </div>
                <div className="footerHome-data">
                    <span>Product</span> 
                    <span>Coinbase</span>
                    <span>Commerce</span>
                    <span>Custody</span>
                    <span>Earn</span>
                    <span>Pro</span>
                    <span>USD Coin</span>
                    <span>Wallet</span>
                    <span>Ventures</span>
                </div>
                <div className="footerHome-data">
                    <span>Learn</span>
                    <span>Buy Bitcoin</span>
                    <span>Buy Bitcoin Cash</span>
                    <span>Buy Ethereum</span>
                    <span>Buy Litecoin</span>
                    <span>Buy XRP</span>
                    <span>Supported countries</span>
                    <span>Status</span>
                    <span>Taxes</span>
                </div>
                <div className="footerHome-data">
                   <span>Company</span>
                        <span>About</span>
                        <span>Affiliates</span>
                        <span>Careers</span>
                        <span>Partners</span>
                        <span>Press</span>
                        <span>Legal & Privacy</span>
                        <span>Support</span>
                </div>
                <div className="footerHome-data">
                    <span>Social</span>
                    <span>Blog</span>
                    <span>Twitter</span>
                    <span>Facebook</span>
                </div>
            </div>
            </>
        )
    }




    return currentUserId ? logIn() : logOut()
}
