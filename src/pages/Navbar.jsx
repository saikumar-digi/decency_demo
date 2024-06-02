import { Stack, Typography } from '@mui/material';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 shadow-md h-20 flex items-center justify-between">
    <div className="text-black text-2xl font-bold mb-2">
      Decency
    </div>
    <div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-black hover:text-gray-200 font-bold text-lg" style={{ fontFamily: 'Arial, sans-serif' }}>Home</a>
          </li>
          <li>
            <a href="/about" className="text-black hover:text-gray-200 font-bold text-lg" style={{ fontFamily: 'Arial, sans-serif' }}>About</a>
          </li>
          <li>
            <a href="/contactus" className="text-black hover:text-gray-200 font-bold text-lg" style={{ fontFamily: 'Arial, sans-serif' }}>Contact</a>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
