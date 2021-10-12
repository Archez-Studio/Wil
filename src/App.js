import Nav from '../src/components/HomePage/Nav'
import HomePage from '../src/pages/HomePage'
import Rentals from '../src/pages/Rentals'
import Contact from '../src/components/HomePage/Contact'
import Footer from '../src/components/HomePage/Footer'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Nav />
      <Router>
        <Switch> 
          <Route path="/" exact component={HomePage} />
          <Route path="/Rentals" component={Rentals} />
        </Switch>
      </Router>
    <Contact />
    <Footer />
    </>
  )
}

export default App
