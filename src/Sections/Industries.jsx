import React from 'react'
import { industry } from '../Constants'
import { vector_1, vector_2 } from '../Assets'
import Skills from './Skills'
import Tools from './Tools'

const Industries = () => {
  return (
    <div id='Industries' className='w-[80%] mx-auto py-[100px] md:py-[400px]'>
      <div>
        <h1 className='text-[24px] text-white font-bold text-center'>Industries</h1>
        <p className='text-center text-[#C3C2C2] capitalize'>where i have worked in</p>
      </div>
      <div className='flex flex-wrap gap-2 md:w-[50%] mx-auto pt-10 justify-center'>
        {
          industry.map((firm, index) => {
            return (
              <li key={index} className='bg-[#191A1D] text-[#959595] py-[15px] px-[30px] rounded-[10px] border border-[#404040] border-dashed font-semibold flex'>{firm.name}</li>
            )
          })
        }
        <div className='hidden md:flex'>
          <img src={vector_1} alt='img' />
          <img src={vector_2} alt="img" />
        </div>
      </div>

      <div className='md:flex gap-60'>
        <div className='md:flex-1'>
          <Skills />
        </div>

        <div className='md:flex-1'>
          <Tools />
        </div>
      </div>

    </div>
  )
}

export default Industries
