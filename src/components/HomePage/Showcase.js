import '../../css/showcase.css'
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/


const Showcase = () => {
    return (
        <Router>
            <React.Fragment>
                <div  className="showcase">
                    <div className="overlay"></div>
                    <div className="showcase-text">
                        <p>Find Your <br/>Prestigious Home</p>
                        <button ><a style={{ color: 'white', width: "100%", height: "100%" }} href="#Listing">Start Now</a></button>
                    
                        <Tabs className="tabs">
                            <TabList>
                                <Tab className="tab" to="/">
                                    Buy
                                </Tab>
                                <Tab className="tab" to="/">
                                    Sell
                                </Tab>
                                <Tab className="tab" to="/">
                                    Rent
                                </Tab>
                                <Tab className="tab" to="/">
                                    Lease
                                </Tab>
                            </TabList>

                            <TabPanel>
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
                            </TabPanel>
                            <TabPanel id="tabpanel-2">
                                <div className="categories">
                                    <div className="category category-1">
                                        <label>Location</label><br/>
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
                            </TabPanel>
                            <TabPanel>
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
                            </TabPanel>
                            <TabPanel>
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
                            </TabPanel>
                            
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        </Router>
    )
}

export default Showcase
