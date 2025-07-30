
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FiMail, FiLock } from 'react-icons/fi'; // icons for inputs
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// Inside Login.jsx or any route
import { useOutletContext } from 'react-router-dom';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [session, setSession] = useState(false); // State to manage session
 const Navigate = useNavigate();
 
const [ isLogged, setIsLoggedIn ] = useState();
useEffect(() => {
    // Check if user is logged in from localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' ? true : false;
    if(isLoggedIn) {
        Navigate('/home'); 
    }// Redirect to home if already logged in
    }, []);
const check=() => {
    // Check if user is logged in from localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' ? true : false;
    setIsLoggedIn(isLoggedIn);

    console.log('isLogged:', isLoggedIn);
    console.log('isLoggedIn:', isLogged);
    if (isLoggedIn) {
        Navigate('/'); // Redirect to home if already logged in
    }

}

  const handleLogin =async (e) => {
    e.preventDefault();
    // Add login logic here
    try {
        await fetch('http://localhost:3002/user/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            withCredentials:true,
            body: JSON.stringify({ email, password }),
        }).then(res => res.json()).then(data => {
             setIsLoggedIn(true)
            console.log('Login successful one:', data);
            setSession(data.user.isLoggedIn); // Set session state
            // Set session state with user data
            console.log('session cehck:', data.user.isLoggedIn);
            if (data.user.isLoggedIn) {
             localStorage.setItem('isLoggedIn', "true");
             localStorage.setItem('userID',data.user.user._id)
             const check11=localStorage.getItem('userID')
             console.log('check check ',check11)
            }
            setEmail('');
            setPassword('');
           
           
          
            check()
           
          
            // Redirect or show success message
        }

        ).
        catch(error => {
          
            // console.error('Login error:', error);
           
            // Handle error (e.g., show a message to the user)
        });
        //   naviageteSystem()
   
        
        
    } catch (error) {
        alert('Login error:', error);
        
    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-2xl rounded-2xl px-10 py-12 w-full max-w-lg"
      >
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-10 tracking-wide">
          Welcome Back
        </h2>

        <div className="space-y-6">
          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-blue-500" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-blue-500" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg transition duration-200"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;