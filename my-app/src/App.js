import Home from './pages/Home'
import Calismalarimiz from './pages/Calismalarimiz'
import Ekibimiz from './pages/Ekibimiz'
import Login from './pages/Login'
import Register from './pages/Register'
import Video from './pages/Video'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './style.scss'


import * as React from "react";



import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";


const Layout = ()=>{
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element: <Home />
      },
     
      
  {
    path: "/ekibimiz",
    element: <Ekibimiz />,
  },
  {
    path: "/video",
    element: <Video />,
  },
 
  {
    path: "/calismalarimiz",
    element: <Calismalarimiz />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
 
    ]
  },
  
 
]);


function App() {
  return (
    <div className='app'>
    <div className='container'>

    <RouterProvider router={router} />
    
    </div>
    </div>
  );
}


export default App;
