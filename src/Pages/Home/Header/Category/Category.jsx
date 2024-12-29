import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Category.css'; // You can add custom styles here if needed

// Import required modules
import { Pagination } from 'swiper/modules';

const Category = () => {
    const categories = [
        { id: 1, name: 'Technology', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Health', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Travel', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Food', image: 'https://via.placeholder.com/150' },
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
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
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
