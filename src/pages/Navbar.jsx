import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 shadow-md h-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-black font-semibold text-xl" style={{ fontFamily: 'Arial, sans-serif' }}>Decency Construction</div>
        <ul className="flex space-x-4 items-center m-2">
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
