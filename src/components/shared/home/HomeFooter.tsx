'use client'
import React, { useState } from 'react';

const HomeFooter = () => {
  const [date] = useState(new Date());

  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4 text-center space-y-4">
        <h2 className="text-xl font-semibold">eMarketPlace for Artisans</h2>
        <p className="text-gray-400">
          Connecting local artisans with customers across Nigeria
        </p>

        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-blue-400 transition">About</a>
          <a href="#" className="hover:text-blue-400 transition">Contact</a>
          <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          © {date.getFullYear()} eMarketPlace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default HomeFooter;
