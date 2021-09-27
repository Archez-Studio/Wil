import React from 'react'
import '../../css/Construction.css'

const Construction = () => {
    return (
        <div className="construction">
            <div className="text-center">
                <p className="pc-1">construction</p>
                <h1 className="hc-1"><b>Construction</b> Agencies</h1>
            </div>
            <div className="flex flex-around">
                <div className="const-card">
                    <div className="flex">
                        <i className="verify">Verified</i>
                        <i className="rating">4.5</i>
                    </div>
                    <div className="const-icon">

                    </div>
                    <p className="p-location"><i></i>Nairobi, Kenya</p>
                    <h2 className="head-desc">ProHouse</h2>
                    <p className="p-tel">123 456 7890</p>
                    <p className="p-mail">agency@email.com</p>
                    <button className="prop-btn">4 Properties</button>
                </div>
                <div className="const-card">
                    <div className="flex">
                        <i className="verify">Verified</i>
                        <i className="rating">4.5</i>
                    </div>
                    <div className="const-icon">

                    </div>
                    <p className="p-location"><i></i>Nairobi, Kenya</p>
                    <h2 className="head-desc">ProHouse</h2>
                    <p className="p-tel">123 456 7890</p>
                    <p className="p-mail">agency@email.com</p>
                    <button className="prop-btn">4 Properties</button>
                </div>
                <div className="const-card">
                    <div className="flex">
                        <i className="verify">Verified</i>
                        <i className="rating">4.5</i>
                    </div>
                    <div className="const-icon">

                    </div>
                    <p className="p-location"><i></i>Nairobi, Kenya</p>
                    <h2 className="head-desc">ProHouse</h2>
                    <p className="p-tel">123 456 7890</p>
                    <p className="p-mail">agency@email.com</p>
                    <button className="prop-btn">4 Properties</button>
                </div>
            </div>
            <button className="btn-more-props">More Properties</button>
        </div>
    )
}

export default Construction
