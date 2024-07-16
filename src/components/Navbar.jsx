import React, { useState, useEffect, useRef } from 'react'
import codeIcon from '../assets/code.svg'
import { useNavigate } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import cvPdf from '../assets/cv.pdf'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const navigate = useNavigate()
  const navRef = useRef(null)

  const handleNav = () => {
    setNav(!nav)
  }

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = cvPdf
    link.download = 'cv.pdf'
    link.click()
  }

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNav(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div onClick={() => navigate('/')}>
        <img
          className="w-10 h-10 sm:w-20 sm:h-20 cursor-pointer"
          src={codeIcon}
          alt="code"
        />
      </div>
      <ul className="hidden md:flex">
        <li
          onClick={() => navigate('/about')}
          className="font-bold cursor-pointer uppercase"
        >
          About
        </li>
        <li
          onClick={() => navigate('/projects')}
          className="font-bold cursor-pointer uppercase"
        >
          Projects
        </li>
        <li
          onClick={() => navigate('/contact')}
          className="font-bold cursor-pointer uppercase"
        >
          Contact
        </li>

        <button onClick={downloadCV}>Download CV</button>
      </ul>
      <div onClick={handleNav} className="md:hidden z-50">
        {nav ? (
          <AiOutlineClose className="text-black cursor-pointer" size={20} />
        ) : (
          <HiOutlineMenuAlt4 className='cursor-pointer' size={20} />
        )}
      </div>
      <div
        ref={navRef}
        className={
          nav
            ? 'absolute left-0 top-0 w-full bg-yellow-600 px-4 py-7 flex flex-col md:hidden z-10'
            : 'absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col'
        }
      >
        <ul className="flex flex-col h-[600px] justify-center items-center">
          <li
            onClick={() => {
              navigate('/')
              setNav(false)
            }}
            className="border-b font-bold cursor-pointer uppercase w-full text-center"
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate('/about')
              setNav(false)
            }}
            className="border-b font-bold cursor-pointer uppercase w-full text-center"
          >
            About
          </li>
          <li
            onClick={() => {
              navigate('/projects')
              setNav(false)
            }}
            className="border-b font-bold cursor-pointer uppercase w-full text-center"
          >
            Projects
          </li>
          <li
            onClick={() => {
              navigate('/contact')
              setNav(false)
            }}
            className="border-b font-bold cursor-pointer uppercase w-full text-center"
          >
            Contact
          </li>
          <li className="border-b font-bold cursor-pointer uppercase w-full text-center">
            <button
              onClick={() => {
                downloadCV()
                setNav(false)
              }}
            >
              Download CV
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
