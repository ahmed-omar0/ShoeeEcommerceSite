import {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchProduct } from '../../redux/products/actions';
import {Link} from 'react-router-dom';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Products = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const items = [];
    let itemsRef = useRef([]);
    itemsRef.current = [];
    let menuRef = useRef([]);
    menuRef.current = [];
    let addToItemsRef = (el) => {
        if(el && !itemsRef.current.includes(el)){
            itemsRef.current.push(el)
        }
    }
    let addToMenuRef = (el) => {
        if(el && !menuRef.current.includes(el)){
            menuRef.current.push(el)
        }
    }
    // loop items
    for (let i =0; i<products.length; i++){
        if (products[i].id === '9') {
            console.log(true);
        }else{
            items.push(
                <div key={products[i].id} className={products[i].title} ref={addToItemsRef} id={products[i].id}>
                    <div className="product-image">
                        <Link to='/singleProduct'>
                            <img src={products[i].image} alt=""
                                id={products[i].id}
                                onClick={e => {
                                        dispatch(fetchProduct(e.target.id))
                                        window.scrollTo(0,0)
                                    }
                                }
                            />
                        </Link>
                    </div>
                    <div className="product-details">
                        <h2>
                            <Link to="/singleProduct"
                                id={products[i].id}
                                onClick={e => {
                                        dispatch(fetchProduct(e.target.id))
                                        window.scrollTo(0,0)
                                    }
                                }
                            >
                                {products[i].name}
                            </Link>
                        </h2>
                        <h3 className="brand">brand: {products[i].brand}</h3>
                        <span className="price">${products[i].price}</span>
                        <span className="old_price">${products[i].oldPrice}</span>
                        <div className="stars">
                            {
                                // eslint-disable-next-line no-loop-func
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
            )
        }
    };
    // Switch Section Function
    let swithcSection = (e) => {
        // remove active class from siblings
        for ( let i =0; i < menuRef.current.length; i++){
            console.log(menuRef.current[i].className = '')
        };
        // remove other Sections
        for ( let i = 0 ; i < items.length; i++){
            let dataType = e.target.getAttribute('data-type');
            let sectionClass = itemsRef.current[i].className;

            if(dataType === sectionClass){
                itemsRef.current[i].style.cssText = 'display: flex;';
            }else if (dataType === 'all'){
                itemsRef.current[i].style.cssText = 'display: flex;';
            }else{
                itemsRef.current[i].style.cssText = 'opacity: 0;';
                setTimeout(() => {
                    itemsRef.current[i].style.display = 'none';
                }, 300)
            }
        }
        return e.target.classList.add('active');
    }
    return (
        <section className="products">
                <ul>
                    <li data-type="all" className="active"
                        onClick={swithcSection}
                        ref={addToMenuRef}
                    >
                        All
                    </li>
                    <li data-type="shirt"
                        onClick={swithcSection}
                        ref={addToMenuRef}
                    >
                        Shirts
                    </li>
                    <li data-type="headphones"
                        onClick={swithcSection}
                        ref={addToMenuRef}
                    >
                        Headphones
                    </li>
                    <li data-type="shoes"
                        onClick={swithcSection}
                        ref={addToMenuRef}
                    >
                        Shoes
                    </li>
                </ul>
            <div>
                {items}
            </div>
        </section>
    );
}
 
export default Products;