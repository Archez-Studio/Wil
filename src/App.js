import React from 'react'
import Nav from './components/HomePage/Nav'
import Showcase from './components/HomePage/Showcase'
import FeaturedListings from './components/HomePage/Footer'
import Testimonial from './components/HomePage/Testimonial'
import Footer from './components/HomePage/Featured-listings'


const App = () => {
  return (
    <div>
      <Nav />
      <Showcase />
      <FeaturedListings />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
