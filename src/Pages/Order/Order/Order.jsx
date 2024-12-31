import React from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../../shared/Cover/Cover';
const Order = () => {
    return (
        <div>
            <Cover
                img={orderCoverImg}
                title={'Order Your Favorite Dishes'}
                description={'Experience the ease of online ordering with our carefully curated menu. Choose your favorites, and we’ll ensure they’re prepared fresh and delivered straight to your table or doorstep. Your delicious meal is just a few clicks away!'}
            ></Cover>

        </div>
    );
};

export default Order;