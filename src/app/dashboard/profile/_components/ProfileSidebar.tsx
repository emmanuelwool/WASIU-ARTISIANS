import { ProfileNavigationMockData } from '@/mocks/AllMock';
import Link from 'next/link';
import React from 'react';
ProfileNavigationMockData
const ProfileSidebar = () => {
    return (
        <div>
          <div className="">
            <div className="bg-gray-50 rounded-2xl w-64 space-y-4 p-4 ">
                 {ProfileNavigationMockData.map((sideData, index) => {
                    return (
                        <>
                        <div key={index} className="">

                           <Link href={sideData.link}  className='font-semibold text-black text-base'> {sideData.title}</Link>
                        </div>
                        
                        
                        </>
                    )
                 })
                 }
            </div>
            </div>  
        </div>
    );
}

export default ProfileSidebar;
