import React from 'react'
import { useState } from 'react'

export const Shorten = () => {

  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")

  function handleInput(event){
    setUrl(event.target.value)
  }
  console.log(url)

  async function handleUrl(){
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`) 
    const json = await response.json()
    setShortUrl(json.result.short_link)
  }

  return (
    <div>
      <input onChange={handleInput} value={url} type="text" />
      <button type='button' onClick={handleUrl}>submit</button>
      {shortUrl && <h1>{shortUrl}</h1>}
    </div>
  )
}
