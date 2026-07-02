import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div className='text-center bg-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-10'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            “Good vibes, great style, and 20% off — just for subscribing.”
        </p>
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter Your Email' className='w-full sm:flex-1 outline-none' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4' onSubmit={onSubmitHandler}>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox