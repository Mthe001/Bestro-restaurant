import React from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../../shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hook/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
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
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;
