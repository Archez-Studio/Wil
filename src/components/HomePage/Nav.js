import '../../css/nav.css'
import { FaUserCircle, FaSearch } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { BrowserRouter as Router, } from 'react-router-dom'


// import HomePage from '../../pages/HomePage'


// import Rentals from '../../pages/Rentals'

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
      }

    return (
        <Router>
            <React.Fragment>
                <nav className="navbar navBar">
                    <div className="wrapper">
                        <div className="logo">
                            <a href="/">Wilons</a>
                        </div>
                        <div className={`container menuNav ${navbarOpen ? " showMenu" : ""}`}>
                            
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
                        <div id="humbergerMenu" className="ham-menu">
                            <IconContext.Provider
                                value={{ color: 'white', size: '25px', marginRight: '15px'}}
                                >                   
                                <button onClick={handleToggle} style={{ backgroundColor: 'transparent', border: 'none', fontSize: '0' }}>{navbarOpen ? "Close" : "Open"} <BiMenuAltRight /> </button>
                            </IconContext.Provider>
                            <div className="arrow" style={{display: 'none', position: 'absolute'}}></div>
                        </div>
                    </div>
                </nav>
                
            </React.Fragment>
        </Router>
    )
}

export default Navbar
