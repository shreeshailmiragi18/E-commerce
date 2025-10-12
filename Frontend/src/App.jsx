import React from 'react'
import './App.css'
import Navigation from '../src/Customer/Components/Navigation/Navigation'
import HomePage from '../src/Customer/Pages/HomePage/HomePage'
import Footer from '../src/Customer/Components/Footer/Footer'

function App() {


  return (
    <div className="div">
      <Navigation />
      <div>
        <HomePage />
      </div>
      <Footer />
    </div>
    
  )
}

export default App
