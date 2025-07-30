import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const isLoggedIn=localStorage.getItem('isLoggedIn') === 'true' ? true : false;
  const [isOpen, setIsOpen] = useState(false);
  const [session,setSession]=useState(false)
    const navigate = useNavigate();







  const handleLogout = async () => {
    try {
      await axios.post('https://chatgpt-backend-vfx0.onrender.com/user/logout',null,{
        withCredentials:true
      }); // 👈 Replace with your actual logout endpoint
        localStorage.setItem('isLoggedIn','false') // Update localStorage
        navigate('/login'); // Redirect to login page

      
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold text-blue-600">Chat Gpt</div>

          <div className="hidden md:flex space-x-6 items-center">
            {!isLoggedIn ? (
              <>
                <Link to="/register" className="text-gray-700 hover:text-blue-600 transition">Sign Up</Link>
                <Link to="/login" className="text-gray-700 hover:text-blue-600 transition">Sign In</Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-red-600 transition"
              >
                Logout
              </button>
            )}
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
          {!isLoggedIn ? (
            <>
              <Link to="/register" className="block text-gray-700 hover:text-blue-600 transition">Sign Up</Link>
              <Link to="/login" className="block text-gray-700 hover:text-blue-600 transition">Sign In</Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="block text-gray-700 hover:text-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;