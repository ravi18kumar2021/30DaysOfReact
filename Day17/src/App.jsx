import { useEffect, useRef } from 'react'
import './App.css'

function App() {
    const inputRef = useRef(null);
    const colors = [
        'red', 'white', 'orange', 'green', 'violet', 'pink', 'gray'
    ]
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    const handleInput = () => {
        inputRef.current.focus();
    }
    const setColor = () => {
        const index = Math.floor(Math.random() * colors.length);
        inputRef.current.style.color = colors[index];
    }
    return (
        <div className='w-lg p-4 bg-gray-700'>
            <h1>Day 17 of 30DaysOfReact</h1>
            <input type="text" ref={inputRef}
            className='border my-4 border-gray-500 p-2 bg-gray-800' />
            <div className='w-md mx-auto'>
                <button className='mx-2' onClick={handleInput}>Keep Focus</button>
                <button className='mx-2' onClick={setColor}>Set Colour</button>
            </div>
        </div>
    )
}

export default App
