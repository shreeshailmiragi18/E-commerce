import React from 'react'
import './App.css'
import Navigation from '../src/Customer/Components/Navigation/Navigation.jsx'
import HomePage from '../src/Customer/Pages/HomePage/HomePage'
import Footer from '../src/Customer/Components/Footer/Footer'
import Product from './Customer/Components/Product/Product'

function App() {


  return (
    <div className="div">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product/>
 
      </div>
      <Footer />
    </div>
    
  )
}

export default App
