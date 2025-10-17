'use client'
import { ProfileNavigationMockData } from '@/mocks/AllMock';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ChevronRight } from 'lucide-react';

const ProfileSidebar = () => {
    const pathname = usePathname();

    return (
        <div className="w-full lg:w-64">
            {/* Sidebar Desktop */}
            <div className="hidden lg:block sticky top-4">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-2">
                    <nav className="space-y-1">
                        {ProfileNavigationMockData.map((sideData, index) => {
                            const isActive = pathname === sideData.link;
                            
                            return (
                                <Link
                                    key={index}
                                    href={sideData.link}
                                    className={`
                                        flex items-center justify-between
                                        px-4 py-3 rounded-lg
                                        text-sm font-medium
                                        transition-all duration-200
                                        group
                                        ${isActive 
                                            ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' 
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                        }
                                    `}
                                >
                                    <span>{sideData.title}</span>
                                    <ChevronRight 
                                        className={`
                                            w-4 h-4 transition-transform
                                            ${isActive ? 'text-blue-700' : 'text-gray-400 group-hover:translate-x-1'}
                                        `}
                                    />
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* Sidebar Mobile - Horizontal Scroll */}
            <div className="lg:hidden mb-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-2">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {ProfileNavigationMockData.map((sideData, index) => {
                            const isActive = pathname === sideData.link;
                            
                            return (
                                <Link
                                    key={index}
                                    href={sideData.link}
                                    className={`
                                        flex-shrink-0
                                        px-4 py-2 rounded-lg
                                        text-sm font-medium
                                        whitespace-nowrap
                                        transition-all duration-200
                                        ${isActive 
                                            ? 'bg-blue-600 text-white shadow-md' 
                                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                        }
                                    `}
                                >
                                    {sideData.title}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Style pour cacher la scrollbar sur mobile */}
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}

export default ProfileSidebar;