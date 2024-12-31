import React from 'react';

const FoodCard = ({ item }) => {
    // Destructure properties from the item prop
    const { image, price, recipe, name } = item;

    return (
        <div className="max-w-sm mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Image Section */}
            <div className="h-48 bg-gray-200 dark:bg-zinc-800">
                <img
                    src={image} // Dynamically set the image
                    alt={name} // Set the alt text as the name of the food
                    className="w-full h-full p-2 rounded-xl object-cover"
                />
            </div>

            {/* Card Content */}
            <div className="p-4  dark:bg-zinc-900 m-1 rounded-lg text-center">
                {/* Food Name */}
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {name}
                </h2>

                {/* Recipe/Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {recipe}
                </p>

                <div className='flex justify-between items-center mt-4'>
                    {/* Price */}
                    <p className="text-lg font-bold text-yellow-500 mt-2">${price}</p>

                    {/* Add to Cart Button */}
                    <button className="mt-4 px-4 py-2 bg-yellow-400 text-white font-medium rounded-md hover:bg-yellow-500 dark:hover:bg-yellow-300 transition-colors duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
