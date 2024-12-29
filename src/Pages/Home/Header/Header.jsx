import React from 'react';
import Category from './Category/Category';

const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='italic text-xl  text-yellow-400 '>--From 11:00am to 10:00pm--</h1>

                <div>
                    <div className='divider divider-warning w-[25%] mx-auto'></div>
                    <div className='italic lg:text-4xl md:text-3xl text-lg'>
                        Order Online
                    </div>
                    <div className='divider divider-warning w-[25%] mx-auto'></div>
                </div>
            </div>



            <Category />
        </div>
    );
};

export default Header;