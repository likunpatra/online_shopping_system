import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (<>
    <div className='shadow-[-10px_10px_20px_rgba(0,0,0,0.678)] bg-white p-20 pt-10 mb-20'>
      <div className='text-center text-2xl'> 
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className='w-full md:max-w-120' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>56 HSR Layout <br /> Floor 35, Bangalore, India</p>
          <p className='text-gray-500'>Tel:  +1-223-945-4545 <br />Email: admin@closet.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Closet</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
    <NewsletterBox/>
    </>
  )
}

export default Contact