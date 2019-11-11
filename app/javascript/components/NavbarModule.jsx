import React from 'react'
import {Link} from 'react-router-dom'


export default function NavbarModule({currentUserId, logout}) {

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
       
        const handleLogout = () => {
            logout()            
        }


        const loggedIn = () => (
            <>
                <div className="flex-item-navbar item-center-nav">
                    <Link className="anchor mid" to='/dashboard'>Home</Link>
                    <Link className="anchor mid" to='/price'>Price</Link>
                    <Link className="anchor mid" to='/account'>Account</Link>
                </div>
                <div className="flex-item-navbar item-right-nav">
                    <div>
                        <button className='btn btn-flat' onClick={handleLogout}>Logout</button>
                    </div>
                </div>

            </>




        );
            
    return currentUserId ? loggedIn() : loggedOut();
}
        
        
        
        
        