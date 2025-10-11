import React from 'react'
import Heading from '../Heading/Heading'
import Button from '../Button/Button.jsx'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import Dairy from '../../assets/dairy-and-eggs.png'
import Meat from '../../assets/meat-and-seafood.png'
const Category = () => {

  const renderCard = category.map(card => {
    return (
      <div className='flex-1 '>
        <div className='w-full min-h-[30vh] relative -mb-10'>
          <img src={card.image} alt="" className='absolute bottom-0' />
        </div>
        <div className='bg-zinc-100 pt-17 p-8 rounded-4xl'>
          <h3 className='font-bold text-2xl text-zinc-800 '>{card.title}</h3>
          <p className=' text-zinc-600 my-3'>{card.discription}</p>
          <Button text='See All'/>
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
    image: FruitsCat
  },
  {
    id: 2,
    title: 'Dairy & Eggs',
    discription: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
    image: Dairy
  },
  {
    id: 3,
    title: 'Meat & SeaFood',
    discription: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
    image: Meat
  },
]