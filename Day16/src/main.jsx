import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import BlogPost from './pages/BlogPost.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, element: <Home />
      },
      {
        path: 'blogs', element: <Blogs />
      },
      {
        path: 'blog/:postId', element: <BlogPost />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
