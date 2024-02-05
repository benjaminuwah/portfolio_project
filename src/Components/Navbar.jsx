import React from 'react'
import { navLinks } from '../Constants'
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex w-[80%] mx-auto justify-between py-5'>
      <h1 className='text-white text-[16px] font-bold'>Benjamin Uwah</h1>
      <div className='text-[16px] flex gap-[50px] list-none text-[#C3C2C2]'>
        {
          navLinks.map((nav) => {
            return (
              <li key={nav}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            )
          })
        }
      </div>
    </div>
  )
}

export default Navbar
