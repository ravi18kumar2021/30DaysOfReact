import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <h1 className='w-lg'>This App is built using React Router v7</h1>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
