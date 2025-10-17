'use client'
import { ProductSidebarNavigationMockData } from '@/mocks/AllMock';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const LayoutSidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Charger l'état sauvegardé au montage
  useEffect(() => {
    setIsMounted(true);
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState !== null) {
      setIsCollapsed(JSON.parse(savedState));
    }
  }, []);

  // Sauvegarder l'état lors du changement
  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
  };

  // Éviter le flash de contenu non stylisé
  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative">
      <div 
        className={`bg-white flex flex-col justify-between min-h-screen rounded-2xl shadow-lg p-4 transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {/* Header */}
        <div className="space-y-8">
          <div className="Logo flex items-center justify-between">
            <h1 
              className={`font-bold text-xl text-gray-800 transition-all duration-300 ${
                isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
              }`}
            >
              Wassiu
            </h1>
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? (
                <ArrowBigRight 
                  size={20} 
                  className="text-gray-600 group-hover:text-blue-500 transition-colors" 
                />
              ) : (
                <ArrowBigLeft 
                  size={20} 
                  className="text-gray-600 group-hover:text-blue-500 transition-colors" 
                />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            {ProductSidebarNavigationMockData.map((sideData) => {
           const isActive = pathname === sideData.link || 
                (sideData.link !== '/dashboard' && pathname.startsWith(sideData.link));
              const IconComponent = sideData.icon as React.ElementType;
              
              return (
                <Link
                  key={sideData.id}
                  href={sideData.link}
                  className={`flex rounded-md items-center gap-3 px-3 py-3 transition-all duration-200 relative group ${
                    isActive 
                      ? 'text-white bg-blue-500 shadow-md' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  } ${isCollapsed ? 'justify-center' : ''}`}
                  title={isCollapsed ? sideData.title : ''}
                >
                  <IconComponent 
                    className={`h-5 w-5 flex-shrink-0 transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-gray-600 group-hover:text-blue-500'
                    }`} 
                  />
                  
                  <span 
                    className={`font-medium text-base whitespace-nowrap transition-all duration-300 ${
                      isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
                    }`}
                  >
                    {sideData.title}
                  </span>

                  {/* Tooltip pour mode collapsed */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-lg">
                      {sideData.title}
                      <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer */}
        <div className="Footer">
          <div 
            className={`bg-gradient-to-br from-blue-900 to-blue-700 p-4 rounded-lg transition-all duration-300 ${
              isCollapsed ? 'h-16' : 'h-32'
            }`}
          >
            {!isCollapsed && (
              <div className="text-white text-sm opacity-90">
                <p className="font-semibold mb-1">Need help?</p>
                <p className="text-xs">Contact support</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutSidebar;