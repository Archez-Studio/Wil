import { Link, Route, Routes } from 'react-router-dom';

import Construction from '../src/pages/Construction'
import Contact from '../src/components/HomePage/Contact'
import Footer from '../src/components/HomePage/Footer'
import HomePage from '../src/pages/HomePage'
import Nav from '../src/components/HomePage/Nav'
import React from 'react'
import Rentals from '../src/pages/Rentals'

const App = () => {
  return (
    <>
    <Nav />
      <Routes>
            <Route path="/" exact component={HomePage} />
           <Route path="/Rentals" component={Rentals} />
          <Route path="/Construction" component={Construction} />
       </Routes>
    <Contact />
    <Footer />
    </>
  )
}

export default App
