import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';

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
                className='swiper-zoom-target'
                style={{
                    listStyle:"none",
                    backgroundImage: `url(${imgs[i]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: "center center",
                    width: '97%',
                    height: '100%'
                    }}>
                        {({isActive}) => (
                            isActive ? 
                            <div className="content">
                                <h2>{headers[i]}</h2>
                                <button>
                                    <Link to="/products"> Shop Now </Link>
                                </button>
                            </div>
                            :
                            ''
                        )}
            </SwiperSlide>
        )
    }
    return (
        <React.Fragment>
            <Swiper 
                id="main" 
                tag="section" 
                wrapperTag="ul"
                className="main-slider"
                spaceBetween={50}
                initialSlide={1}
                autoplay={{delay: 3000}}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{clickable:true}}
                a11y={{
                    prevSlideMessage: 'Previous slide',
                    nextSlideMessage: 'Next slide',
                    enabled: true
                }}
                keyboard={ {
                    enabled: true,
                }}
                >
                {slides}
            </Swiper>
        </React.Fragment>
    );
}


export default Slide;