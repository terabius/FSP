import React from 'react'
import {Link} from 'react-router-dom'


export default function NavbarModule({currentUser, logout}) {

    const loggedOut = () => (
        <>
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

        </>
        );
        


        const loggedIn = () => (
            <>
                <div className="flex-item-navbar item-center-nav">
                    <a className="anchor mid">Home</a>
                    <a className="anchor mid">Price</a>
                    <a className="anchor mid">Watchlist</a>
                </div>
                <div className="flex-item-navbar item-right-nav">
                    <div>
                        <button onClick={logout}>Logout</button>
                    </div>
                </div>

            </>




        );
            
    return currentUser ? loggedIn() : loggedOut();
}
        
        
        
        
        