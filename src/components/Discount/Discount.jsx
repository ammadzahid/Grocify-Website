import React from 'react'
import Button from '../Button/Button.jsx'
import ImageBg from '../../assets/fresh-fruits.png'
const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-contain bg-no-repeat bg-right' style={{backgroundImage: `url(${ImageBg})`}}>
      <div className='flex md:bg-transparent bg-zinc-100 md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-10'>
        <span className='md:text-9xl text-5xl text-orange-500 font-bold transform md:rotate-270 h-fit md:self-center'>20%</span>
        <div className='max-w-[700px]'>
          <h3 className='text-zinc-800 md:text-7xl text-4xl font-bold mt-2'>First Order Discount!</h3>
          <p className='text-zinc-600 my-6 '>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
          <Button text='Get a Discount'/>
          
        </div>
      </div>
    </section>
  )
}

export default Discount
