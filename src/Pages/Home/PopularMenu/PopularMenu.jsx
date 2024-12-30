import React, { useEffect } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = React.useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section>
            <SectionTitle
                heading='Form Our Menu'
                subHeading='-- Popular Items --'
            >
            </SectionTitle>

            <div className='grid grid-cols-1 lg:grid-cols-2 my-10 gap-5 md:grid-cols-2'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;