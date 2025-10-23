import React from 'react';

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <div>
           <div className=" container mx-auto px-4 md:px-10 lg:px-20">
              {children}
            </div> 
        </div>
    );
}

export default Container;
