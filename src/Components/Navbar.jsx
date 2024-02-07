import React, { useEffect, useState } from 'react'
import { navLinks } from '../Constants'
// import { Link } from 'react-router-dom'
import { close, menu } from '../Assets'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-black" : "bg-transparent"}`}>
      <div className='flex justify-between items-center w-[80%] md:max-w-7xl mx-auto'>
      <h1 className='text-white text-[16px] font-bold'>Benjamin Uwah</h1>
      <div className='text-[16px] hidden md:flex gap-[50px] list-none text-[#C3C2C2]'>
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

      <div className='sm:hidden flex flex-1 justify-end items-center gap-2'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-100 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-white"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={nav.url}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
