import React from 'react'

export default function Newsletter() {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto  bg-neutralSilver py-16'>
      <div className='flex items-center justify-center mx-auto lg:w-1/2'>
        <div className='text-center'>
        <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-4 lg:leading-snug '>
            Pellentesque suscipit fringilla libero eu.
        </h2>
        <div className='flex items-center justify-center gap-8'>
            <button className='btn-primary text-white'> Get a Demo</button>
        </div>
        </div>
      </div>
    </div>
  )
}
