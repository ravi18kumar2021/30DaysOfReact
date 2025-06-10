import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JokeGenerator from './components/JokeGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <JokeGenerator />
    </>
  )
}

export default App
