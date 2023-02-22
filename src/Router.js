import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";

export const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/gallery',
          element:<Gallery/>
        }
    ]
  }
])