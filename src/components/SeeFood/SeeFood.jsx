import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgImage from '../../assets/seafood-banner-min.jpg'
const SeeFood = () => {
  return (
    <div>
      <CategoryPage title='Meat & SeaFood' bgImage={BgImage} categories={['Meat','SeaFood']}/>
    </div>
  )
}

export default SeeFood
