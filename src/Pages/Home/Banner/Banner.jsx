import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './Banner.css';
import bannerOne from '../../../assets/home/01.jpg';
import bannerTwo from '../../../assets/home/02.jpg';
import bannerThree from '../../../assets/home/03.png';
import bannerFour from '../../../assets/home/04.jpg';
import bannerFive from '../../../assets/home/05.png';
import bannerSix from '../../../assets/home/06.png';


const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [images] = useState([
        { src: bannerOne, alt: 'Banner 1' },
        { src: bannerTwo, alt: 'Banner 2' },
        { src: bannerThree, alt: 'Banner 3' },
        { src: bannerFour, alt: 'Banner 4' },
        { src: bannerFive, alt: 'Banner 5' },
        { src: bannerSix, alt: 'Banner 6' },
    ]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        const interval = setInterval(scrollNext, 3000);
        return () => clearInterval(interval);
    }, [scrollNext]);

    useEffect(() => {
        if (emblaApi) emblaApi.reInit();
    }, [emblaApi]);

    return (
        <div className="embla max-w-full mx-auto">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="embla__slide flex-shrink-0 w-full"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
