import { useState } from 'react'
import './App.css'
import AnimatedCard from './AnimatedCard'
import { AnimatePresence } from 'motion/react'

function App() {
  const [visible, setVisible] = useState(true)

  return (
    <>
      <div className='min-h-[20rem]'>
        <h1 className='text-orange-300'>Day 27: Framer Motion</h1>
        <button className='my-6 w-30 text-violet-400'
        onClick={() => setVisible(!visible)}>{visible ? "Hide" : "Show"}</button>
        <AnimatePresence>
          {visible && (
            <AnimatedCard />
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default App
