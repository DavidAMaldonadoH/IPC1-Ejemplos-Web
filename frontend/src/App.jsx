import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import User from './pages/User'
import Customer from './pages/Customer'
import Protected from './pages/Protected'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/contacts/:id', element: <User /> },
      { path: '/customers/:id', element: <Customer /> },
      { path: '/protected', element: <Protected />}
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
