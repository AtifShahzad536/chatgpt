import React, { useState } from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi'; // for icons
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsername(name === 'username' ? value : username);
    setEmail(name === 'email' ? value : email);
    setPassword(name === 'password' ? value : password);
    
  };

  const handleRegister =async (e) => {
    e.preventDefault();
    // Add registration logic here
    try {
        const response = await fetch('https://chatgpt-backend-vfx0.onrender.com/user', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });
    const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Registration failed');
        }
    
        
        console.log('Registration successful:', data);
        setUsername('');
        setEmail('');
        setPassword('');
        navigate('/login'); // Redirect to login page after successful registration
        // Redirect or show success message
        
    } catch (error) {
      console.error('Registration error:', error.message);
        alert(error ); // Handle error (e.g., show a message to the user)
      // Handle error (e.g., show a message to the user)
        
    }
   
    

  
  };

  return (
    <div className="flex items-center justify-center py-40 min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 ">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-2xl rounded-2xl px-10 py-12 w-full max-w-lg"
      >
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-10 tracking-wide">
          Create Your Account
        </h2>

        <div className="space-y-6">
          {/* Username */}
          <div className="relative">
            <FiUser className="absolute left-3 top-3 text-blue-500" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-blue-500" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-blue-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;