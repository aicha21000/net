'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
    '/images/Gmail/01e19442-9253-48be-809f-3a74eca8848e.jpeg',
    '/images/Gmail/0419f087-9691-4a78-a159-1afb7f7cdc71.jpeg',
    '/images/Gmail/4d9a8fa4-b91b-47cd-8129-5f59a76e52c2.jpeg',
    '/images/Gmail/5b1537fe-9bba-4a04-864e-4657ba73fde4.jpeg',
    '/images/Gmail/a13a04da-701c-4cee-ac0d-6549f3dfc41f.jpeg',
    '/images/Gmail/a1c1abe1-6c04-491d-8814-2967f51af0cd.jpeg',
    '/images/Gmail/aeaa091c-68a7-4d37-8c68-0bb7112f787e.jpeg',
    '/images/Gmail/b6702f6a-8e24-417e-8022-d30837b1b8d4.jpeg',
    '/images/Gmail/bac6d60f-82c4-44dc-9c0e-aa2b8550a448.jpeg',
    '/images/Gmail/bacd9813-0654-41d6-b37c-ee441057590b.jpeg',
    '/images/Gmail/c240bbbd-b3ff-4e85-9493-a1f0ab7bc53d.jpeg',
    '/images/Gmail/d0461b9f-1b26-44df-84b8-a554e0c499db.jpeg',
    '/images/Gmail/new.png',
];

const GallerySlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    };

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    return (
        <section className="py-20 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl text-primary font-bold tracking-wide uppercase dark:text-primary-dark">
                        Notre Galerie
                    </h2>
                    <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
                        Découvrez nos réalisations et notre expertise en images
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Main Image Display */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-muted">
                        <Image
                            src={galleryImages[currentIndex]}
                            alt={`Réalisation Ô ECLAT ${currentIndex + 1}`}
                            fill
                            className="object-cover"
                            priority={currentIndex === 0}
                        />

                        {/* Watermark Overlay */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                                <div className="text-white text-6xl md:text-8xl font-bold tracking-wider transform rotate-[-30deg] select-none">
                                    Ô ECLAT
                                </div>
                            </div>
                            {/* Bottom right watermark */}
                            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                                <p className="text-white text-sm font-semibold">© Ô ECLAT</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all hover:scale-110"
                        aria-label="Image précédente"
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-white" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all hover:scale-110"
                        aria-label="Image suivante"
                    >
                        <ChevronRight className="h-6 w-6 text-gray-800 dark:text-white" />
                    </button>

                    {/* Slide Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {galleryImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all ${index === currentIndex
                                    ? 'w-8 bg-primary dark:bg-primary-dark'
                                    : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                    }`}
                                aria-label={`Aller à l'image ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Image Counter */}
                    <div className="text-center mt-4">
                        <p className="text-sm text-muted-foreground">
                            {currentIndex + 1} / {galleryImages.length}
                        </p>
                    </div>
                </div>

                {/* Thumbnail Preview */}
                <div className="mt-8 max-w-5xl mx-auto">
                    <div className="grid grid-cols-4 md:grid-cols-7 gap-2 md:gap-4">
                        {galleryImages.slice(0, 7).map((image, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`relative aspect-square rounded-lg overflow-hidden transition-all ${index === currentIndex
                                    ? 'ring-4 ring-primary dark:ring-primary-dark scale-105'
                                    : 'opacity-60 hover:opacity-100'
                                    }`}
                            >
                                <Image
                                    src={image}
                                    alt={`Miniature ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySlider;
