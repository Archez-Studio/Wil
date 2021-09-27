import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../css/nav.css'

const Navbar = () => {
    return (
        <Router>
            <React.Fragment>
                <nav className="navbar">
                    <div className="wrapper">
                        <div className="logo">
                            <a href="">Wilons</a>
                        </div>
                        <div className="container">
                            <Link >Home</Link>
                            <Link >Rentals</Link>
                            <Link >Construction</Link>
                            <Link >Contacts</Link>
                        </div>
                        <div className="nav-icons">
                            <i>sign in</i>
                            <i>search</i>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        </Router>
    )
}

export default Navbar
