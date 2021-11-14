import '../../css/showcase.css'
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"

/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/


const Showcase = () => {
    return (
        <Router>
            <React.Fragment>
                <div  className="showcase">
                    <div className="overlay">
                        
                    </div>
                    <div className="showcase-text">
                        <p>Find Your <br/>Prestigious Home</p>
                        <button ><a style={{ color: 'white', width: "100%", height: "100%" }} href="#Listing">Start Now</a></button>
                    
                        <div className="tabs">
                            <Link className="tab" to="/">
                                Buy
                            </Link>
                            <Link className="tab" to="/">
                                Sell
                            </Link>
                            <Link className="tab" to="/">
                                Rent
                            </Link>
                            <Link className="tab" to="/">
                                Lease
                            </Link>
                        </div>
                        <div className="categories">
                            <div className="category category-1">
                                <label>City/Street</label><br/>
                                <input type="text" name="name" placeholder="Enter City"/>
                            </div><br/>
                            <div className="category category-2">
                                <label>Apartment Type</label><br/>
                                <input type="text" name="name" placeholder="Deluxe Portion"/>
                            </div>
                            <div className="category category-3">
                                <label>Price Range</label><br/>
                                <input type="number" name="name" placeholder="Min Price - Max Price"/>
                            </div>
                            <div className="category category-4">
                            <IconContext.Provider
                                value={{ color: 'white', size: '25px', marginRight: '15px' }}
                            >                   
                                 
                            </IconContext.Provider>
                                <button className="search-button">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </Router>
    )
}

export default Showcase
