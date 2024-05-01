import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Customer from './pages/Customer';
import Protected from './pages/Protected';
import Profile from './pages/Profile';
import Reports from './pages/Reports';

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
      { path: '/customers/:id', element: <Customer /> },
      { path: '/protected', element: <Protected /> },
      { path: '/protected/:id', element: <Profile /> },
      { path: '/reports', element: <Reports /> }
    ]
  }
])

function App(){
 return <RouterProvider router={router} />;
}

export default App;
