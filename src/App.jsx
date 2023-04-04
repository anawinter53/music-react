import React, { useState } from 'react';
import data from './config/data.json'
import { CardGallery } from './components';
// import './App.css'

export default function App() {
  const [artistData, setArtistData] = useState(data)
  // const [like, setLike] = useState(false)

  return (
    <div>
      <header>Rock App</header>
      <CardGallery artistData={artistData} />
    
    </div>
  )
}


