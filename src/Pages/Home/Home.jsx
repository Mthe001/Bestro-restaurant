import React from 'react';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import BistroBoss from './BistroBossLatter/BistroBoss';
import PopularMenu from './PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner />
            <Header />
            <BistroBoss />
            <PopularMenu />
        </div>
    );
};

export default Home;