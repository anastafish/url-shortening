import React, { useState } from 'react'
import logo from "../url-shortening-api-master/images/logo.svg"
import menu from '../url-shortening-api-master/images/icon-menu.svg'
import menu_closed from '../url-shortening-api-master/images/icon-menu-close.svg'

export const Navbar = () => {

    const [toggle, setToggle] = useState(false)

  return (
    <div className='flex flex-row justify-between
     items-center w-full'>
        <div className='flex sm:flex-row flex-col justify-between sm:w-[30%] w-[100%]'>
            <div className='flex flex-row justify-between'>
            <img src={logo} alt="" className='max-w-[none]'/>
                <img src={toggle ? menu_closed : menu} alt="" className='sm:hidden block'
                 onClick={() => setToggle(prev => !prev)}/>                 
            </div>

            <div className={`${toggle ? "blcok" : 'hidden'}
                  sm:hidden flex flex-col
                   items-center justify-center w-full
                   mt-5 bg-dark_violet rounded-lg
                   p-5
                   `}>
                    <ul>
                        <li className='text-center text-white'>Features</li>
                        <li className='text-center text-white mt-2'>Pricing</li>
                        <li className='text-center text-white mt-2'>Resources</li>
                    </ul>
                        <hr className='w-full text-white mt-5'/>
                    <button className='text-gray rounded-xl font-poppins hover:text-black mt-5'>Login</button>
                    <button className='text-white text-center rounded-3xl
                     bg-cyan p-3 w-[80%] h-10 font-poppins
                     mt-3
                     '>Sign Up</button>

                 </div>

            <ul className='sm:flex hidden flex-row justify-between w-full ml-10 gap-5'>
                <li className='text-gray hover:text-black
                 cursor-pointer font-poppins'>Features</li>
                <li className='text-gray hover:text-black
                 cursor-pointer font-poppins'>Pricing</li>
                <li className='text-gray hover:text-black
                 cursor-pointer font-poppins'>Resources</li>
            </ul>
        </div>

        <div className='sm:flex hidden flex-row justify-between gap-10'>
            <button className='text-gray rounded-xl font-poppins hover:text-black'>Login</button>
            <button className='text-white text-center rounded-3xl bg-cyan p-3 w-28 h-12 font-poppins'>Sign Up</button>
        </div>
    </div>
  )
}
