import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Assuming reviews.json is structured with the data you provided
        fetch('http://localhost:5000/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className='my-20'>
            <SectionTitle
                subHeading={'--What Our Client Says--'}
                heading={'Testimonials'}
            >
            </SectionTitle>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className='mySwiper'
            >
                {/* Loop through reviews and create SwiperSlide for each */}
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div className="testimonial-card lg:py-10  py-5  md:mx-10 mx-6  lg:mx-24 bg-gray-100 rounded-lg shadow-md">
                            <div className="testimonial-content text-center">
                                <p className="text-xl font-semibold text-gray-800">{review.name}</p>
                                <p className="text-gray-500  px-4  lg:mb-4">{review.details}</p>
                                {/* Display rating */}
                                <div className="rating">
                                    {"⭐".repeat(review.rating)}
                                    {"☆".repeat(5 - review.rating)}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
