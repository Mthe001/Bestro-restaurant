import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Category.css';

import { Pagination } from 'swiper/modules';

const Category = () => {
    const categories = [
        { id: 1, name: 'Salad', image: 'https://i.ibb.co.com/2yL4Lkb/slide1.jpg' },
        { id: 2, name: 'Soup', image: 'https://i.ibb.co.com/64MLj5X/slide3.jpg' },
        { id: 3, name: 'Desert', image: 'https://i.ibb.co.com/brWFZrN/slide4.jpg' },
        { id: 4, name: 'Pizza', image: 'https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=300' },
        { id: 5, name: 'Fashion', image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Education', image: 'https://via.placeholder.com/150' },
        { id: 7, name: 'Fitness', image: 'https://via.placeholder.com/150' },
        { id: 8, name: 'Lifestyle', image: 'https://via.placeholder.com/150' },
    ];

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Categories</h2>
            <Swiper
                slidesPerView={4} // Default number of slides
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    // Responsive breakpoints
                    320: {
                        slidesPerView: 1, // 1 slide for small screens
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2, // 2 slides for slightly larger screens
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3, // 3 slides for tablets
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 4, // 4 slides for desktop
                        spaceBetween: 30,
                    },
                }}
            >
                {categories.map((category) => (
                    <SwiperSlide key={category.id}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src={category.image}
                                alt={category.name}
                                style={{
                                    width: '260px',
                                    height: '280px',
                                    borderRadius: '3px',
                                    objectFit: 'cover',
                                    margin: '0 auto',
                                }}
                            />
                            <h4 style={{ marginTop: '10px' }}>{category.name}</h4>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Category;
