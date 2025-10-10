import React from 'react'
import Grocaery from '../../assets/grocery.png'
import Button from '../Button/Button'
const Hero = () => {
    return (
        <section>
            <div className='mt-25 max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center mt-5' >
                {/* Hero Content */}
                <div className='flex-1'>
                    <span className='bg-orange-100 px-5 py-2 rounded-full text-orange-500'>Export Best Quality</span>
                    <h1 className='md:text-7xl/20 text-5xl/14 mt-4 font-bold'>
                        Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span><br />In Your City
                    </h1>
                    <p className='text-zinc-600 md:text-lg text-md max-w-[550px] mt-7 mb-10 '>
                        Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                    </p>
                    <Button text='Shope Now'/>
                </div>
                {/* Hero Image */}
                <div className='flex-1 mt-10 max-w-[600px]'>
                    <img src={Grocaery} alt="image"/>
                </div>
            </div>
        </section>

    )
}

export default Hero
