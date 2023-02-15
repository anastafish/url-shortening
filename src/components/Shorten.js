import React from 'react'

export const Shorten = ({handleInput, handleUrl, url}) => {
  return (
    <div className="bg-dark_violet w-full sm:py-4 p-7
     rounded-xl flex sm:flex-row flex-col items-center
     justify-center gap-5 sm:mt-0 mt-12 md:mt-10
     ">
      <input onChange={handleInput} value={url}
       type="text" placeholder='Shorten a link here...'
       className='sm:w-[70%] w-full rounded-md p-3'
       />
      <button type='button' onClick={handleUrl}
      className="bg-cyan p-3 rounded-xl text-white
       font-poppins font-semibold text-[17px]
       sm:w-auto w-full
       "
      >Shorten it!</button>      
    </div>
  )
}
