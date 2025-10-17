import React from 'react';

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <div>
           <div className="max-w-7xl mx-auto">
              {children}
            </div> 
        </div>
    );
}

export default Container;
