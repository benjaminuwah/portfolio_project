import React from 'react'
import '../App.css'

import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


import Navbar from '../Components/Navbar'

const Hero = () => {
  return (
    <div className='hero object-fill w-full h-[700px] relative'>
      <Navbar />
      <div className='w-[80%] flex mx-auto pt-40 m-0'>
        <div className='flex-1 text-[#27292D] gap-3 flex flex-col'>
          <AiFillInstagram color='white' fontSize='2.5em' className='bg-[#27292D] p-3 rounded-full'/>
          <FaLinkedinIn color='white' fontSize='2.5em' className='bg-[#27292D] p-3 rounded-full'/>
          <FaTwitter color='white' fontSize='2.5em' className='bg-[#27292D] p-3 rounded-full'/>
        </div>
        <div className='flex-1'>
          <h1 className='text-[40px] font-bold text-white pb-5 m-0 '>I'm Benjamin Uwah</h1>
          <div className='flex items-center gap-5 pb-5'>
            <p className='text-[20px] font-semibold text-[#ECECEC]'>Senior Product Designer</p>
            <li className='text-[#5A5A5A] text-[18px]'>8years+ experience</li>
          </div>
          <p className='text-[#AAA] text-[16px] z-50'>I’m an all round <span className='text-white'>PRODUCT</span> guy, focussed in building <span className='text-white'>SAAS</span> related products. I’m a <span className='text-white'>user centric </span>product designer with <span className='text-white'>wealth of experience</span> working with developers and the entire product team. If you want to launch an MVP, <span className='text-white'>startup,</span>  build saas, enhance the <span className='text-white'>experience</span> & aesthetics of an existing products or <span className='text-white'>prototype</span> an idea then I’m your guy.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
