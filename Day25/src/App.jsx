import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Layout from './components/Layout.jsx'
import { lazy } from 'react'
const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/', element: <Home />
      },
      {
        path: '/about', element: <About />
      },
      {
        path: '/contact', element: <Contact />
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} >
      </RouterProvider>
    </>
  )
}

export default App
