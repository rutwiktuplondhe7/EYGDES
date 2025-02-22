import React, { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
  
    const username = localStorage.getItem("username");
    if (username) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username"); 
    setIsLoggedIn(false);
    window.location.href = "/"; 
  };

  return (
    <header>
      <h2>Recipe Sharing Platform</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#">My Recipe</a></li>
        <li><a href="#">Favourites</a></li>
        <li>
          {isLoggedIn ? (
            <a href="#" onClick={handleLogout}>Logout</a>
          ) : (
            <>
              <a href="/login">Login</a>/<a href="/register">Register</a>
            </>
          )}
        </li>
      </ul>
    </header>
  );
}
