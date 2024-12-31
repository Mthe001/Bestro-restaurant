import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import drinksImg from '../../../assets/menu/drink.png.png'
import useMenu from '../../../Hook/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
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
                <title>Menu | Bestro Boss</title>
            </Helmet>
            <Cover img={menuImg} title={'Our Menu'} description={'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem '} >
            </Cover>


            <section className='my-10'>
                <SectionTitle
                    subHeading={"-- Don't Miss --"}
                    heading={"Today's offer"}
                ></SectionTitle>
                {/* offered menu items */}
                <MenuCategory items={offered}></MenuCategory>
            </section>




            {/* Dessert menu items */}
            <section className='my-10'>
                <MenuCategory
                    items={dessert}
                    title='dessert'
                    desc={'Indulge in our selection of delightful desserts, crafted to satisfy your sweet cravings. Perfect for a sweet finish to your meal!'}
                    coverImg={desertImg}
                ></MenuCategory>
            </section>

            {/* Pizza menu items */}
            <section className='my-10'>
                <MenuCategory
                    items={pizza}
                    title='pizza'
                    desc={'Savor the taste of our freshly baked pizzas, topped with premium ingredients and bursting with flavor in every bite.'}
                    coverImg={pizzaImg}
                ></MenuCategory>
            </section>

            {/* Salad menu items */}
            <section className='my-10'>
                <MenuCategory
                    items={salad}
                    title='salad'
                    desc={'Discover our vibrant salads, made with the freshest ingredients to deliver a healthy and refreshing dining experience.'}
                    coverImg={saladImg}
                ></MenuCategory>
            </section>

            {/* Soup menu items */}
            <section className='my-10'>
                <MenuCategory
                    items={soup}
                    title='soup'
                    desc={'Enjoy our comforting soups, carefully prepared to warm your soul and delight your taste buds.'}
                    coverImg={soupImg}
                ></MenuCategory>
            </section>


            <section className='my-10'>
                <MenuCategory
                    items={drinks}
                    title='drinks'
                    desc={'Enjoy our comforting soups, carefully prepared to warm your soul and delight your taste buds.'}
                    coverImg={drinksImg}
                ></MenuCategory>
            </section>





        </div>
    );
};

export default Menu;