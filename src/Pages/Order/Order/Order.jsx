import React from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../../shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    return (
        <div>
            <Helmet>
                <title>Order | Bestro Boss</title>
            </Helmet>
            <Cover
                img={orderCoverImg}
                title={'Order Your Favorite Dishes'}
                description={'Experience the ease of online ordering with our carefully curated menu. Choose your favorites, and we’ll ensure they’re prepared fresh and delivered straight to your table or doorstep. Your delicious meal is just a few clicks away!'}
            ></Cover>
            <div role="tablist" className="tabs tabs-lifted">
                <a role="tab" className="tab">Tab 1</a>
                <a role="tab" className="tab tab-active">Tab 2</a>
                <a role="tab" className="tab">Tab 3</a>
            </div>

        </div>
    );
};

export default Order;