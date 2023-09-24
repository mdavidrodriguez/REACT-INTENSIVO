import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyRoutes from './routers/routes'
import imagen from './img/clapperboard.png'
function App() {

  return (
    <div>
      <header>
        <h1 className='title'><img src={imagen} /> Peliculas </h1>
      </header>
      <MyRoutes />
    </div>
  )
}

export default App
