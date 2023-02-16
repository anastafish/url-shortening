export const LinksPopup = ({shortUrl ,links}) => {    
  const elems = links.map(link => {
      if (!link.short_link) return <span></span>;
      else{
      return <li><p>Shorten Link :{link.short_link} <br />
      Original Link: {link.original_link}</p>
      </li>}
  })
  return (
    <div className={`links flex flex-col absolute sm:w-[400px] sm:h-[400px]
                    sm:ml-[-200px] sm:mt-[-200px] w-[200px] h-[200px]
                    ml-[-100px] mt-[-100px] p-5
                    m-0 left-[50%] top-[50%] 
                    items-center justify-center gap-5 bg-dark_violet rounded-xl    
                    ${shortUrl ? 'block' : 'hidden'}    
    `}>
        <h1 className='font-poppins font-semibold
         sm:text-[40px] text-[15px] text-center text-grayish'>Links History:</h1>
         <ul className="flex flex-col items-center gap-5 overflow-y-scroll p-3">
          {elems}
         </ul>
        <button className='sm:w-[50%] w-fit bg-gray rounded-lg p-1 hover:bg-red'
        onClick={() => document.querySelector('.links').style.display = 'none'}
        >Close</button>
    </div>
  )
}