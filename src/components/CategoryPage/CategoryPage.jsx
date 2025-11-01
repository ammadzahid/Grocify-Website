import React from 'react'
import Productlist from '../Productlist/Productlist.js'
import Card from '../Card/Card'
import Banner from '../Banner/Banner'


const CategoryPage = ({title,bgImage,categories=[]}) => {


    const filterProducts = categories.includes('All')?
        Productlist :
        Productlist.filter(product => 
            categories.includes(product.category)
        )
    const randerProducts = filterProducts.map(product => {
        return (
            <Card
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
            />
        )
    })

    return (

        <div>
            <Banner title={title} bgImage = {bgImage} />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-9 w-[1400px] mx-auto my-10'>
                {randerProducts}
            </div>
        </div>
    )
}

export default CategoryPage
