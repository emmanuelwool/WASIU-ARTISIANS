'use client'
import { mostPopulartServece } from '@/mocks/AllMock';
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PopularServices = () => {
 const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      setShowLeftButton(scrollLeft > 10);
      
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    
    const timer = setTimeout(checkScrollPosition, 100);
    return () => clearTimeout(timer);
  }, [mostPopulartServece]);

  // Fonction pour scroller vers la gauche
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  // Fonction pour scroller vers la droite
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='mt-16 space-y-4'>
      <h1 className='text-base italic md:text-xl lg:text-3xl font-bold'>
        Most Popular services
      </h1>
      
      <div className="relative">
        {/* Bouton gauche */}
        {showLeftButton && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Conteneur du carrousel */}
        <div 
          ref={scrollContainerRef}
          onScroll={checkScrollPosition}
          className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {mostPopulartServece.map((popularService, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-64 bg-[#C9D6B8] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-4">
                <p className="font-bold text-xl text-white">{popularService.title}</p>
                
              </div>
              <img 
                src={popularService.img} 
                alt={popularService.title}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Bouton droit */}
        {showRightButton && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

     
    </div>
  );
};

export default PopularServices;