import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"

class Navbar extends React.Component {

    render() {
        return (
            <div className="flex-container-navbar">
                <div className="flex-item-navbar item-left-nav logo"><h1><Link to='/'>GROINBASE</Link></h1></div>
                <div className="flex-item-navbar item-center-nav"> 
                <a className="anchor mid">Price</a>
                <a className="anchor mid">Product</a>
                <a className="anchor mid">Company</a>
                </div>
                <div className="flex-item-navbar item-right-nav">
                    <div>
                        
                        <Link className="anchor" to='/signin'>Sign in</Link>
                        <Link className="btn btn-flat" to='/signup'>Sign up</Link>
                        
                    </div>
                </div>
            </div>
        );
    }
}


export default Navbar

