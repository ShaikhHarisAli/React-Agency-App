import React from 'react'
import aboutImg from '../assets/about1.png'
import Stats1 from '../assets/stats1.png'
import Stats2 from '../assets/stats2.png'
import Stats3 from '../assets/stats3.png'
import Stats4 from '../assets/stats4.png'

export default function Aboutus() {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
      <div className='md:w-11/12 flex flex-col mx-auto md:flex-row justify-between items-center'>
        <div><img src={aboutImg} alt=""/></div>
        <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5'>
                The Unseen of Spending three years at Pixelgrade.
            </h2>
            <p className='md:w-3/4 text-sm text-neutralDGray mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
            <button className='btn-primary'> Learn More </button>
        </div>
      </div>

      {/* company stats */}
      <div className='px-4 lg:px-14 w-full max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2'>
            <h2 className='text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5'>
            Helping a local <br/><span className='text-brandPrimary'>business reinvent itself</span>
            </h2>
            <p >
            We reached here with our hard work and dedication
            </p>
            
            </div>
            {/* stats */}
            <div className='md:w-1/2 flex mx-auto sm:flex-row flex-col sm:items-center justify-around gap-11'>
                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <img src={Stats1} alt="" srcset="" />
                        <div className='text:2xl text-neutralDGray'>
                            <h4>2,245,341</h4>
                            <p>Members</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={Stats2} alt="" srcset="" />
                        <div className='text:2xl text-neutralDGray'>
                            <h4>46,328</h4>
                            <p>Clubs</p>
                        </div>
                    </div>
                   
                    
                </div>


                <div className='space-y-8'>
                <div className='flex items-center gap-4'>
                        <img src={Stats3} alt="" srcset="" />
                        <div className='text:2xl text-neutralDGray'>
                            <h4>1,945,341</h4>
                            <p>Payments</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={Stats4} alt="" srcset="" />
                        <div className='text:2xl text-neutralDGray'>
                            <h4>828,368</h4>
                            <p>Event Bookings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
