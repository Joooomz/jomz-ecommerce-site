import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'swiper/swiper.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';


import App from './App.jsx'
import Home from './home/Home.jsx';
import Blog from './blog/Blog.jsx';
import Shop from './shop/Shop.jsx';
import About from './about/about.jsx';
import Contact from './contact/contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <Home/>},
      {path: "/blog", element: <Blog/>},
      {path: "/shop", element: <Shop/>},
      {path: "/about", element: <About/>},
      {path: "/contact", element: <Contact/>}
  ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
