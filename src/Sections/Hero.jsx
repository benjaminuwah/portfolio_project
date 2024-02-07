import React from 'react'
import '../App.css'

import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


import Navbar from '../Components/Navbar'

const Hero = () => {
  return (
    <div className='hero object-fill w-full h-[735px] relative'>
      <Navbar />
      <div className='w-[80%] flex flex-col-reverse md:flex-row md:flex mx-auto pt-40 md:pt-64'>
        <div className='flex-1 text-[#27292D] gap-3 flex md:flex-col py-5 z-10'>
          <AiFillInstagram color='white' fontSize='2.5em' className='bg-[#27292D] p-3 rounded-full'/>
          <FaLinkedinIn color='white' fontSize='2.5em' className='bg-[#27292D] p-3 rounded-full'/>
          <FaTwitter color='white' fontSize='2.5em' className='bg-[#27292D] p-3 rounded-full'/>
        </div>
        <div className='flex-1 z-10'>
          <h1 className='text-[35px] md:text-[50px] leading-10 font-bold text-white pb-5 m-0 '>I'm Benjamin Uwah</h1>
          <div className='md:flex items-center gap-5 pb-5'>
            <p className='text-[20px] font-semibold text-[#ECECEC]'>Senior Product Designer</p>
            <li className='text-[#AAA] text-[18px]'>8years+ experience</li>
          </div>
          <p className='text-[#AAA] text-[16px] z-50'>I’m an all round <span className='text-white'>PRODUCT</span> guy, focussed in building <span className='text-white'>SAAS</span> related products. I’m a <span className='text-white'>user centric </span>product designer with <span className='text-white'>wealth of experience</span> working with developers and the entire product team. If you want to launch an MVP, <span className='text-white'>startup,</span>  build saas, enhance the <span className='text-white'>experience</span> & aesthetics of an existing products or <span className='text-white'>prototype</span> an idea then I’m your guy.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
