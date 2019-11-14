import React from 'react'
import { Link } from "react-router-dom"
import NavbarModuleContainer from './NavbarModuleContainer';

class Navbar extends React.Component {

    render() {
        return (
            <div className="flex-container-navbar">
                <div className="flex-item-navbar item-left-nav logo white"><h1>GROINBASE</h1></div>
                <NavbarModuleContainer />
            </div>
        );
    }
}


export default Navbar

