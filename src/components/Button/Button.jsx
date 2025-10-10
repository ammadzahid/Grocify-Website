import React from 'react'

const Button = (data) => {
  return (
    <button type="submit" className=' text-white md:text-lg text-md bg-gradient-to-b from-orange-400 to-orange-500  py-2 px-5 rounded-[0.7rem]
     transition-all hover:scale-105 hover:to-orange-600 cursor-pointer '>
        {data.text}
    </button>
  )
}

export default Button
