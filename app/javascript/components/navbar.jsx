import React from 'react';
import { Link } from "react-router-dom"
class Navbar extends React.Component {
    render() {
        return (
            <div className="flex-container-navbar">
                <div className="flex-item-navbar item-left-nav">GROINBASE</div>
                <div className="flex-item-navbar item-center-nav">middle</div>
                <div className="flex-item-navbar item-right-nav">
                    <div>
                        <Link className="btn-flat" to={'/signin'}>Sign in</Link>
                        <Link className="btn-flat" to={'/singup'}>Sign up</Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default Navbar;

