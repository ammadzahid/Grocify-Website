import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies-min.png'
import Dairy from '../../assets/dairy-and-eggs-min.png'
import Meat from '../../assets/meat-and-seafood-min.png'
import { Link } from 'react-router-dom'
const Category = () => {

  const renderCard = category.map(card => {
    return (
      <div className='flex-1 ' key={card.id}>
        <div className='w-full min-h-[30vh] relative -mb-10'>
          <img src={card.image} alt="" className='absolute bottom-0' />
        </div>
        <div className='bg-zinc-100 pt-17 p-8 rounded-4xl'>
          <h3 className='font-bold text-2xl text-zinc-800 '>{card.title}</h3>
          <p className=' text-zinc-600 my-3'>{card.discription}</p>
          <Link to={card.path} className=' text-white md:text-lg text-md bg-gradient-to-b from-orange-400 to-orange-500  py-2 px-5 rounded-[0.7rem]
     transition-all hover:scale-105 hover:to-orange-600 cursor-pointer '>See All</Link>
        </div>
      </div>
    )
  })



  return (

    <section>
      <div className='py-20 max-w-[1400px] mx-auto px-10' >
        <Heading ColorText='Shope' SimpleText='by Category' />

        <div className='flex md:flex-row flex-col gap-10 mt-15'>
          {renderCard}
        </div>
      </div>
    </section >
  )
}

export default Category

const category = [
  {
    id: 1,
    title: 'Fruits & Veggies',
    discription: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
    image: FruitsCat,
    path: '/fruits'
  },
  {
    id: 2,
    title: 'Dairy & Eggs',
    discription: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
    image: Dairy,
    path: '/dairy'
  },
  {
    id: 3,
    title: 'Meat & SeaFood',
    discription: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
    image: Meat,
    path: '/seefood'
  },
]