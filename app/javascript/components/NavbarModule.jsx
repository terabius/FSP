import React from 'react'
import {Link} from 'react-router-dom'
import { loggedOutUi } from '../util/ui_util';


export default function NavbarModule({currentUserId, logout}) {

    const handleLogout = () => {
            loggedOutUi();
            logout();           
    }

    const loggedOut = () => (
        <>
        <div className="flex-item-navbar">
            <a className="anchor mid white">Prices</a>
            <a className="anchor mid white">Products</a>
            <a className="anchor mid white">Company</a>
        </div>

        <div className="flex-item-navbar">
            <div>
                <Link className="anchor white" to='/signin' id='sign'>Sign in</Link>
                <Link className="btn btn-flat" to='/signup'>Get started</Link>
            </div>
        </div>

        </>
        );
       



    const loggedIn = () => (
            <>
                <div className="flex-item-navbar">
                    <Link className="anchor mid black" to='/dashboard'>Home</Link>
                    <Link className="anchor mid black" to='/price'>Price</Link>
                    <Link className="anchor mid black" to='/account'>Portfolio</Link>
                </div>

                <div className="flex-item-navbar">
                    <div>
                        <button className='btn btn-flat' onClick={handleLogout}>Logout</button>
                    </div>
                </div>

            </>
    );
            
    return currentUserId ? loggedIn() : loggedOut();
}
        
        
        
        
        