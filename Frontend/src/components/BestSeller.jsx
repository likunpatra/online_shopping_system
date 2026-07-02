import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const [bestSeller,setBestSeller]=useState([])
    const {products}=useContext(ShopContext)

    useEffect(()=>{
        const bestProduct=products.filter((item)=>item.bestseller)
        setBestSeller(bestProduct.slice(0,5))
    },[products])
  return (
    <div className='my-10  bg-white px-10 py-10 shadow-[-10px_10px_20px_rgba(0,0,0,0.678)]'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            “Handpicked favorites that define our brand, trusted by thousands and designed to elevate your everyday style.”
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gay-y-6'>
            {
            bestSeller.map((item)=>{
                return <ProductItem key={item._id} id={item._id} name={item.name} image={item.image} price={item.price}/>
            })
            }
        </div>
    </div>
  )
}

export default BestSeller