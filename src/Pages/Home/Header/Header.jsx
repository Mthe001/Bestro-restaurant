import React from 'react';
import Category from './Category/Category';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Header = () => {
    return (
        <div>
            <section>
                <SectionTitle
                    subHeading={'-- From 11:00am to 10:00pm --'}
                    heading={"Order Online"}>

                </SectionTitle>
            </section>



            <Category />
        </div>
    );
};

export default Header;