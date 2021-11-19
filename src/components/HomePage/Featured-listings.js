import '../../css/FeaturedListings.css'

import { FaRegHeart, FaRegImage, FaRetweet } from 'react-icons/fa';

import Home from '../../assets/home1 (1).jpg'
import { IconContext } from "react-icons";
import React from 'react'

const FeaturedListings = () => {
    return (
        <div id="Listing" className="FeaturedListings">
            <div className="container-md ">
                <div className="flex margin-listing">
                    <div className="heading-listings">
                        <h3>Featured Listings</h3>
                    </div>
                    <div className="border-div">
                        
                    </div>
                    <div className="heading-description">
                        <p style={{opacity: '.7'}}>Lorem ipsum dolor sit amet <br/> consectetur, adipisicing elit. Incidunt</p>
                    </div>
                </div>
                <div className="flex flex-num">
                    <div className="detail-box">
                        <div className="showbox">
                            <p style={{padding: '2px 5px 5px 0px', textAlign: 'right', backgroundColor: '#22313F', margin: '15px 15px 5px 70%', }}>For Sale</p>
                            <img src={Home} alt="House1" width='300' height='150' padding="2px 5px 5px 0px"/>
                        </div>
                        <div className="show-details flex">
                            <p className="p-1">The coach house</p>
                            <p className="p-2">$478,000</p>
                        </div>
                        <div className="show-details-2 flex">
                            <p className="p-3">Beds: 4</p>
                            <p className="p-3">Baths: 2</p>
                            <p className="p-5">Sq.ft: 1200</p>
                            <div className="p-4"></div>
                            <p className="p-6 p-3">$2,600/Sq.ft</p>
                        </div>
                        <p className="p-7">The point of using lorem ipsum is</p>
                        <hr/>
                        <button className="details-btn">Details</button>
                        <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" style={{ marginLeft: '35%' }}> <FaRegHeart /> </a>
                       </IconContext.Provider> 

                       <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" > <FaRegImage /> </a>
                       </IconContext.Provider>
                       
                       <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" > <FaRetweet /> </a>
                       </IconContext.Provider>
                    </div>
                    <div className="detail-box">
                        <div className="showbox">
                            <p style={{padding: '2px 5px 5px 0px', textAlign: 'right', backgroundColor: '#22313F', margin: '15px 15px 5px 70%', }}>For Sale</p>
                            <img src={Home} alt="House1" width='300' height='150' padding="2px 5px 5px 0px"/>
                        </div>
                        <div className="show-details flex">
                            <p className="p-1">The coach house</p>
                            <p className="p-2">$478,000</p>
                        </div>
                        <div className="show-details-2 flex">
                            <p className="p-3">Beds: 4</p>
                            <p className="p-3">Baths: 2</p>
                            <p className="p-5">Sq.ft: 1200</p>
                            <div className="p-4"></div>
                            <p className="p-6 p-3">$2,600/Sq.ft</p>
                        </div>
                        <p className="p-7">The point of using ipsum lorem is</p>
                        <hr/>
                        <button className="details-btn">Details</button>
                        <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" style={{ marginLeft: '35%' }}> <FaRegHeart /> </a>
                       </IconContext.Provider> 

                       <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" > <FaRegImage /> </a>
                       </IconContext.Provider>
                       
                       <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" > <FaRetweet /> </a>
                       </IconContext.Provider>
                    </div>
                    <div className="detail-box">
                        <div className="showbox">
                            <p style={{padding: '2px 5px 5px 0px', textAlign: 'right', backgroundColor: '#22313F', margin: '15px 15px 5px 70%', }}>For Sale</p>
                            <img src={Home} alt="House1" width='300' height='150' padding="2px 5px 5px 0px"/>
                        </div>
                        <div className="show-details flex">
                            <p className="p-1">The coach house</p>
                            <p className="p-2">$478,000</p>
                        </div>
                        <div className="show-details-2 flex">
                            <p className="p-3">Beds: 4</p>
                            <p className="p-3">Baths: 2</p>
                            <p className="p-5">Sq.ft: 1200</p>
                            <div className="p-4"></div>
                            <p className="p-6 p-3">$2,600/Sq.ft</p>
                        </div>
                        <p className="p-7">The point of using ipsum lorem is</p>
                        <hr/>
                        <button className="details-btn">Details</button>
                        <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" style={{ marginLeft: '35%' }}> <FaRegHeart /> </a>
                       </IconContext.Provider> 

                       <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" > <FaRegImage /> </a>
                       </IconContext.Provider>
                       
                       <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" > <FaRetweet /> </a>
                       </IconContext.Provider>
                    </div>
                    <div className="detail-box">
                        <div className="showbox">
                            <p style={{padding: '2px 5px 5px 0px', textAlign: 'right', backgroundColor: '#22313F', margin: '15px 15px 5px 70%', }}>For Sale</p>
                            <img src={Home} alt="House1" width='300' height='150' padding="2px 5px 5px 0px"/>
                        </div>
                        <div className="show-details flex">
                            <p className="p-1">The coach house</p>
                            <p className="p-2">$478,000</p>
                        </div>
                        <div className="show-details-2 flex">
                            <p className="p-3">Beds: 4</p>
                            <p className="p-3">Baths: 2</p>
                            <p className="p-5">Sq.ft: 1200</p>
                            <div className="p-4"></div>
                            <p className="p-6 p-3">$2,600/Sq.ft</p>
                        </div>
                        <p className="p-7">The point of using ipsum lorem is</p>
                        <hr/>
                        <button className="details-btn">Details</button>
                        <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" style={{ marginLeft: '35%' }}> <FaRegHeart /> </a>
                       </IconContext.Provider> 

                       <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" > <FaRegImage /> </a>
                       </IconContext.Provider>
                       
                       <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" > <FaRetweet /> </a>
                       </IconContext.Provider>
                    </div>
                    <div className="detail-box">
                        <div className="showbox">
                            <p style={{padding: '2px 5px 5px 0px', textAlign: 'right', backgroundColor: '#22313F', margin: '15px 15px 5px 70%', }}>For Sale</p>
                            <img src={Home} alt="House1" width='300' height='150' padding="2px 5px 5px 0px"/>
                        </div>
                        <div className="show-details flex">
                            <p className="p-1">The coach house</p>
                            <p className="p-2">$478,000</p>
                        </div>
                        <div className="show-details-2 flex">
                            <p className="p-3">Beds: 4</p>
                            <p className="p-3">Baths: 2</p>
                            <p className="p-5">Sq.ft: 1200</p>
                            <div className="p-4"></div>
                            <p className="p-6 p-3">$2,600/Sq.ft</p>
                        </div>
                        <p className="p-7">The point of using ipsum lorem is</p>
                        <hr/>
                        <button className="details-btn">Details</button>
                        <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" style={{ marginLeft: '35%' }}> <FaRegHeart /> </a>
                       </IconContext.Provider> 

                       <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" > <FaRegImage /> </a>
                       </IconContext.Provider>
                       
                       <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" > <FaRetweet /> </a>
                       </IconContext.Provider>
                    </div>
                    <div className="detail-box">
                        <div className="showbox">
                            <p style={{padding: '2px 5px 5px 0px', textAlign: 'right', backgroundColor: '#22313F', margin: '15px 15px 5px 70%', }}>For Sale</p>
                            <img src={Home} alt="House1" width='300' height='150' padding="2px 5px 5px 0px"/>
                        </div>
                        <div className="show-details flex">
                            <p className="p-1">The coach house</p>
                            <p className="p-2">$478,000</p>
                        </div>
                        <div className="show-details-2 flex">
                            <p className="p-3">Beds: 4</p>
                            <p className="p-3">Baths: 2</p>
                            <p className="p-5">Sq.ft: 1200</p>
                            <div className="p-4"></div>
                            <p className="p-6 p-3">$2,600/Sq.ft</p>
                        </div>
                        <p className="p-7">The point of using ipsum lorem is</p>
                        <hr/>
                        <button className="details-btn">Details</button>
                        <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" style={{ marginLeft: '35%' }}> <FaRegHeart /> </a>
                       </IconContext.Provider> 

                       <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" > <FaRegImage /> </a>
                       </IconContext.Provider>
                       
                       <IconContext.Provider
                         value={{ color: 'black', size: '15px', marginLeft: '50px' }}
                        >                   
                         <a href="#" > <FaRetweet /> </a>
                       </IconContext.Provider>
                    </div>
                </div>
                <button className="btn-props">More Properties</button>
            </div>
        </div>
    )
}

export default FeaturedListings
