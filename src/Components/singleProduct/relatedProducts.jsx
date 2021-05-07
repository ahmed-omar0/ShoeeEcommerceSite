import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchProduct } from '../../redux/products/actions';
import {Link} from 'react-router-dom';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const RelatedProducts = () => {
    const items = [];
    const products = useSelector(state => state.products);
    const productId = useSelector(state => state.id);
    const dispatch = useDispatch();
    let numOfProducts = 0
    let productTitle = '';


    for (let x =0 ;x < products.length; x++){
        if(products[x].id === productId){
            productTitle = products[x].title;
        }
    }

    for (let i = 0; i < products.length; i++ ){
        if(productTitle === products[i].title && numOfProducts < 4){
            if (products[i].id === '9') {
                console.log(true);
            }else{
                items.push(
                    <div className="product-container" key={products[i].id}>
                        <div className="product-image">
                            <img src={products[i].image} alt=""
                                id={products[i].id}
                                onClick={e => {
                                        dispatch(fetchProduct(e.target.id))
                                        window.scrollTo(0,0)
                                    }
                                }
                            />
                        </div>
                        <div className="product-details">
                            <h2>
                                <Link to="/singleProduct"
                                    id={products[i].id}
                                    onClick={e => {
                                            dispatch(fetchProduct(e.target.id))
                                            window.scrollTo(0,0)
                                        }}
                                    >
                                    {products[i].name}
                                </Link>
                            </h2>
                            <h3 className="brand">brand: {products[i].brand}</h3>
                            <span className="price">${products[i].price}</span>
                            <span className="old_price">${products[i].oldPrice}</span>
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
                        </div>
                    </div>
                );
                numOfProducts ++;
            }
        }   
    }
    return (
        <section className="related-products">
            <h2>Related Products</h2>
                {items}
                <Link to="Products">
                    More Products <span>--&raquo;</span>
                </Link>
        </section>
    );
}
 
export default RelatedProducts;