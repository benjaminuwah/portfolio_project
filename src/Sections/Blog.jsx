import React from 'react'
import { dev, dev2, ui } from '../Assets'

const Blog = () => {
  return (
    <div className='bg-[#191A1D] py-[50px] md:py-[200px]'>
      <h1 className='text-white text-[40px] text-center capitalize font-bold'>other things i do</h1>
      <div className='flex justify-center text-[#5A5A5A] gap-4'>
        <li>YouTube</li>
        <li>Teaching</li>
      </div>
      <div className='text-white md:flex w-[80%] mx-auto py-10 md:py-0 md:gap-20'>

        <div className='flex-1 pb-12 md:pb-0'>
          <img src={dev} alt="" className='md:w-[100%] md:h-[450px] object-contain rounded-xl'/>
          <p className='text-white text-[14px] md:text-[20px] font-semibold'>Learn how to develop dynamic applications and high-quality websites to produce attractive web user experiences. In this course you will go from to zero to hero in Frontend Web Development learning HTML, CSS, JavaScript, React, Redux and much more. Learn, get mentored and be on a fast track to a high paying tech job.</p>
        </div>

        <div className='flex-1 pb-12 md:pb-0'>
          <img src={dev2} alt="" className='md:w-[100%] md:h-[450px] object-contain rounded-xl'/>
          <p className='text-white text-[14px] md:text-[20px] font-semibold'>This is an online live bootcamp in Product or User Interface (UI) and User Experience (UX) Design. In this bootcamp, you will learn, get mentored, build portfolio, join a close support group and be ready to get a job.</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
