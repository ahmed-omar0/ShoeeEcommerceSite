import React from 'react';
// Swiper JS
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination } from 'swiper';
// Icons
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
// Redux
import {useSelector, useDispatch} from 'react-redux';
import {addItem, removeItem} from '../../redux/products/actions';

import RelatedProducts from './relatedProducts';


SwiperCore.use([Pagination]);

const SingleProduct = (props) => {
    const section = [];
    const images = [];
    const products = useSelector(state => state.products);
    const productId = useSelector(state => state.id);
    const numOfItems = useSelector(state => state.numOfItems);
    const dispatch = useDispatch();

    for(let i=0; i< products.length; i++){
        if (productId === products[i].id ){
            for (let x= 0;x <3;x++){
                images.push(
                    <SwiperSlide tag="li" key={products[i].id * Math.random()} style={{listStyle:'none'}}>
                        <img src={products[i].gallarey[x].url} alt="" loading="lazy" width="520"/>
                    </SwiperSlide>
                )
            }
            section.push(
                <React.Fragment key={i}>
                    <Swiper tag="section" wrapperTag="ul" loop={true} autoplay={{delay: 3000,}} 
                        spaceBetween={50}
                        pagination={{clickable: true}}>
                        {images}
                    </Swiper>
                    <div className="product_details">
                        <h1>{products[i].name}</h1>
                        <h2>Brand: {products[i].brand}</h2>
                        <h3>Description: </h3>
                        <p>
                            {products[i].desription}
                        </p>
                        <div className="stars">
                            {
                                Array.from({length: 5}, (_, index) => {
                                    return(
                                        <span key={index}>
                                            {
                                                products[i].stars >= index + 1 ? <BsStarFill/> :
                                                products[i].stars >= index + .5 ? <BsStarHalf/> :
                                                <BsStar/>
                                            }
                                        </span>
                                    )
                                })
                            }
                        </div>
                        <div className="items_count">
                            <button 
                                onClick={() => (numOfItems > 0 ? dispatch(removeItem(numOfItems)) : false)}
                                >
                            -</button>
                            <span>{numOfItems + 1}</span>
                            <button onClick={() => (numOfItems >= 0 ? dispatch(addItem(numOfItems)) : false)}>+</button>
                            <span>{`${products[i].price * (numOfItems + 1)} $`}</span>
                        </div>
                        <button className='add-items'>Add Items</button>
                    </div>
                </React.Fragment>
            )
        }
    }
    //Get Data
    return (
        <React.Fragment>
            <section className="single_product">
                {section}
            </section>
            <RelatedProducts/>
        </React.Fragment>
    );
}

export default SingleProduct;
