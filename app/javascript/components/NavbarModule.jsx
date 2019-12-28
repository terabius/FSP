import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { loggedOutUi } from '../util/ui_util';


export default function NavbarModule({currentUserId, logout}) {

    const handleLogout = () => {
            loggedOutUi();
            logout();           
    }

    const loggedOut = () => (
        <>
        <div className="flex-item-navbar">
            <a className="anchor white">Prices</a>
            <a className="anchor white">Products</a>
            <a className="anchor white">Company</a>
        </div>

        <div className="flex-item-navbar">
            <div>
                <Link className="anchor white" to='/signin' id='sign'>Sign in</Link>
                <Link className="btn btn-flat" to='/signup' id='signup'>Get started</Link>
            </div>
        </div>

        </>
        );
       



    const loggedIn = () => (
            <>
                <div className="flex-item-navbar">
                    <NavLink className="anchor logged black" activeClassName="nav-selected" to='/dashboard'>Home</NavLink>
                    <NavLink className="anchor logged black" activeClassName="nav-selected" to='/account'>Portfolio</NavLink>
                    <NavLink className="anchor logged black" activeClassName="nav-selected" to='/price'>Prices</NavLink>
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
        
        
        
        
        