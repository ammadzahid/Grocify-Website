import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgImage from '../../assets/dairy-banner-min.jpg'
const Dairy = () => {
  return (
    <div>
      <CategoryPage title='Dairy & Eggs' bgImage={BgImage} categories={['Dairy']} />
    </div>
  )
}

export default Dairy
