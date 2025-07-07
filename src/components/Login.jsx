import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function Login() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState(''); 
    const handleSubmit = (e) => {
        if(!userName.trim()) return; 

        localStorage.setItem('userName' , userName);
        navigate('/home')
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col'>
        <input
          type="text"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Username"

          value = {userName} 
          onChange={(e) => setUserName(e.target.value)}
        />
        
        <input
          type="password"
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500 transition duration-200"
          onClick={handleSubmit}
        >
            Log In
        </button>
        </form>
        
          
        
      </div>
    </div>
  )
}
