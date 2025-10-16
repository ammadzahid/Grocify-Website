import React from 'react'

const Heading = (data) => {
    return (
        <div className='mx-auto w-fit'>
            <h2 className='md:text-5xl text-zinc-800 text-4xl font-bold'><span className='text-orange-500'>{data.ColorText}</span> {data.SimpleText}</h2>
            <div className='md:w-34 w-30 h-1 bg-orange-300 md:pt-2 pt-1  ml-auto md:mt-4 mt-3'></div>
        </div>
    )
}

export default Heading
