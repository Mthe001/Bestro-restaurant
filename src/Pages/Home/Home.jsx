import React from 'react';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import BistroBoss from './BistroBossLatter/BistroBoss';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Bestro Boss</title>
            </Helmet>
            <Banner />
            <Header />
            <BistroBoss />
            <PopularMenu />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;