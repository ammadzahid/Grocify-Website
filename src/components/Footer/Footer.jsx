import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Footer = () => {
    return (
        <footer className='bg-zinc-100'>
            <div className=' flex md:flex-row flex-col flex-wrap max-w-[1400px] mx-auto px-10 py-20 md:gap-0 gap-10'>
                <div className='flex-1 md:basis-[300px]'>
                    <a href="#" className='text-3xl font-bold'>
                        Gr<span className='uppercase text-amber-600'>o</span>cify
                    </a>
                    <p className='text-zinc-600 mt-6 max-w-[350px]'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                    <p className='text-zinc-800 mt-6'>2025 &copy; all Rights Reserverd</p>
                </div>
                <div className='flex-1'>
                    <ul className='text-zinc-800'>
                        <li><h5 className='text-2xl font-semibold'>Company</h5></li>
                        <li className='mt-6'><a href="" className='hover:text-orange-500'>About</a></li>
                        <li className='mt-6'><a href="" className='hover:text-orange-500'>FAQ'S</a></li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <ul className='text-zinc-800'>
                        <li><h5 className='text-2xl font-semibold'>Support</h5></li>
                        <li className='mt-6'><a href="" className='hover:text-orange-500'>Support Center</a></li>
                        <li className='mt-6'><a href="" className='hover:text-orange-500'>Feedback</a></li>
                        <li className='mt-6'><a href="" className='hover:text-orange-500'>Contact Us</a></li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <h5 className='text-2xl font-semibold'>Stay Connected</h5>
                    <p className='text-zinc-600 mt-6'>
                        Questions or Feedback? we'd love to heae form you.
                    </p>
                    <div className='flex mt-6 bg-white'>
                        <input type="email" name="email" id="email" autoComplete='off' placeholder='Email Address' className='my-auto h-[5vh] flex-1 focus:outline-none p-3' />
                        <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-2xl p-2 rounded-xl'>
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
