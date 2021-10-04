import '../../css/contact.css'

import { FaFacebook, FaGoogle, FaTwitter, FaVimeo } from 'react-icons/fa';

import { IconContext } from "react-icons";
import Logo from '../../assets/Logo.png'
import React from 'react'

const Contact = () => {
    return (

        <div className="contact">
            <div className="container-md flex">
                <div className="wilons-description mid-div">
                    <img src={Logo} alt="logo"/>
                    
                    <p style={{padding: '15px 0 40px', marginRight: '100px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <div className="social-icons flex">
                    <IconContext.Provider
                         value={{ color: 'white', size: '50px' }}
                        >                   
                         <a href="#" > <FaFacebook /> </a>
                    </IconContext.Provider>

                    <IconContext.Provider
                         value={{ color: 'white', size: '50px' }}
                        >                   
                        <a href="#" > <FaTwitter /> </a>
                    </IconContext.Provider>

                    <IconContext.Provider
                         value={{ color: 'white', size: '50px' }}
                        >                   
                         <a href="#" > <FaGoogle /> </a>
                    </IconContext.Provider>
                    
                    <IconContext.Provider
                         value={{ color: 'white', size: '50px' }}
                        >                   
                         <a href="#" > <FaVimeo /> </a>
                    </IconContext.Provider>
                
                    </div>
                </div>
                <div className="contact-form mid-div">
                    <h2 style={{color: '#02AD88', textTransform: 'uppercase'}}>Contact Me</h2>
                    <div className="flex">
                        <input type="text" name="name" placeholder="Enter Your Name" style={{marginRight: '25px'}}></input>
                        <input type="text" name="email" placeholder="Enter Your Email"></input>
                    </div>
                    <input type="text" name="message" placeholder="Enter Your Message"></input>
                    <button className="in-touch">Get In Touch</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
