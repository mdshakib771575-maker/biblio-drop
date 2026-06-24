import React from 'react';

const DashboardHeading = ({ title, description }) => {
    return (
        <div>
            <div className='border-b border-white/5 pb-5 ml-8'>
                <h1 className='text-3xl font-extrabold tracking-tight bg-gradient-to-r from-pink-600 via-purple-500 to-purple-500 bg-clip-text text-transparent'>
                    {title}
                </h1>
                <p>
                    {description}
                </p>

            </div>
        </div>
    );
};

export default DashboardHeading;