import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa6'
import Button from '../Button/Button.jsx'

const Card = ({name,price,image}) => {
  return (
    <div className='bg-zinc-100 p-5 rounded-2xl '>

      <div className='flex justify-between'> 
        <span className='text-3xl text-zinc-300 cursor-pointer'><FaHeart /></span>
        <button className='text-white md:text-lg text-md bg-gradient-to-b from-orange-400 to-orange-500  py-3 px-4 rounded-[0.7rem] cursor-pointer '><FaPlus /></button>
      </div>

      <div className='h-50 w-full '> 
        <img src={image} alt="" className='w-full h-full object-contain mx-auto'/>
      </div>

      <div className='py-3 text-center'>
        <h3 className='text-xl font-semibold' >{name}</h3>
        <p className='text-xl font-bold mb-2'>${price.toFixed(2)}</p>
        <Button text='Shop Now'/>
      </div>

    </div>
  )
}

export default Card
