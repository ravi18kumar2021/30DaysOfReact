import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './pages/Home.jsx';
import CreatePost from './pages/CreatePost.jsx';
import EditPost from './pages/EditPost.jsx';
import BlogPost from './pages/BlogPost.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'blogpost/:postId', element: <BlogPost />
      },
      {
        path: 'create-post', element: <CreatePost />
      },
      {
        path: 'edit-post/:postId', element: <EditPost />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
