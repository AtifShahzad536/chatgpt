// App.jsx
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/Nav";
import './index.css';

import { useNavigate } from "react-router-dom";
function App() {
 const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' ? true : false;
  useEffect(() => {
    // Check if user is logged in from localStorage
    if (!isLoggedIn) {
      navigate('/login'); // Redirect to login if not logged in
    }

  }, []);
 
  return (
    <div>
      {/* ✅ Pass session state to NavBar */}
      <NavBar  />

      <Outlet  />
    </div>
  );
}

export default App;
