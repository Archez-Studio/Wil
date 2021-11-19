import '../../css/Construction.css'

import {MdLocationPin, MdVerifiedUser} from 'react-icons/md'

import {FaStar,} from 'react-icons/fa'
import { IconContext } from "react-icons";
import Logo from '../../assets/LeftDes.png'
import React from 'react'

const Construction = () => {
    return (
        <div className="construction" style={{backgroundColor: 'white'}}>
            <div className="text-center">
                <p className="pc-1" style={{backgroundColor: 'white'}}>construction</p>
                <h1 className="hc-1" style={{backgroundColor: 'white'}}><b>Construction</b> Agencies</h1>
            </div>
            <div className="flex flex-num properties" style={{backgroundColor: 'white'}}>
            <div className="const-card">
                    <div className="flex">
                        <i className="verify">
                        <IconContext.Provider
                         value={{ color: 'green', size: '15px' }}
                        >                   
                          <MdVerifiedUser /> 
                    </IconContext.Provider>
                            Verified</i>
                        <i className="rating">
                        <IconContext.Provider
                         value={{ color: '#FFC107', size: '15px' }}
                        >                   
                          <FaStar /> 
                    </IconContext.Provider>
                            4.5</i>
                    </div>
                    <div className="const-icon">
                    <img src={Logo} alt="House1" width='290' height='140' padding="2px 5px 5px 0px"/>
                    </div>
                    <p className="p-location"><i>
                    <IconContext.Provider
                         value={{ color: 'black', size: '15px' }}
                        >                   
                          <MdLocationPin /> 
                    </IconContext.Provider>
                        </i>Nairobi, Kenya</p>
                    <h2 className="head-desc">ProHouse</h2>
                    <p className="p-tel">123 456 7890</p>
                    <p className="p-mail">agency@email.com</p>
                    <button className="prop-btn">4 Properties</button>
                </div>
                <div className="const-card">
                    <div className="flex">
                        <i className="verify">
                        <IconContext.Provider
                         value={{ color: 'green', size: '15px' }}
                        >                   
                          <MdVerifiedUser /> 
                    </IconContext.Provider>
                            Verified</i>
                        <i className="rating">
                        <IconContext.Provider
                         value={{ color: '#FFC107', size: '15px' }}
                        >                   
                          <FaStar /> 
                    </IconContext.Provider>
                            4.5</i>
                    </div>
                    <div className="const-icon">
                    <img src={Logo} alt="House1" width='290' height='140' padding="2px 5px 5px 0px"/>
                    </div>
                    <p className="p-location"><i>
                    <IconContext.Provider
                         value={{ color: 'black', size: '15px' }}
                        >                   
                          <MdLocationPin /> 
                    </IconContext.Provider>
                        </i>Nairobi, Kenya</p>
                    <h2 className="head-desc">ProHouse</h2>
                    <p className="p-tel">123 456 7890</p>
                    <p className="p-mail">agency@email.com</p>
                    <button className="prop-btn">4 Properties</button>
                </div>
                <div className="const-card">
                    <div className="flex">
                        <i className="verify">
                        <IconContext.Provider
                         value={{ color: 'green', size: '15px' }}
                        >                   
                          <MdVerifiedUser /> 
                    </IconContext.Provider>
                            Verified</i>
                        <i className="rating">
                        <IconContext.Provider
                         value={{ color: '#FFC107', size: '15px' }}
                        >                   
                          <FaStar /> 
                    </IconContext.Provider>
                            4.5</i>
                    </div>
                    <div className="const-icon">
                    <img src={Logo} alt="House1" width='290' height='140' padding="2px 5px 5px 0px"/>
                    </div>
                    <p className="p-location"><i>
                    <IconContext.Provider
                         value={{ color: 'black', size: '15px' }}
                        >                   
                          <MdLocationPin /> 
                    </IconContext.Provider>
                        </i>Nairobi, Kenya</p>
                    <h2 className="head-desc">ProHouse</h2>
                    <p className="p-tel">123 456 7890</p>
                    <p className="p-mail">agency@email.com</p>
                    <button className="prop-btn">4 Properties</button>
                </div>
            </div>
        </div>
    )
}

export default Construction
