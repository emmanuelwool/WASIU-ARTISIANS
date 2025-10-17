import { NavigationMockData } from '@/mocks/AllMock';
import Link from 'next/link';
import React from 'react';

const HomeNavbar = () => {
    return (
        <div>
           <div className="">
            <div className="">
                <h1>Wa<span>ss</span>iu</h1>
            </div>
            <nav>
                <ul>
                    {NavigationMockData.map((nav, index)=> {
                        return (
                            <>
                              <li key={index} className="">
                                  <Link href={nav.link}>{nav.title}</Link>
                              </li>
                            </>
                        )
                    })}
                </ul>

                <div className="">
                    <Link href={"/sign-in"}>Sign-in</Link>
                    <Link href={""}>Sign-up</Link>
                </div>
            </nav>
            
            </div> 
        </div>
    );
}

export default HomeNavbar;
