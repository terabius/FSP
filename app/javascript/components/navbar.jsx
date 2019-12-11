import React from 'react'
import NavbarModuleContainer from './NavbarModuleContainer';

class Navbar extends React.Component {

    render() {
        const style = {
            color:'black'
        };
        return (
            <div className="flex-container-navbar">
                <div className="flex-item-navbar item-left-nav logo white">
                    <h1 style={store.getState().session.id ? style : null}>KROINBASE</h1>
                </div>
                <NavbarModuleContainer />
            </div>
        );
    }
}


export default Navbar

