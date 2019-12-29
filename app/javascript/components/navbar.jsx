import React from 'react'
import {Link} from 'react-router-dom'

import NavbarModuleContainer from './NavbarModuleContainer';

class Navbar extends React.Component {
   
    
 
scrollFunction(){
        
        const navbar = document.querySelector('.flex-container-navbar');
        const logo = document.getElementById('logo');
        const items =document.querySelectorAll('.anchor');
        const btn = document.getElementById('signup')

        if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
            navbar.classList.add('scrolled');
            logo.classList.add('special-blue');
            items.forEach((e)=>e.classList.add('black'));
            btn.classList.add('special-green')
        } else {
            navbar.classList.remove('scrolled');
            logo.classList.remove('special-blue');
            items.forEach((e) => e.classList.remove('black'));
            btn.classList.remove('special-green');
        }
    }


    render() {
        {window.onscroll =  this.scrollFunction}
        
        const style = {
            color:'black'
        };
        return (
            <div className="flex-container-navbar" id='navbar'>
                <div className="flex-item-navbar logo white" id='logo'>
                    <Link to='/dashboard' style={store.getState().session.id ? style : null}>koinbase</Link>
                </div>
                <NavbarModuleContainer />
            </div>
        );
    }
}


export default Navbar

