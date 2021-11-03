import '../../css/nav.css'
import { FaUserCircle, FaSearch } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from 'react-router-dom'
import React from 'react'
import { BrowserRouter as Router, } from 'react-router-dom'

// import HomePage from '../../pages/HomePage'


// import Rentals from '../../pages/Rentals'

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
                            <Link to="/Construction">Construction</Link>
                            <Link to="/Contact">Contacts</Link>
                        </div>
                        <div className="nav-icons">
                            <IconContext.Provider
                                value={{ color: 'white', size: '25px', marginRight: '15px' }}
                            >                   
                                <a href="" > <FaUserCircle /> </a>
                            </IconContext.Provider>
                            
                            <IconContext.Provider
                                value={{ color: 'white', size: '25px', marginRight: '15px'}}
                                >                   
                                <a href="" > <FaSearch /> </a>
                            </IconContext.Provider>
                        </div>
                        <div className="ham-menu">
                            <IconContext.Provider
                                value={{ color: 'white', size: '25px', marginRight: '15px'}}
                                >                   
                                <a href="" > <BiMenuAltRight /> </a>
                            </IconContext.Provider>
                        </div>
                    </div>
                </nav>
                
            </React.Fragment>
        </Router>
    )
}

export default Navbar
