import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Hero from '../Hero/Hero.jsx'
import Category from '../Category/Category.jsx'
import Values from '../Values/Values.jsx'
import Product from '../Product/Product.jsx'
import Discount from '../Discount/Discount.jsx'
import Process from '../Process/Process.jsx'
import Testimonial from '../Testimonial/Testimonial.jsx'
import Footer from '../Footer/Footer.jsx'
const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Category />
        <Values />
        <Product />
        <Discount />
        <Process />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home
