// Functuinal Components
// import React from "react";
import './Header.css'
// regular func
const Header = () => {
    return (
        // symantic HTML
        <header className='header-container'>
            <nav >
                <ul className='nav-container'>
                    <li className='nav-item'>
                        Home
                    </li>
                    <li className='nav-item'>
                        About
                    </li>
                    <li className='nav-item'>
                        Service
                    </li>
                    <li className='nav-item'>
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;