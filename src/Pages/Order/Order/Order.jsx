import React, { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../../shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hook/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'drinks', 'dessert'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category) || 0; // Default to 0 if category not found
    const [activeIndex, setActiveIndex] = useState(initialIndex);
    const [menu] = useMenu();

    // Filter menu items by categories
    const salads = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');

    return (
        <div>
            {/* Helmet for SEO */}
            <Helmet>
                <title>Order | Bestro Boss</title>
            </Helmet>

            {/* Cover Section */}
            <Cover
                img={orderCoverImg}
                title="Order Your Favorite Dishes"
                description="Experience the ease of online ordering with our carefully curated menu. Choose your favorites, and we’ll ensure they’re prepared fresh and delivered straight to your table or doorstep. Your delicious meal is just a few clicks away!"
            />

            {/* Tabs Section */}
            <div className="flex justify-center mt-8 px-4">
                <Tabs
                    className="w-full max-w-4xl"
                    selectedIndex={activeIndex}
                    onSelect={index => setActiveIndex(index)}
                >
                    {/* Tab List */}
                    <TabList className="flex flex-wrap justify-center gap-4 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
                        {categories.map((cat, index) => (
                            <Tab
                                key={index}
                                className="cursor-pointer px-4 py-2 text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-400 transition-all duration-300"
                                selectedClassName="border-b-4 border-yellow-400 text-yellow-400"
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)} {/* Capitalize */}
                            </Tab>
                        ))}
                    </TabList>

                    {/* Tab Panels */}
                    <TabPanel>
                        <OrderTab items={salads} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessert} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;
