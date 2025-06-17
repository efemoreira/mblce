import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}

interface HeroCarouselProps {
  slides: Slide[];
}

const HeroCarousel = ({ slides }: HeroCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="relative h-[80vh] min-h-[500px] max-h-[800px] bg-black">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full"
        onSlideChange={handleSlideChange}
        onSwiper={swiper => {
          setSwiperInstance(swiper);
          setActiveIndex(swiper.activeIndex);
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-primary bg-opacity-70 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
                opacity: 0.7
              }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-primary/70 to-transparent" />
            
            {/* Content */}
            <div className="relative h-full container mx-auto px-4 flex items-center">
              <motion.div 
                className="max-w-2xl text-black"
                initial={{ opacity: 0, y: 30 }}
                animate={activeIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-secondary text-lg mb-2 font-semibold">{slide.subtitle}</h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-8 text-black">{slide.description}</p>
                <Link href={slide.buttonLink}>
                  <span className="inline-block bg-primary-dark text-white px-6 py-3 font-bold rounded hover:bg-primary transition-colors">
                    {slide.buttonText}
                  </span>
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Bullets */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => swiperInstance && swiperInstance.slideTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
