"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../../Assets/gymfriday-text-logo.png'
import { AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai';
import Image from 'next/image';


const Header = () => {
  const [show,setShow]= useState(false)
  return (
    <div className="bg-white flex items-center justify-between px-2 md:px-8 sticky top-0 z-50">
    <Image priority src={logo} alt="" className="w-32 z-50 relative md:w-60" />
    <div className={`md:static duration-300 ease-in-out absolute right-0 p-2 bg-white w-full justify-end items-end ${show ? 'top-8 ':'top-[-800px]'} flex md:flex-row flex-col md:items-center gap-x-8 font-semibold`}>

      <Link href={'/'}>
      <p>Home</p>
      
      </Link>
      <Link href={'/blogs'}>
      <p>Blogs</p>
      </Link>
      <p>Products</p>
      <p>About</p>
    </div>

    <div className='md:hidden block' onClick={()=>setShow(!show)}>
         {
          show ? <AiOutlineClose/>: <AiOutlineMenu/>
     }
    </div>
    
  </div>
  );
};

export default Header;