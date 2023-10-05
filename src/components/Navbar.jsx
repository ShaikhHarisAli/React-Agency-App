import React, { useEffect, useState } from 'react'
import Logo from '../assets/Logo.png'
import {Link} from 'react-scroll'
// Icons Import
import { FaXmark ,FaBars} from "react-icons/fa6";

export default function Navbar() {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const [isSticky,setIsSticky] = useState(false)

    // set toggle menu

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }


    useEffect(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 100){
                setIsSticky(true)
            }
            else{
                setIsSticky(false)
            }
        }
        window.addEventListener('scroll',handleScroll)

        return () =>{
            window.addEventListener('scroll',handleScroll)

        }
    })


    // Nav Items Array

    const navItems =[
        {link:"Home",path:"home"},
        {link:"Service",path:"service"},
        {link:"About",path:"about"},
        {link:"Product",path:"product"},
        {link:"Testimonial",path:"testimonial"},
        {link:"Blogs",path:"blog"}

    ]
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
     <nav className={`py-4 lg:px-14 px-4 ${isSticky?" sticky top-0 right-0 left-0 border-b bg-white duration-300":""}`}>
        <div className='flex justify-between items-center text-base gap-8'> 
        <a href="http://" className='text:2x1 font-semibold items-center flex space-x-3'><img src={Logo} alt="" className='w-10 inline-block items-center' /><span className='text-[#263238]'>Nexcent</span> </a>
        {/* nav items for large devices */}
        <ul className='md:flex space-x-12 hidden'>
            {
                navItems.map(({link,path})=> <Link className="block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium" to={path} spy={true} smooth={true} offset={-100} key={path}>{link}</Link>)
            }
        </ul>
            {/* btn for large device */}
            <div className='space-x-12 lg:flex hidden items-center'>
                <a href="http://" className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>Login</a>
                <button className='bg-brandPrimary py-2 px-4 text-white transition-all duration-300 rounded hover:bg-neutralGray'>Sign Up</button>
            </div>

            {/* menu button for only mobile devices */}
            <div className='md:hidden'>
                <button 
                onClick={toggleMenu}
                className='text-neutralDGray focus:outline-none focus:text-gray-500'>
                {
                     isMenuOpen ? (<FaXmark className="h-6 w-6 "/>):(<FaBars className="h-6 w-6 "/>)
                }
                </button>
            </div>

        </div>   

        {/* items for mobile devices */}

        <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? 'block fixed top-0 right-0 left-0':"hidden"}`}>
        {
            navItems.map(({link,path})=> <Link className="block text-base text-white hover:text-brandPrimary first:font-medium" to={path} spy={true} smooth={true} offset={-100} key={path}>{link}</Link>)
        }
        </div>

     </nav>

    </header>
  )
}
