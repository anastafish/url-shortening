import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Shorten } from './components/Shorten';
import { Statistics } from './components/Statistics';
import { Getstarted } from './components/Getstarted';
import { Footer } from './components/Footer';
import { PopUp } from './components/PopUp';
import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { LinksPopup } from './components/LinksPopup';


function App() {
  const [ spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000)
  }, []);

  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")

  function handleInput(event){
    setUrl(event.target.value)
  }
  const [links, setLinks] = useState([]);

  async function handleUrl(){
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`) 
    const json = await response.json()
    setShortUrl(json.result)
    setLinks(prev => [...prev, shortUrl])
    document.querySelector('.popup').style.display = 'flex'
    console.log(links)
  }
  


  return (
    <div className={`${spinner && 'flex items-center justify-center h-[100vh]'}`}>
       {spinner && <ClipLoader
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
      {!spinner && <div className="flex flex-col items-center justify-center 
    w-[100vw] sm:px-20 sm:py-00 px-10 py-10 pb-0 overflow-hidden"> 
      <Navbar/>
      <Hero />
      <Shorten handleInput={handleInput} handleUrl={handleUrl} url={url}/>
      <PopUp shortUrl={shortUrl.short_link} />
      <LinksPopup links={links} />
      <Statistics />
      <Getstarted />
      <Footer/></div>}
    </div>
  );
}

export default App;
