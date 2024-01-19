import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Register from './register';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>login</h1>
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/home",
      element: <h1>Home</h1>
    }
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
