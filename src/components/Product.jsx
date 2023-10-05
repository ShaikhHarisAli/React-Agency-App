import React from 'react'
import Product1 from '../assets/product.png'
import Image from '../assets/image 9.png'

// import Bcs from '../assets/image 9.png'
export default function Product() {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
      <div className='md:w-11/12 flex flex-col mx-auto md:flex-row justify-between items-center'>
        <div><img src={Product1} alt=""/></div>
        <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5'>
                How to design your site footer like we did
            </h2>
            <p className='md:w-3/4 text-sm text-neutralDGray mb-8'>
            One event calendar shared across National, Regional and Club events to simplify your event experience. Allowing you to create waiting lists, share data capture, issue credential for course completion, apply smart purchasing rules and much more. </p>
            <button className='btn-primary'> Learn More </button>
        </div>
      </div>
        {/*  */}

        <div className='px-4 lg:px-14 w-full max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/3'><img src={Image} alt="" srcset="" /></div>
            {/* stats */}
            <div className='md:w-2/3 mx-auto'>
                <div>
                    <p className='md:w-4/5 text-sm text-neutralGray mb-8 leading-7'>
                    “We have enjoyed working with the JustGo system to setup and go live with our new membership platform. The initial effort to organise it along the lines of how our sport currently works was quick and relatively easy. The new system has already massively improved the time and effort it takes to setup and process member and club applications. It will help us to communicate with people in our sport in a much more effective way, and collect data to help us improve how our sport is governed.”
                    </p>
                    <h4 className='text-brandPrimary text-sm font-semibold mb-2'>Tim Smith</h4>
                    <p className='text-base text-neutralGray mb-8'>British Dragon Boat Racing Association</p>
                    <div>
                        <div className='flex items-center gap-8 flex-wrap'>
                            <img src="/src/assets/LogoS.png" alt="" className='cursor-pointer' />
                            <img src="/src/assets/Logo-1.png" alt="" className='cursor-pointer' />
                            <img src="/src/assets/Logo-2.png" alt="" className='cursor-pointer' />
                            <img src="/src/assets/Logo-3.png" alt="" className='cursor-pointer' />
                            <img src="/src/assets/Logo-4.png" alt="" className='cursor-pointer' />
                            <img src="/src/assets/Logo-5.png" alt="" className='cursor-pointer' />
                            <div className='flex item-center gap-8'>
                                <a href="#" className='font-bold text-brandPrimary hover:text-neutral-700'>
                                Meet all customers 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
               
            </div>
        </div>
      </div>



    </div>
  )
}
