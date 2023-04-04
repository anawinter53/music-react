import React, { useState } from 'react';
// import { CardGallery } from './components';
// import './App.css'

export default function App() {
  const [like, setLike] = useState(false)

  return (
    <div>
      <header>Rock App</header>
      <CardGallery />
    
    </div>
  )
}


