'use client';
import { NavigationMockData } from '@/mocks/AllMock';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const HomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Wa<span className="text-blue-600">ss</span>iu
              </h1>
            </Link>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6 items-center">
              {NavigationMockData.map((nav, index) => (
                <li key={index}>
                  <Link
                    href={nav.link}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Auth Buttons Desktop */}
            <div className="flex items-center space-x-4 ml-6 border-l pl-6 border-gray-200">
              <Link
                href="/sign-in"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Sign-in
              </Link>
              <Link
                href="/sign-up"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-sm hover:shadow-md"
              >
                Sign-up
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 pt-2 pb-4 bg-gray-50 border-t border-gray-200">
          <ul className="space-y-3">
            {NavigationMockData.map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.link}
                  className="block py-2 px-4 text-gray-700 hover:bg-white hover:text-blue-600 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth Buttons Mobile */}
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
            <Link
              href="/sign-in"
              className="block w-full text-center py-2 px-4 text-gray-700 border border-gray-300 rounded-lg hover:bg-white transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign-in
            </Link>
            <Link
              href="/sign-up"
              className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign-up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HomeNavbar;