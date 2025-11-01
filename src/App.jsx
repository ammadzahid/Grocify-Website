import React, { Children } from "react";
import Layout from "./components/Layout/Layout.jsx";
import Home from '../src/components/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./components/Fruits/Fruits.jsx";
import Dairy from "./components/Dairy/Dairy.jsx";
import SeeFood from "./components/SeeFood/SeeFood.jsx";
import AllProducts from "./components/AllProducts/AllProducts.jsx";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: "/fruits",
          element: <Fruits />
        },
        {
          path: "/dairy",
          element: <Dairy />
        },
        {
          path: "/seefood",
          element: <SeeFood />
        },
        {
          path: "/allproducts",
          element: <AllProducts />
        }
      ]
    }
  ]);


  return <RouterProvider router={router} />;


}
export default App