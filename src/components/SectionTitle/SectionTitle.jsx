import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center'>
            <p className='italic md:text-xl text-sm  lg:text-2xl  text-yellow-400 '>{subHeading}</p>
            <div className='divider divider-warning w-[25%] mx-auto'></div>
            <h3 className='text-xl md:text-2xl lg:text-3xl text-yellow-500 dark:text-orange-500'>{heading}</h3>
            <div className='divider divider-warning w-[25%] mx-auto'></div>
        </div>
    );
};

export default SectionTitle;
