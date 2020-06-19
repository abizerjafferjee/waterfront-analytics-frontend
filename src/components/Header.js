import React from 'react'

import Logo from './Logo'

function Header() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Logo className="navbar-brand" />
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item" href="#">Collections</a>
                        <a className="nav-item" href="#contactUs">
                            <button className="contact-us">Contact Us</button>
                        </a>
                    </div>
                </div>
            </nav>
            <hr></hr>
        </header>
    )
}

export default Header