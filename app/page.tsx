"use client";

import Link from 'next/link';
import Messages from './messages';
import { useRouter } from "next/navigation";
import { useState } from 'react';

export default function Login() {
  const router = useRouter(); // Initialize useRouter hook
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (user === 'admin' && password === 'admin') {
      router.push('/woman-protection'); // Redirect to /dashboard on successful login
    } else {
      setErrorMessage('Invalid username or password');
    }
  };


  return (
    <div className="flex w-full px-8 h-full justify-center gap-2">
      <form className="flex flex-col mt-48 w-96 h-96 align-baseline justify-center gap-2" method="post">
        <label className="text-md text-foreground" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label className="text-md text-foreground" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-green-700 rounded px-4 py-2 text-white mb-2" onClick={handleLogin}>
          Sign In
        </button>
        <button
          className="border border-gray-700 rounded px-4 py-2 text-black mb-2"
          onClick={() => router.push('/auth/sign-up')}
        >
          Sign Up
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
}
