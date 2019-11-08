import React from 'react'
import { Link } from "react-router-dom"

class Navbar extends React.Component {

    render() {
        return (
            <div className="flex-container-navbar">
                <div className="flex-item-navbar item-left-nav logo"><h1>GROINBASE</h1></div>
                <div className="flex-item-navbar item-center-nav"> 
                <a className="anchor mid">Price</a>
                <a className="anchor mid">Product</a>
                <a className="anchor mid">Company</a>
                </div>
                <div className="flex-item-navbar item-right-nav">
                    <div>
                        <Link className="anchor" to={'/signin'}>Sign in</Link>
                        <Link className="btn btn-flat" to={'/singup'}>Sign up</Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default Navbar

