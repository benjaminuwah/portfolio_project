import React from 'react'
import { tools } from '../Constants'

const Tools = () => {
  return (
    <div className="text-center">
      <h1 className="text-[24px] text-white font-bold">Tools</h1>
      <p className="text-[#C3C2C2]">Tools I use includes</p>

      <div className='flex flex-wrap gap-2 mx-auto pt-10 justify-center'>
        {
          tools.map((tools, index) => {
            return (
              <li key={index} className='bg-[#191A1D] text-[#959595] py-[15px] px-[30px] rounded-[10px] border border-[#404040] border-dashed font-semibold flex'>{tools.name}</li>
            )
          })
        }
      </div>

    </div>
  )
}

export default Tools
