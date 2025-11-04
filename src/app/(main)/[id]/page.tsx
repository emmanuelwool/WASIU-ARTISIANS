
'use client'
import { useParams } from 'next/navigation'
import React from 'react';

const Page = () => {
    const { id } = useParams<{ id: string }>()
       console.log(id)
    return (
        <div>
            {id}
           hello worrd 
        </div>
    );
}

export default Page;
