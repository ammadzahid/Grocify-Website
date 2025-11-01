import React from 'react'

const Banner = ({title, bgImage}) => {
  return (
    <div className= 'h-[50vh] mt-25 items-center flex justify-center bg-center bg-cover relative' style={{ backgroundImage : `url(${bgImage})` }} >
      <h2 className='md:text-5xl text-2xl  bg-white/60  rounded-xl p-5 text-zinc-800 font-bold z-10' >{title}</h2>
      <div className='bg-black/60 inset-0 absolute'></div>
    </div>
  )
}

export default Banner
