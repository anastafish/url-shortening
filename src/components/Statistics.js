import React from 'react'
import brand from '../url-shortening-api-master/images/icon-brand-recognition.svg'
import detailed from '../url-shortening-api-master/images/icon-detailed-records.svg'
import fully from '../url-shortening-api-master/images/icon-fully-customizable.svg'

export const Statistics = () => {
  
  const Card = ({img, title, para}) => {
    return(
      <div className='flex flex-col p-10 bg-gray gap-3 rounded-md relative'>
        <div className='rounded-full bg-dark_violet w-fit p-4 absolute top-[-30px]'>
          <img src={img} alt="" className='w-[30px] h-[30px]'/>
          </div>
        <h1 className='font-poppins font-semibold '>{title}</h1>
        <p className='max-w-[280px] text-grayish font-semibold'>{para}</p>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center sm:mt-20 mt-10'>
      <h1 className='font-poppins font-semibold text-[35px] text-center'>Advanced Statistics</h1>
      <p className='font-poppins font-normal text-[15px] text-grayish text-center mt-4'>Track
      how your links are performing across the web with <br /> our 
      advanced statistics dashboard.</p>

      <div className='flex sm:flex-row flex-col mt-20 sm:gap-5 gap-10'>
        <Card img={brand} title="Brand Recognition" 
        para="Boost your brand recognition with each click. Generic links don’t 
              mean a thing. Branded links help instil confidence in your content."/>

        <Card img={detailed} title="Detailed Records"
         para="Gain insights into who is clicking your links. Knowing when and where 
              people engage with your content helps inform better decisions."/>

        <Card img={fully} title="Fully Customizable"
         para="Improve brand awareness and content discoverability through customizable 
              links, supercharging audience engagement."/>
      </div>
    </div>
  )
}