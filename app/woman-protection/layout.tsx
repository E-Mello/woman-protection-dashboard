"use client"

// app/layout.tsx

import { FiHome, FiInfo, FiMenu } from 'react-icons/fi';

import Link from 'next/link';
import { isActiveNavAtom } from '@/atoms/activeNavAtom';
import { useAtom } from "jotai";
import { useState } from 'react';

const Sidenav = () => {
  const [isActiveNav, setIsActiveNav] = useAtom(isActiveNavAtom);

  const toggleSidenav = () => {
    setIsActiveNav(!isActiveNav);
  };

  return (
    <nav className={`bg-gray-800 h-full text-white w-full flex flex-col`}>
      <div className={`p-4 flex justify-between ${isActiveNav ? '' : 'pl-5'}`}>
        {isActiveNav && <h2 className="text-xl font-semibold">Sidenav</h2>}
        <button className={`flex bg-gray-600 rounded p-2`} onClick={toggleSidenav}>
          <FiMenu className="text-white" />
        </button>
      </div>
      <ul className={`p-4 flex flex-col ${isActiveNav ? '' : 'pl-7 justify-between gap-2'}`}>
        <li className='flex'>
          <Link href="/">
            <div className="py-2 flex gap-4">
              <FiHome className="flex mt-1" />
              {isActiveNav && <p className='flex'>Home</p>}
            </div>
          </Link>
        </li>
        <li className='flex'>
          <Link href="/about">
            <div className="py-2 flex gap-4 align-middle">
              <FiInfo className="flex mt-1" />
              {isActiveNav && 'About'}
            </div>
          </Link>
        </li>
        <li className='flex'>
          <Link href="/dashboard">
            <div className="py-2 flex gap-4 align-middle">
              <FiInfo className="flex mt-1" />
              {isActiveNav && 'Dashboard'}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};


export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isActiveNav, setIsActiveNav] = useAtom(isActiveNavAtom);
  return (
    <section className='flex w-full justify-between'>
      {/* Sidenav */}
      <section className={`flex ${isActiveNav ? 'w-[15%]' : 'w-[4%] '}`}>
        <Sidenav />
      </section>

      {/* Main Content */}
      <main className={`min-h-screen bg-background flex flex-col items-center ${isActiveNav ? 'w-[85%]' : 'w-[96%]'}`}>
        {children}
      </main>
    </section>
  );
}
