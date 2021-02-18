import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y , Autoplay} from 'swiper';
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Slide = () => {
    const imgs = [slide1, slide2, slide3]
    //Slides
    const slides = []
    const headers = ['men section', 'HeadPhones section', 'shoes section']
    for (let i = 0; i< imgs.length ;i++){
        slides.push(
            <SwiperSlide 
                key={"slide-" + i} 
                tag="li"
                style={{
                    listStyle:"none",
                    backgroundImage: `url(${imgs[i]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: "center center",
                    width: '97%',
                    height: '100%'
                    }}>
                        <h2>{headers[i]}</h2>
                        <button>Shop Now</button>
            </SwiperSlide>
        )
    }
    return (
        <React.Fragment>
            <Swiper 
                id="main" 
                tag="section" 
                wrapperTag="ul"  
                spaceBetween={50}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{clickable:true}}
                autoplay={{delay:6000}}
                a11y={{
                    prevSlideMessage: 'Previous slide',
                    nextSlideMessage: 'Next slide',
                    enabled: true
                }}
                >
                {slides}
            </Swiper>
        </React.Fragment>
    );
}


export default Slide;