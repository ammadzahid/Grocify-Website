import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2,TbMenu3 } from "react-icons/tb";

const Navbar = () => {
  const [showMenu,setShowMenu]= useState(false);
  const [IsScrolled,setIsScrolled]= useState(false);

  const toggleMenu=()=>{
    setShowMenu(!showMenu);
  }
  useEffect(()=>{
    const handleScroll = ()=>{
      setIsScrolled(window.scrollY >10)
    }
    window.addEventListener('scroll', handleScroll)
    return ()=>removeEventListener('scroll', handleScroll)
  },[])
  return (
    <div>
      <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${IsScrolled ? 'shadow-lg' : ''}`}>
        <nav className=' max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] flex justify-between items-center px-10'>

          <a href="#" className='text-3xl font-bold'>
            Gr<span className='uppercase text-amber-600'>o</span>cify
          </a>
          <ul className='md:flex w-2xl justify-evenly font-semibold tracking-wider text-zinc-800 hidden'>
            <li><a href="#" className='text-orange-500'>Home</a></li>
            <li><a href="#" className='hover:text-orange-500'>About Us</a></li>
            <li><a href="#" className='hover:text-orange-500'>Process</a></li>
            <li><a href="#" className='hover:text-orange-500'>Contact Us</a></li>
          </ul>
          <div className='flex items-center gap-x-5'>
            {/* input-field */}
            <div className='md:flex text-center p-1 border-2 border-orange-500 rounded-full hidden'>
              <input type="text" name="text" id="text" placeholder='Search....' autoComplete='off'
                className='flex-1 h-[5vh] px-3 focus:outline-none'
              />
              <button className='bg-gradient-to-b from-orange-500 to-red-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl '>
                <IoSearch className='' />
              </button>
            </div>

            {/* ---- */}
            <div className='flex gap-x-5'>
              <a href="#" className='text-zinc-800 text-2xl'>
                <FaHeart />
              </a>
              <a href="#" className='text-zinc-800 text-2xl'>
                <HiShoppingBag />
              </a>
              <a href="#" className='text-zinc-800 text-2xl md:hidden' onClick={toggleMenu}>

                {
                  showMenu ? <TbMenu3 /> :<TbMenu2 />
                }
                
                
              </a>
            </div>
          </div>

          {/* mobile menu */}
          <ul className={`flex text-center flex-col gap-y-15 bg-orange-500/15 font-bold tracking-wider text-zinc-800 md:hidden absolute
          top-80 p-10 -left-1/2 ${showMenu ? 'left-1/2' : ""} transform -translate-1/2 backdrop-blur-lg rounded-3xl text-lg transition-all duration-500`}>
            <li><a href="#" className='text-orange-500'>Home</a></li>
            <li><a href="#" className='hover:text-orange-500'>About Us</a></li>
            <li><a href="#" className='hover:text-orange-500'>Process</a></li>
            <li><a href="#" className='hover:text-orange-500'>Contact Us</a></li>
            <li className='flex text-center p-1 border-2 border-orange-500 rounded-full md:hidden'>
              <input type="text" name="text" id="text" placeholder='Search....' autoComplete='off'
                className='flex-1 h-[5vh] px-3 focus:outline-none'
              />
              <button className='bg-gradient-to-b from-orange-500 to-red-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl '>
                <IoSearch className='' />
              </button>
            </li>
          </ul>
        </nav>

      </header>
    </div>
  )
}

export default Navbar
