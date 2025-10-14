import React, { useState } from 'react'
import Heading from '../../components/Heading/Heading.jsx'
import Productlist from '../Productlist/Productlist.js'
import Card from '../Card/Card.jsx'
import Button from '../Button/Button.jsx'

const Product = () => {
    const categories = ['All','Fruits','Vegetables','Dairy','SeaFood']
    
    const [activeTab,setactiveTab] =useState('All');

    let filteredItems = activeTab === 'All' ? Productlist : Productlist.filter(item=>item.category===activeTab)

    const renderCards = filteredItems.slice(0,8).map(product=>{
        return(

            <Card name={product.name} price={product.price} category={product.category} image={product.image} />
        )
    })
    return (
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
            <Heading ColorText='Our' SimpleText='Product' />

            {/* tables */}
            <div className='flex gap-2 justify-center mt-10'>
                {categories.map(categories => {
                    return (
                        <button key={categories} 
                        className={`bg-zinc-100 px-5 py-2 cursor-pointer items-center rounded-lg
                        ${activeTab===categories ? 'bg-gradient-to-b from-orange-400 to-orange-600 text-white hover:scale-103 font-semibold' : ''}`}
                        onClick={()=>setactiveTab(categories)} >

                            {categories}

                        </button>
                    )
                })}

            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 my-20 gap-9'>
                {renderCards}
            </div>
            <div className='w-fit mx-auto'>
                <Button text='View All'/>
            </div>
        </div>
    )
}

export default Product
