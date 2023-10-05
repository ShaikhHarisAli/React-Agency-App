import React from 'react'
import Brand1 from "../assets/Brand1.png"
import Brand2 from "../assets/Brand2.png"
import Brand3 from "../assets/Brand3.png"
import Brand4 from "../assets/Brand4.png"
import Brand5 from "../assets/Brand5.png"
import Brand6 from "../assets/Brand6.png"
import Brand7 from "../assets/Brand7.png"


export default function Services() {
    let services =[
        {
        id: 1,
        title: "Membership Organisations",
        description: "Our membership management software provides full automation of membership renewals and payments",
        image: "/src/assets/services1.png"
    },
    {
        id: 2,
        title: "National Associations",
        description: "Our membership management software provides full automation of membership renewals and payments",
        image: "/src/assets/services2.png"
    },
    {
        id: 3,
        title: "Clubs And Groups",
        description: "Our membership management software provides full automation of membership renewals and payments",
        image: "/src/assets/services3.png"
    }

]
  return (
    <div className='md:px-14 px-4 mx-auto py-16 max-w-screen-2xl' id='service'>
        <div className='text-center my-8'>
            <h1 className='text-4xl text-neutralDGray font-semibold mb-2'> Our Clients</h1>
            <p className='text-neutralGray'>We have been working with some Fortune 500+ clients</p>
        </div>
        {/* company logos */}
        <div className='my-12 items-center flex flex-wrap justify-between gap-8'> 
        <img src={Brand1} alt="" srcset="" />
        <img src={Brand2} alt="" srcset="" />
        <img src={Brand3} alt="" srcset="" />
        <img src={Brand4} alt="" srcset="" />
        <img src={Brand5} alt="" srcset="" />
        <img src={Brand6} alt="" srcset="" />
        <img src={Brand7} alt="" srcset="" />
        </div>

        {/* services card */}

        <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className='text-4xl text-neutralDGray font-semibold mb-2'>Manage your entire community in a single system</h2>
            <p className='text-neutralGray'>Who is Nextcent suitable for?</p>
        </div>

        {/* cards */}
        <div className='mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-items-center md:w-11/12 mx-auto gap-12'>
        {
            services.map(service =>{
                return(
                <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                    <div>
                        <div className=' mb-4 h-14 w-14 mx-auto rounded-tl-3x1 rounded-br-3x1'>
                         <img src={service.image} srcset={service.image} className='ml-5' /> 
                        </div>
                        <h4 className='text-2xl font-bold text-neutralDGray mb-2 px-2 '>{service.title}</h4>
                        <p className='text-sm text-neutralGray'>{service.description}</p>
                    </div>
                </div>)
            })
        }
        </div>
    </div>
  )
}
