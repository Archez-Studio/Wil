import React from 'react'
import Nav from '../components/HomePage/Nav'
import Showcase from '../components/HomePage/Showcase'
import FeaturedListings from '../components/HomePage/Featured-listings'
import Testimonial from '../components/HomePage/Testimonial'
import Construction from '../components/HomePage/Construction'
import Contact from '../components/HomePage/Contact'
import Footer from '../components/HomePage/Footer'

const HomePage = () => {
    return (
        <div>
            <Nav />
            <Showcase />
            <FeaturedListings />
            <Testimonial />
            <Construction />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage
