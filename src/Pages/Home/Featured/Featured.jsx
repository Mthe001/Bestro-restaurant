import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="py-10 bg-fixed featured-item">
            <SectionTitle
                subHeading={'--Check it out--'}
                heading={'Featured Item'}
            >
            </SectionTitle>
            <div className="flex flex-col md:flex-row justify-center bg-slate-700 w-[85%] mx-auto rounded-lg bg-opacity-40 items-center py-8 px-5 md:px-20 gap-8">
                {/* Image Section */}
                <div className="flex justify-center">
                    <img className="w-[70%] rounded-lg shadow" src={featuredImg} alt="featured" />
                </div>
                {/* Text Section */}
                <div className="space-y-4 text-center md:text-left">
                    <p className="text-red-500">Aug 20, 2025</p>
                    <p className="uppercase text-orange-200 font-bold">Where Can I Get Some?</p>
                    <p className="text-stone-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
                        exercitationem voluptatibus nemo sapiente dicta ullam modi aspernatur
                        dignissimos quas porro?
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
