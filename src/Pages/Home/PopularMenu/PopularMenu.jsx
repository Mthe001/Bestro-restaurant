import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = React.useState([]);
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
            });
    }, []);

    const handleOrderNow = () => {
        navigate('/menu'); // Navigate to the "Order" page
    };

    return (
        <section className='my-6'>
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

            {/* "Order Now" Button */}
            <div className="flex justify-center ">
                <button
                    onClick={handleOrderNow}
                    className="btn btn-outline border-yellow-400 hover:bg-yellow-300  hover:border-transparent  border-b-4 border-0 transition-all"
                >
                    Check in Details
                </button>
            </div>
        </section>
    );
};

export default PopularMenu;
