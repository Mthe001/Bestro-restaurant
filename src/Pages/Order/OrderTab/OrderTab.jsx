import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderTab = ({ items }) => {
    return (
        <div className="mt-4 grid-cols-1 grid md:grid-cols-2 gap-7 lg:grid-cols-3 py-4">
            {
                items.map((item) => <FoodCard key={item._id} item={item}>

                </FoodCard>)
            }
        </div>
    );
};

export default OrderTab;