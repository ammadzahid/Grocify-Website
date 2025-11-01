import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgImage from '../../assets/fruits-banner-min.jpg'
const Fruits = () => {
  return (
    <div>
      <CategoryPage title='Fruits & Veggies' bgImage={BgImage} categories={['Fruits','Vegetables']} />
    </div>
  )
}

export default Fruits
