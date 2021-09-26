import React from 'react'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom"
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/
import '../../css/showcase.css'

const Showcase = () => {
    return (
        <Router>
            <React.Fragment>
                <div  className="showcase">
                    <div className="overlay">
                        
                    </div>
                    <div className="showcase-text">
                        <p>Find Your <br/>Prestigious Home</p>
                        <button>Start Now</button>
                    
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
                            </div>
                            <div className="category category-2">
                                <label>Apartment Type</label><br/>
                                <input type="text" name="name" placeholder="Deluxe Portion"/>
                            </div>
                            <div className="category category-3">
                                <label>Price Range</label><br/>
                                <input type="number" name="name" placeholder="Min Price - Max Price"/>
                            </div>
                            <div className="category category-4">
                                <i icon="plus" style={{color: "gray", fontSize: "15px", paddingRight: "25px"}}>Advanced Filter</i>
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
