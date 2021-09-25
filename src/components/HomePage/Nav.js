import React from 'react'
import '../../css/nav.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="wrapper">
                <div className="logo">
                    <a href="">Wilons</a>
                </div>
                <div className="container">
                    <a href="">Home</a>
                    <a href="">Rentals</a>
                    <a href="">Construction</a>
                    <a href="">Contacts</a>
                </div>
                <div className="nav-icons">
                    <i>sign in</i>
                    <i>search</i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
