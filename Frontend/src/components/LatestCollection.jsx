import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
  const [latestProducts,setLatestProducts]=useState([])
  const {products}=useContext(ShopContext)

  useEffect(()=>{
    setLatestProducts(products.slice(0,10))
  },[products])
  return (
    <div className='my-5 bg-white px-10 py-10 shadow-[-10px_10px_20px_rgba(0,0,0,0.678)]'>
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        “Discover the latest closet collections designed to match your style, mood, and confidence—every single day.”
        </p>
      </div>

      {/*rendering Products*/}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.map((item)=>(
          <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))}
      </div>
    </div>
  )
}

export default LatestCollection