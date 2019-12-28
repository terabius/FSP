import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { loggedOutUi } from '../util/ui_util';

import avatar from '../../assets/images/avatar.jpeg'


export default function NavbarModule({currentUserId, logout}) {
    
    const popModalOn = () =>{

        const dropdown = document.getElementById('dropdown-modal-container');
        console.log(dropdown);
        dropdown.style.visibility = 'visible';
        
    }
    const popModalOff = () => {

        const dropdown = document.getElementById('dropdown-modal-container');
        console.log(dropdown);
        dropdown.style.visibility = 'hidden';

    }

    
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
                    <div className="logged">
                        <button className='btn btn-flat' disabled>Trade</button>
                        <div className='navbar-bell'>
                            <svg width="17" height="19" viewBox="0 0 17 19" fill="none">
                                <path d="M8.57 18.356c-1.65 0-3-1.35-3-3h1.25c0 .96.79 1.75 1.75 1.75s1.75-.79 1.75-1.75h1.25c0 1.65-1.35 3-3 3zM14.56 14.356H2.58c-.52 0-1.01-.25-1.32-.67-.3-.42-.39-.97-.22-1.46l2.84-8.53c.67-2 2.53-3.34 4.63-3.34h.12c2.1 0 3.96 1.34 4.62 3.33l2.84 8.53c.16.49.08 1.04-.22 1.46-.3.43-.79.68-1.31.68zM8.51 1.606c-1.56 0-2.94 1-3.44 2.48l-2.84 8.53c-.05.16.01.28.05.34s.14.16.3.16h11.98c.17 0 .26-.1.3-.16.04-.06.1-.18.05-.34l-2.84-8.53a3.625 3.625 0 00-3.44-2.48h-.12z" fill="currentColor">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <div id="dropdown-navbar" onClick={popModalOn}>
                                <a>
                                    <img src={avatar} alt="avatar" width='32px' height='32px' />
                                </a>
                            </div>

                            <div id='dropdown-modal-container' onClick={popModalOff}>   
                                <div className="dropdown-modal">
                                  <div>First Last</div>
                                  <a>Settings</a>
                                  <a>Tools</a>
                                  <a>Help</a>
                                  <a onClick={handleLogout} id='signout'>Sign out</a>
                                </div> 
                            </div> 
                            
                        </div>
                    </div>
                </div>
            
            </>
    );
            
    return currentUserId ? loggedIn() : loggedOut();
}
        
        
        
        
        