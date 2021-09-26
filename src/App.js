import React from 'react'
import Nav from './components/HomePage/Nav'
import Showcase from './components/HomePage/Showcase'
import FeaturedListings from './components/HomePage/Footer'
import Footer from './components/HomePage/Featured-listings'


const App = () => {
  return (
    <div>
      <Nav />
      <Showcase />
      <FeaturedListings />
      <Footer />
    </div>
  )
}

export default App
