
import React from 'react';

const MenuItem = ({ item }) => {
    const { image, price, recipe, name } = item;

    return (
        <div className="flex flex-wrap items-center justify-between gap-5 p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg shadow-lg transition-all duration-300 mx-5">
            {/* Image container with a custom star-shaped border */}
            <div className="flex-shrink-0">
                <img
                    style={{
                        borderRadius: '50% 40% 30% 50% / 50% 50% 40% 30%', // Custom star-like borderRadius
                        width: '110px',
                        height: '100px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                    }}
                    onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')} // Slight zoom effect on hover
                    onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                    src={image}
                    alt={name}
                />
            </div>
            {/* Details */}
            <div className="flex-1 text-center md:text-left">
                <h3 className="uppercase text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {name} <span className="text-gray-400">-----------</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{recipe}</p>
            </div>
            {/* Price */}
            <p className="text-yellow-500 text-lg font-bold">${price}</p>
        </div>
    );
};

export default MenuItem;
