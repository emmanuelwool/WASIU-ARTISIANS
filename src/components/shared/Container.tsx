import React from 'react';

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <div>
           <div className=" ">
              {children}
            </div> 
        </div>
    );
}

export default Container;
