import '../../css/nav.css'

import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { Link, Outlet } from "react-router-dom";

import { BiMenuAltRight } from "react-icons/bi";
import { IconContext } from "react-icons";
import React from 'react'

// import HomePage from '../../pages/HomePage'


// import Rentals from '../../pages/Rentals'

const Navbar = () => {
    return (
        
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
                
           
    )
}

export default Navbar
