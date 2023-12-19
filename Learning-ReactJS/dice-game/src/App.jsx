import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Game from './components/Game'

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggle = () => setIsGameStarted(!isGameStarted)

  return (
    <div className='container'>

      {
        isGameStarted ? <Game /> : <Home toggle={toggle} />
      }

    </div>
  )
}

export default App
