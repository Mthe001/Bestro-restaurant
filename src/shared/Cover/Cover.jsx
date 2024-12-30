import React from 'react';
import { Parallax } from 'react-parallax';


const Cover = ({ img, title, description }) => {
    return (

        <Parallax
            blur={{ min: -40, max: 40 }}
            bgImage={img}
            bgImageAlt='the background image'
            strength={-200}
        >

            <div
                className="hero  h-[350px] lg:h-[550px] md:h-[450px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl text-yellow-400 dark:text-orange-500 font-bold">{title}</h1>
                        <p className="mb-5 dark:text-yellow-400  text-orange-500">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>


    );
};

export default Cover;