import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './Banner.css';

const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [images] = useState([
        'https://i.ibb.co.com/nfMbPs0/01.jpg',
        'https://i.ibb.co.com/Km8tqZQ/02.jpg',
        'https://i.ibb.co.com/hytqTWq/03.png',
        'https://i.ibb.co.com/7StWv9J/04.jpg',
        'https://i.ibb.co.com/PNsnBs5/05.png',
        'https://i.ibb.co.com/KVqpXZG/06.png',
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
                                src={image}
                                alt={`Slide ${index + 1}`}
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
