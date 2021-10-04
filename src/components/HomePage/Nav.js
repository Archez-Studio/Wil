import '../../css/nav.css'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import HomePage from '../../pages/HomePage'
import { Link } from 'react-router-dom'
import React from 'react'
import Rentals from '../../pages/Rentals'

const Navbar = () => {
    return (
        <Router>
            <React.Fragment>
                <nav className="navbar">
                    <div className="wrapper">
                        <div className="logo">
                            <a href="/">Wilons</a>
                        </div>
                        <div className="container">
                            <Link to='/'>Home</Link>
                            <Link to="/Rentals">Rentals</Link>
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
