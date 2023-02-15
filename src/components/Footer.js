import React from 'react'
import logo from '../url-shortening-api-master/images/logo.svg'
import facebook from '../url-shortening-api-master/images/icon-facebook.svg'
import instagram from '../url-shortening-api-master/images/icon-instagram.svg'
import pinterest from '../url-shortening-api-master/images/icon-pinterest.svg'
import twitter from '../url-shortening-api-master/images/icon-twitter.svg'



export const Footer = () => {
  return (
    <div className='flex flex-col items-center
     justify-between bg-very_dark_violet mt-10 p-5 sm:gap-0 gap-5 w-[100vw]'>       
       <div className="flex sm:flex-row gap-2 flex-col w-full items-center justify-between">       
         <div className='flex sm:flex-row flex-col items-center'>
         <img src={logo} alt="" className='sm:mr-10 sm:mb-0 mr-0 mb-3'/>
          <div className="flex flex-col items-center">
            <h1 className='mb-3 font-poppins font-semibold text-white'>Features</h1>
            <ul className='flex flex-col items-center'>
              <li className='text-gray cursor-pointer hover:text-white'>Link Shortening</li>
              <li className='text-gray cursor-pointer hover:text-white'>Branded Links</li>
              <li className='text-gray cursor-pointer hover:text-white'>Analytics</li>
            </ul>
          </div>
         </div>
         <div className='flex items-center flex-col'>
          <h1 className='mb-3 font-poppins font-semibold text-white'>Resources</h1>
          <ul className='flex flex-col items-center'>
            <li className='text-gray cursor-pointer hover:text-white'>Blog</li>
            <li className='text-gray cursor-pointer hover:text-white'>Developers</li>
            <li className='text-gray cursor-pointer hover:text-white'>Support</li>
          </ul>
         </div>
         <div className='flex items-center flex-col'>
          <h1 className='mb-3 font-poppins font-semibold text-white'>Company</h1>
          <ul className='flex flex-col items-center'>
            <li className='text-gray cursor-pointer hover:text-white'>About</li>
            <li className='text-gray cursor-pointer hover:text-white'>Our Team</li>
            <li className='text-gray cursor-pointer hover:text-white'>Careers</li>
            <li className='text-gray cursor-pointer hover:text-white'>Contact</li>
          </ul>
         </div>
         <div className='flex items-start gap-5 p-5'>
          <img src={facebook} alt="" className='cursor-pointer'/>
          <img src={twitter} alt="" className='cursor-pointer'/>
          <img src={pinterest} alt="" className='cursor-pointer'/>
          <img src={instagram} alt="" className='cursor-pointer'/>
         </div>
       </div>
       
       <div className="flex flex-row items-center gap-2 sm:mt-10 mt-2">
                        <p className='font-poppins font-semibold text-white'> Copyright © {new Date().getFullYear()} AnasTafish</p>
            <a href="https://github.com/anastafish" target={'_blank'} rel='noreferrer'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github' className='w-[30px]'/></a>
                <a href="https://www.linkedin.com/in/anas-tafish-665027180/" target={'_blank'} rel='noreferrer'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='LinkedIn' className='w-[30px]'/></a>
        </div>
    </div>
  )
}
