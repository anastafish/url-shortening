import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Shorten } from './components/Shorten';
import { Statistics } from './components/Statistics';
import { Getstarted } from './components/Getstarted';
import { Footer } from './components/Footer';
import { PopUp } from './components/PopUp';
import { useState } from 'react';

function App() {

  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")

  function handleInput(event){
    setUrl(event.target.value)
  }

  async function handleUrl(){
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`) 
    const json = await response.json()
    setShortUrl(json.result.short_link)
    document.querySelector('.popup').style.display = 'flex'
  }

  return (
    <div className="flex flex-col items-center justify-center 
    w-[100vw] sm:px-20 sm:py-00 px-10 py-10 pb-0 overflow-hidden">
      <Navbar/>
      <Hero />
      <Shorten handleInput={handleInput} handleUrl={handleUrl} url={url}/>
      <PopUp shortUrl={shortUrl} />
      <Statistics />
      <Getstarted />
      <Footer/>
    </div>
  );
}

export default App;
