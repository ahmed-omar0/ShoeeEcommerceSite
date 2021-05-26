import React from 'react';
import {Link} from 'react-router-dom';
//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
//Images
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';
// Redux
import { useDispatch } from 'react-redux';
import {changeSectionClass} from '../../redux/products/actions';



// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Slide = () => {
    const imgs = [slide1, slide2, slide3];
    const dispatch = useDispatch();
    //Slides
    const slides = [];
    const headers = ['men', 'headphones', 'shoes'];
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
                                <h2>{`${headers[i]} section`}</h2>
                                <button onClick={() => dispatch(changeSectionClass(headers[i] === 'men' ? 'shirt' : headers[i]))}>
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