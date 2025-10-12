import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaShieldAlt } from 'react-icons/fa'
import { FaSeedling } from 'react-icons/fa6'
import Bucket from '../../assets/basket-full-vegetables.png'


const Values = () => {


    const leftValue = values.slice(0,2).map(item => {
        return (
            <div className='flex md:flex-row-reverse flex-col md:items-center md:py-15 py-5'>
                <div>
                    <span className='flex justify-center items-center text-white text-3xl bg-gradient-to-b from-orange-400 to-orange-600 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div className='md:text-right md:pr-5'>
                    <h3 className='text-zinc-800 text-2xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600'>{item.para}</p>
                </div>
            </div>
        )
    })


    const rightValue = values.slice(2).map(item => {
        return (
            <div className='flex md:flex-row flex-col md:items-center md:py-15 py-5'>
                <div>
                    <span className='flex justify-center items-center text-white text-3xl bg-gradient-to-b from-orange-400 to-orange-600 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div className='md:pl-5'>
                    <h3 className='text-zinc-800 text-2xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600'>{item.para}</p>
                </div>
            </div>
        )
    })


    return (

        <div className='max-w-[1400px] mx-auto px-10 py-20'>

            <Heading ColorText='Our' SimpleText='Values' />


            <div className='flex  md:flex-row flex-col mt-10'>
                <div className='flex justify-between flex-col'>
                    {leftValue}
                </div>

                <div className='w-1/2 md:flex hidden'>
                    <img src={Bucket} alt="Bucket" />
                </div>

                <div className='flex justify-between flex-col'>
                    {rightValue}
                </div>
            </div>


        </div>
    )
}

export default Values

const values = [
    {
        id: 1,
        title: 'Trust',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart />
    },
    {
        id: 2,
        title: 'Always Fresh',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: 'Food Safety',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: '100% Organic',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaSeedling />
    },

]