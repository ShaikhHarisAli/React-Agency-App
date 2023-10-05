import React from 'react'
import { Carousel } from 'flowbite-react'
import  Banner1  from '../assets/banner1.png'

export default function Home() {
  return (
    <div className='bg-neutralSilver' id='home'>
      <div className='px:4 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen'>
      <Carousel className='w-full mx-auto'>
      <div className="my-28 md:my-8 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
        <div>
            <img src={Banner1} alt="" srcset="" />
        </div>
        {/* {Hero Text} */}
        <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug'> Lessons and insights  <span className='text-brandPrimary'>from 8 years</span> </h1>
            <p className='text-neutralGray text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
            <button className='btn-primary'>Register</button>
        </div>
      </div>
      <div className="my-28 md:my-8 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
        <div>
            <img src={Banner1} alt="" srcset="" />
        </div>
        {/* {Hero Text} */}
        <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug'> Lets Learn and Earn Money <span className='text-brandPrimary'>from 4 years</span> </h1>
            <p className='text-neutralGray text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
            <button className='btn-primary'>Register</button>
        </div>
      </div>
     
    </Carousel>
      </div>
    </div>
  )
}
