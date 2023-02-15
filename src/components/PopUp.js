import React from 'react'

export const PopUp = ({shortUrl}) => {

    function copy(event){
        const url = shortUrl
        navigator.clipboard.writeText(url);
        event.target.innerHTML = 'Copied!'
        event.target.style.background = 'green'
    }

  return (
    <div className={`popup flex flex-col absolute sm:w-[400px] sm:h-[400px]
                    sm:ml-[-200px] sm:mt-[-200px] w-[200px] h-[200px]
                    ml-[-100px] mt-[-100px]
                    m-0 left-[50%] top-[50%] 
                    items-center justify-center gap-5 bg-dark_violet rounded-xl    
                    ${shortUrl ? 'block' : 'hidden'}    
    `}>
        <h1 className='font-poppins font-semibold
         sm:text-[40px] text-[15px] text-center text-grayish'>Here is your shorten link:</h1>
        <p className='font-poppins font-normal sm:text-[20px] text-[15px]'>{shortUrl}</p>
        <button onClick={copy} 
        className="bg-gray p-2 rounded-lg hover:bg-green-400
                   sm:w-[50%] w-fit copy
        ">Copy</button>
        <button className='sm:w-[50%] w-fit bg-gray rounded-lg p-1 hover:bg-red'
                onClick={(event) => {
                    document.querySelector('.popup').style.display = 'none'
                    document.querySelector('.copy').innerHTML = 'copy'
                    document.querySelector('.copy').style.background = 'gray'
                }}    
        >Close</button>
    </div>
  )
}