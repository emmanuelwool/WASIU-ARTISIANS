import { ProductSidebarNavigationMockData } from '@/mocks/AllMock';
import Link from 'next/link';
import React from 'react';

const LayoutSidebar = () => {
    return (
        <div className=""> 
          <div className="bg-white  min-h-screen rounded-2xl w-64 shadow-lg p-4">
             <div className="space-y-2"> 
                 {ProductSidebarNavigationMockData.map((sideData) => {
                  
                    const IconComponent = sideData.icon as React.ElementType; 
                    
                    return (
                        <Link 
                            key={sideData.id} 
                            href={sideData.link} 
                            // Styles pour l'élément de navigation
                            className='flex items-center space-x-3 p-2 rounded-lg text-black hover:bg-gray-100 transition-colors duration-150'
                        >
                         
                            <IconComponent className="h-5 w-5 text-gray-600" />
                            
                            {/* Le titre du lien */}
                            <span className='font-medium text-base'>
                                {sideData.title}
                            </span>
                        </Link>
                    )
                 })
                 }
            </div>
            </div>  
        </div>
    );
}

export default LayoutSidebar;