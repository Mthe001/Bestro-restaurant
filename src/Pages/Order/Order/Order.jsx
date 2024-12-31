import React from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../../shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Order = () => {
    return (
        <div>
            <Helmet>
                <title>Order | Bestro Boss</title>
            </Helmet>

            {/* Cover Section */}
            <Cover
                img={orderCoverImg}
                title={'Order Your Favorite Dishes'}
                description={
                    'Experience the ease of online ordering with our carefully curated menu. Choose your favorites, and we’ll ensure they’re prepared fresh and delivered straight to your table or doorstep. Your delicious meal is just a few clicks away!'
                }
            />

            {/* Tabs Section */}
            <div className="flex justify-center mt-8 px-4">
                <Tabs className="w-full max-w-4xl">
                    {/* Tab List */}
                    <TabList className="flex flex-wrap justify-center gap-4 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
                        <Tab
                            className="cursor-pointer px-4 py-2 text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-400 transition-all duration-300"
                            selectedClassName="border-b-4 border-yellow-400 text-yellow-400"
                        >
                            Salads
                        </Tab>
                        <Tab
                            className="cursor-pointer px-4 py-2 text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-400 transition-all duration-300"
                            selectedClassName="border-b-4 border-yellow-400 text-yellow-400"
                        >
                            Pizza
                        </Tab>
                        <Tab
                            className="cursor-pointer px-4 py-2 text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-400 transition-all duration-300"
                            selectedClassName="border-b-4 border-yellow-400 text-yellow-400"
                        >
                            Soup
                        </Tab>
                        <Tab
                            className="cursor-pointer px-4 py-2 text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-400 transition-all duration-300"
                            selectedClassName="border-b-4 border-yellow-400 text-yellow-400"
                        >
                            Drinks
                        </Tab>
                    </TabList>

                    {/* Tab Panels */}
                    <TabPanel>
                        <div className="mt-4 px-4 md:px-8">
                            <h2 className="text-lg md:text-xl font-semibold">Salads</h2>
                            <p className="mt-2 text-sm md:text-base">
                                Fresh and healthy salads made with the finest ingredients. Try our Caesar Salad, Greek Salad, and more!
                            </p>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="mt-4 px-4 md:px-8">
                            <h2 className="text-lg md:text-xl font-semibold">Pizza</h2>
                            <p className="mt-2 text-sm md:text-base">
                                Delicious pizzas with a variety of toppings. From Margherita to Pepperoni, we’ve got you covered!
                            </p>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="mt-4 px-4 md:px-8">
                            <h2 className="text-lg md:text-xl font-semibold">Soup</h2>
                            <p className="mt-2 text-sm md:text-base">
                                Warm and comforting soups perfect for any meal. Try our Tomato Soup, Chicken Soup, and more!
                            </p>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="mt-4 px-4 md:px-8">
                            <h2 className="text-lg md:text-xl font-semibold">Drinks</h2>
                            <p className="mt-2 text-sm md:text-base">
                                Quench your thirst with our selection of drinks. From smoothies to soft drinks, there’s something for everyone!
                            </p>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;
