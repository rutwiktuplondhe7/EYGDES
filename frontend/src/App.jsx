import React, { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './Components/Navbar'; 
import Footer from './Components/Footer'; 

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("username")); 
  const router = createBrowserRouter([
    { path: "/", element: <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> }, 
    { path: "login", element: <Login setIsLoggedIn={setIsLoggedIn} /> }, 
    { path: "register", element: <Register /> } 
  ]);

  return <RouterProvider router={router} />;
}
