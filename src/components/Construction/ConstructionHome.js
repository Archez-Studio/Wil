import '../../css/rentals-home.css'
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"

/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/


const Showcase = () => {
    return (
        <Router>
            <React.Fragment>
                <div  className="showcase-home">
                    <div className="showcase-text show-rentals-txt">
                        <p>Let's help you<br/>build</p>
                        <p className="rentals-txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt</p>
                        <button>Start Now</button>
                    </div>
                </div>
            </React.Fragment>
        </Router>
    )
}

export default Showcase
