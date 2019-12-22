import React from 'react'
import {Link} from 'react-router-dom'
import { loggedOutUi } from '../util/ui_util';


export default function NavbarModule({currentUserId, logout}) {

    const loggedOut = () => (
        <>
        <div className="flex-item-navbar item-center-nav">
            <a className="anchor mid white">Price</a>
            <a className="anchor mid white">Product</a>
            <a className="anchor mid white">Company</a>
        </div>
        <div className="flex-item-navbar item-right-nav">
            <div>

                <Link className="anchor white" to='/signin' id='sign'>Sign in</Link>
                <Link className="btn btn-flat" to='/signup'>Sign up</Link>
                

            </div>
        </div>

        </>
        );
       
    const handleLogout = () => {
            loggedOutUi();
            logout();           
    }


    const loggedIn = () => (
            <>
                <div className="flex-item-navbar item-center-nav">
                    <Link className="anchor mid black" to='/dashboard'>Home</Link>
                    <Link className="anchor mid black" to='/price'>Price</Link>
                    <Link className="anchor mid black" to='/account'>Portfolio</Link>
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
        
        
        
        
        