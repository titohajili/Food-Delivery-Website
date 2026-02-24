"use client";
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { MdDeliveryDining } from 'react-icons/md'

const Nav = () => {

    const [navBg ,setNavBg]= useState(false);

    useEffect(()=>{
        const handler =()=>{
            if(window.scrollY >= 90){
                setNavBg(true)
            }else{
                setNavBg(false)
            }
        };

        window.addEventListener('scroll',handler);

        return ()=>{
            window.removeEventListener('scroll',handler);
        }
    },[])


  return (
    <div className={`${navBg ? "bg-white shadow-md" : "fixed"}transition-all duration-200 h-[12vh] z-100 fixed w-full`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-blue-950 dark:bg-white rounded-full flex items-center justify-center flex-col'>
                <MdDeliveryDining className='w--6 h-6 text-white dark:text-black'/>
            </div>
            <h1 className='text-xl hidden sm:block md:text-2xl text-black font-bold'>Foodie</h1>
        </div>
        {/* Links */}
        <div className='hidden lg:flex items-center space-x-10'>
            {
                navLinks.map((link)=>{
                    return <Link key={link.id} href={link.url} className='text-black hover:text-gray-700 font-bold transition-all duration-200'>
                        <p>{link.label}</p>
                    </Link>
                })
            }
        </div>
        {/* buttons */}
        <div className='flex items-center space-x-4'>
            {/* Join now button */}
            <button className='bg-blue-950 px-8 py-2.5 text-white font-bold rounded-lg hover:bg-black transition-all duration-200 cursor-pointer'>Join Now</button>
            {/* Theme Toggler */}
            {/* Menu icon */}
            <HiBars3BottomRight className='w-8 h-8 cursor-pointer text-blue-950 lg:hidden'/>
        </div>
      </div>
    </div>
  )
}

export default Nav
