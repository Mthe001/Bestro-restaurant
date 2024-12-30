import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Menu | Bestro Boss</title>
            </Helmet>
            <Cover img={menuImg} title={'Our Menu'} description={'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem '} >
            </Cover>
            <PopularMenu />
        </div>
    );
};

export default Menu;