"use client"
import { categorieData } from '@/mocks/AllMock';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const Categorie = () => {
     const scrollContainerRef = useRef<HTMLDivElement>(null);
      const [showLeftButton, setShowLeftButton] = useState(false);
      const [showRightButton, setShowRightButton] = useState(true);
    
      const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } =
            scrollContainerRef.current;
    
          setShowLeftButton(scrollLeft > 10);
    
          setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
        }
      };
    
      useEffect(() => {
        checkScrollPosition();
    
        const timer = setTimeout(checkScrollPosition, 100);
        return () => clearTimeout(timer);
      }, [categorieData]);
    
      // Fonction pour scroller vers la gauche
      const scrollLeft = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: -300,
            behavior: "smooth",
          });
        }
      };
    
      // Fonction pour scroller vers la droite
      const scrollRight = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: 300,
            behavior: "smooth",
          });
        }
      };
      
    return (
        <div className='mt-8'>



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
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
               {
                categorieData.map((category) => {
                    return (
                        <>
              <div key={category.id} className='flex flex-col items-center justify-center space-y-2.5 h-24 border hover:border-blue-200 duration-400  hover:transition-discrete hover:duration-200 border-blue-50  shadow rounded-md p-2'>
          {/* L'icône est maintenant un composant React */}
          <category.icon size={14} className="text-blue-500" />
          <span className='font-semibold text-xs'>{category.name}</span>
        </div>
                        </>
                    )
                })
            }
         
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
}

export default Categorie;
