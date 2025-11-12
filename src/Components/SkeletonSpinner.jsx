import React from 'react';

const SkeletonSpinner = ({count = 6}) => {
    return (
        <div className=' m-auto  grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {Array.from({ length: count }).map((__, i) => (
                <div key={i} className="flex  flex-col gap-4">
                    <div className="skeleton h-48 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            ))}
        </div>
    );
};

export default SkeletonSpinner;