import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskManager from './components/TaskManager'
import { ThemeContext } from './contexts/ThemeContext'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className={`text-white min-h-screen ${theme === 'dark'?'bg-gray-900':''}`}>
        <TaskManager theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  )
}

export default App
