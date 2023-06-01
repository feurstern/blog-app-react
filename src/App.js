import React from 'react'
import {createBrowserRouter,Outlet,RouterProvider,} from "react-router-dom";
import {Home, Login, Register, Writer, Single } from './page';
import { Footer, Navbar } from './components';
import "./style.scss";

const Layout=()=>(
  <>
   <Navbar/>
   <Outlet/>
   <Footer/>
    
  </>
)
const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children :[
      {
        path:"/",
        element :<Home />
      },
      {
        path : "/writer",
        element:<Writer />
      },
      {
        path :"/post/:any",
        element:<Single />
      },

    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path:"/register",
    element : <Register/>
  },
  {
    path:"/single",
    element : <Single/>
  },
  {
    path:"writer",
    element: <Writer/>
  },
  {
    path:"/",
    element:<Home/>

  }
]);


const App = () => {
  return(
     <div className='app'>
      <div className='container'>
       <RouterProvider router={router} />
      </div>
     </div>
  );
}

export default App  