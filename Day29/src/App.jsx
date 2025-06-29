import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
import { posts as initialPosts } from './data/posts'

function App() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <>
      <div className='min-h-screen bg-red-900 text-white'>
        <Navbar />
        <Outlet context={{ posts, setPosts }} />
      </div>
    </>
  )
}

export default App
