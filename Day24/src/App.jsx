import { useState } from 'react'
import './App.css'
import SlowComponent from './slowComponent';
import FastComponent from './FastComponent';

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  return (
    <>
      <div className='border-4 border-blue-300 bg-gray-800 p-6 rounded-md'>
        <h1 className='text-yellow-400'>Expensive Calculation Saver</h1>
        <h2 className='text-2xl italic text-red-200'>(React.memo VS useMemo)</h2>
        <div className='w-sm mx-auto my-4 grid grid-cols-2 items-center gap-3'>
          <button onClick={() => setCount(prevCount => prevCount+1)}>Increment Count</button>
          <p className='text-green-200 font-bold'>{count}</p>
          <button onClick={() => setNumber(prevNum => prevNum+1)}>Increment Number</button>
          <p className='text-green-200 font-bold'>{number}</p>
        </div>
      <SlowComponent number={number} />
      <FastComponent count={count} />
      </div>
    </>
  )
}

export default App
