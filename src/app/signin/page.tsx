'use client';

import React, { useEffect, useState } from 'react';
import { postRequest } from '../utils/api';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true); // New state for loading
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/');
    } else {
      setLoading(false); // Set loading to false if no token is found
    }
  }, [router]);


  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Fetching Your Tasks !', {
      className: 'bg-green-600 text-xl text-white font-semibold px-6 rounded-lg',
      icon: '⌛',
      duration: 7000,
    });
    try {
      const response = await postRequest('/user/signin', email, password);
      const { token, username } = response;
      console.log(token, username);
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      toast.success('SignIn successful!', {
        className: 'bg-green-600 txt-xl text-white font-bold px-4 py-3 rounded-lg',
        icon: '😊',
        duration: 5000,
      });
      router.push('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (loading) {
    return null; // Render nothing or a loader while checking the token
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#AFA3FF]">
    <div className="w-full max-w-md p-12 rounded-lg shadow-md bg-[#F0F0F0]">
      <h1 className="text-2xl font-bold text-center">
        Welcome to <span className="text-[#4534AC]">Workflo</span>!
      </h1>

      <form className="flex flex-col gap-4 mt-4" onSubmit={login}>
        <input
          className="p-2 rounded-md bg-gray-200 text-md"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="relative">
          <input
            className="p-2 rounded-md bg-gray-200 w-full"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </button>
        </div>
        <button
          type="submit"
          className="text-white rounded-lg bg-gradient-to-b from-[#4C38C2] to-[#2F2188] p-2 w-full"
        >
          Log In
        </button>
      </form>
      <div>
        <p className="text-center mt-4">
          Don't have an account? Create a{' '}
          <a href="/signup" className="text-[#0054A1]">
            new account
          </a>
        </p>
      </div>
    </div>
  </div>
);
};

export default Signin;
