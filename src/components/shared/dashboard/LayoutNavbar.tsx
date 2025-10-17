'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Mail, Search, User, Settings, LogOut, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const LayoutNavbar = () => {
  const [dropMenu, setDropMenu] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer le menu quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropMenu(false);
      }
    };

    if (dropMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropMenu]);

  const handleToggle = () => {
    setDropMenu(!dropMenu);
  };

  return (
    <div className='px-4 md:px-8 py-4 border-b border-gray-200 w-full bg-white shadow-sm'>
      <div className="flex justify-between items-center container mx-auto">
        {/* Barre de recherche */}
        <div className="w-full max-w-md relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input 
            className='py-5 pl-10 pr-4 border-gray-300 focus:border-blue-400 focus:ring-blue-400' 
            placeholder="Rechercher..."
          />
        </div>

        {/* Version mobile - Icône de recherche */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
        </div>

        {/* Actions et profil */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Notifications et messages */}
          <div className="flex items-center gap-2 md:gap-3">
            <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 transition-colors">
              <Mail className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
            </Button>
          </div>

          {/* Menu utilisateur */}
          <div className="relative" ref={dropdownRef}>
            <div 
              onClick={handleToggle} 
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-full p-1 pr-3 transition-colors"
            >
              <img 
                src="/mecanic.png" 
                alt="Profile" 
                className='w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-blue-400 object-cover' 
              />
              <ChevronDown 
                className={`w-4 h-4 text-gray-600 transition-transform duration-300 hidden sm:block ${dropMenu ? 'rotate-180' : ''}`} 
              />
            </div>

            {/* Dropdown Menu */}
            {dropMenu && (
              <div className="absolute right-0 mt-3 w-64 bg-white  rounded-xl shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {/* En-tête du menu */}
                <div className="bg-gray-100 px-4 py-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/mecanic.png" 
                      alt="Profile" 
                      className='w-12 h-12 rounded-full border-2 border-white object-cover' 
                    />
                    <div className="text-black">
                      <p className="font-semibold text-sm">Fawase DOHOU</p>
                      <p className="text-xs opacity-90">fawase@example.com</p>
                    </div>
                  </div>
                </div>

                {/* Options du menu */}
                <div className="py-2">
                  <Link 
                    href='/dashboard/profile'
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                    onClick={() => setDropMenu(false)}
                  >
                    <User className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                    <span className="text-sm text-gray-700 group-hover:text-blue-600 font-medium">Mon Profil</span>
                  </Link>
                  
                  <Link 
                    href='/dashboard/settings'
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                    onClick={() => setDropMenu(false)}
                  >
                    <Settings className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                    <span className="text-sm text-gray-700 group-hover:text-blue-600 font-medium">Paramètres</span>
                  </Link>
                </div>

                {/* Bouton de déconnexion */}
                <div className="border-t border-gray-200 p-2">
                  <Button 
                    className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white transition-colors"
                    onClick={() => {
                      setDropMenu(false);
                      // Logique de déconnexion ici
                    }}
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="font-medium">Déconnexion</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutNavbar;