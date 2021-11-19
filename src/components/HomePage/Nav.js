import '../../css/nav.css'

import { FaSearch, FaUserCircle } from 'react-icons/fa';
import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { AiOutlineUser } from 'react-icons/ai'
import { BiMenuAltRight } from "react-icons/bi";
import Construction from '../../pages/Construction'
import { GoSearch } from 'react-icons/go'
import HomePage from '../../pages/HomePage'
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom'
import Rentals from '../../pages/Rentals'

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
                                <a href="#Contact">Contacts</a>
                        </div>
                        <div className="nav-icons">
                            <IconContext.Provider
                                value={{ color: 'white', size: '15px', marginRight: '15px' }}
                            >                   
                                <a href="" > <AiOutlineUser /> </a>
                            </IconContext.Provider>
                            
                            <IconContext.Provider
                                value={{ color: 'white', size: '15px', marginRight: '15px'}}
                                >                   
                                <a href="" > <GoSearch /> </a>
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

                <Switch>
                    <Route path="/Rentals">
                        <Rentals />
                    </Route>
                    <Route path="/Construction">
                        <Construction />
                    </Route>
                    
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
                
            </React.Fragment>
        </Router>
    )
}

export default Navbar
