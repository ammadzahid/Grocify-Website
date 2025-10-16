import React from 'react'
import Heading from '../../components/Heading/Heading.jsx'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from 'react-icons/bs';

const Process = () => {
    let rendersteps = steps.map(items => {
        return (
            <div className={`flex-1 ${items.id % 2 === 0 ? 'md:-mt-50':''}`}>
                <span className='flex w-18 h-18 mx-auto md:mt-0 mt-10 bg-zinc-800 text-white  rounded-full outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed text-7xl'>{items.number}</span>
                <div className='flex items-center gap-x-4 md:mt-10 mt-5'>
                    <span className='flex justify-center items-center w-15 h-15 text-white text-3xl bg-gradient-to-b from-orange-400 to-orange-500 rounded-full'>{items.icone}</span>
                    <div className='flex-1 '>
                        <h4 className='text-zinc-800 text-2xl font-bold'>{items.title}</h4>
                        <p className='text-zinc-600 mt-2'>{items.para}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section className=''>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <div className='w-fit'>
                    <Heading ColorText='Our' SimpleText='Process' />
                </div>

                <div className='flex md:flex-row flex-col justify-center md:mt-20 md:pt-50 pt-10 '>
                    {rendersteps}
                </div>
            </div>
        </section>
    )
}

export default Process

const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        para: 'It is a long established fact that a reader',
        icone: <PiPlant />,
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: 'It is a long established fact that a reader',
        icone: <PiFactory />,
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Control',
        para: 'It is a long established fact that a reader',
        icone: <SlBadge />,
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: 'Logistics',
        para: 'It is a long established fact that a reader',
        icone: <BsTruck />
    }
]
