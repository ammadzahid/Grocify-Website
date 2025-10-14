import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Hero from '../Hero/Hero.jsx'
import Category from '../Category/Category.jsx'
import Values from '../Values/Values.jsx'
import Product from '../Product/Product.jsx'
const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Category />
        <Values />
        <Product />
    </div>
  )
}

export default Home
