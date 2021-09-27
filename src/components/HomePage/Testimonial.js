import React from 'react'
import '../../css/testimonial.css'

const Testimonial = () => {
    return (
        <div className="testimonials">
            <div style={{marginBottom: '30px'}} className="flex">
                <h1 style={{textTransform: 'uppercase'}}>Our client say's</h1>
                <div className="border-div border-div-2"></div>
                <p>Lorem ipsum dolor sit amet <br/>consectetur, adipisicing elit. Incidunt</p>
            </div>
            <div className="testimonial-text flex">
                <div className="avatar-pic"></div>
                <div style={{padding: '20px'}}>
                    <i>Quotes</i>
                    <p style={{padding: '5px 0px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <h3 style={{color: '#02AD88'}}>Lisa Anna</h3>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
