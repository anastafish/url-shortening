import React from 'react'
import working from '../url-shortening-api-master/images/illustration-working.svg'

export const Hero = () => {
  return (
    <div className='flex sm:flex-row-reverse
     flex-col items-center justify-between
     mt-10 sm-mt-0 sm:gap-0 gap-5
     '>
      <img src={working} alt="" className='sm:w-[50%] w-full'/>   
      <div className='flex flex-col items-center sm:items-start'>
        <h1 className='font-poppins font-semibold sm:text-[60px] text-[30px] text-dark_blue'>More than just <br /> shorter links</h1>
        <p className='font-poppins font-medium text-grayish text-[18px]'>Build your brand’s recognition and get detailed <br /> insights 
          on how your links are performing.</p>
        <button className='text-white text-center rounded-3xl
        bg-cyan p-3 w-[50%] h-10 font-poppins font-semibold
        mt-8
        '>Get Started</button>
      </div>
    </div>
  )
}
