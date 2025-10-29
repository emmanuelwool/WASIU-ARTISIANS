import { mostPopulartServece } from '@/mocks/AllMock';
import React from 'react';

const AllServices = () => {
    return (
        <div className='mt-16 space-y-4'>
            <h1 className='text-base italic md:text-xl lg:text-3xl font-bold '>All Services available</h1>

           
          <div className="grid grid-cols-4">
              {
                mostPopulartServece.map((popularService, index)=> {
                    return (
                        <>
                        <div className="" key={index}>
                            <img src={popularService.img} alt="" />
                            <div className="">
                                <p>{popularService.title}</p>
                            </div>
                        </div>
                        </>
                    )
                })
            }
            </div> 
        </div>
    );
}

export default AllServices;
