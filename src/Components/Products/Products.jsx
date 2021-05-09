import {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchProduct } from '../../redux/products/actions';
import {Link} from 'react-router-dom';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Products = () => {
    const products = useSelector(state => state.products);
    const sectionClass = useSelector(state => state.sectionClass);
    const dispatch = useDispatch();
    const items = [];
    const list = [];
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
    useEffect(() => {
        for(let i=0; i < items.length; i++){
            console.log(items)
            let className = itemsRef.current[i].className;
            className.includes(sectionClass) ? itemsRef.current[i].classList.add('active') : itemsRef.current[i].classList.remove('active')
        }
    }, [items, sectionClass])
    
    // loop items
    for (let i =0; i<products.length; i++){
        if (products[i].id === '9') {
            console.log(true);
        }else{
            items.push(
                <div key={products[i].id} className={products[i].title === 'shirt' ? 'all men' : `all ${products[i].title}`} 
                    ref={addToItemsRef} id={products[i].id}>
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
    let swithcSectionClass = (e) => {
        // remove active class from siblings
        for ( let i =0; i < menuRef.current.length; i++){
            menuRef.current[i].classList.remove('active')
        };
        // remove other Sections
        for ( let i = 0 ; i < items.length; i++){
            let dataType = e.target.getAttribute('data-type');
            let itemsClass = itemsRef.current[i].className;
            if(itemsClass.includes(dataType)){
                itemsRef.current[i].classList.add('active')
            }else if (dataType === 'all'){
                itemsRef.current[i].classList.add('active')
            }else{
                itemsRef.current[i].classList.remove('active')
            }
        }
        return e.target.classList.add('active');
    }
    list.push(
        sectionClass === 'men' ?
            <>
                <li data-type="all"
                        onClick={swithcSectionClass}
                        ref={addToMenuRef}
                    >
                        All
                    </li>
                    <li data-type="men"  className="active"
                        onClick={swithcSectionClass}
                        ref={addToMenuRef}
                    >
                        Shirts
                    </li>
                    <li data-type="headphones"
                        onClick={swithcSectionClass}
                        ref={addToMenuRef}
                    >
                        Headphones
                    </li>
                    <li data-type="shoes"
                        onClick={swithcSectionClass}
                        ref={addToMenuRef}
                    >
                        Shoes
                    </li>
            </>
            :
        sectionClass === 'headphones' ?
            <>
                <li data-type="all"
                        onClick={swithcSectionClass}
                        ref={addToMenuRef}
                    >
                        All
                    </li>
                    <li data-type="men"
                        onClick={swithcSectionClass}
                        ref={addToMenuRef}
                    >
                        Shirts
                    </li>
                    <li data-type="headphones"  className="active"
                        onClick={swithcSectionClass}
                        ref={addToMenuRef}
                    >
                        Headphones
                    </li>
                    <li data-type="shoes"
                        onClick={swithcSectionClass}
                        ref={addToMenuRef}
                    >
                        Shoes
                    </li>
            </>
            :
        sectionClass === 'shoes' ? 
            <>
                <li data-type="all"
                    onClick={swithcSectionClass}
                    ref={addToMenuRef}
                >
                    All
                </li>
                <li data-type="men"
                    onClick={swithcSectionClass}
                    ref={addToMenuRef}
                >
                    Shirts
                </li>
                <li data-type="headphones"
                    onClick={swithcSectionClass}
                    ref={addToMenuRef}
                >
                    Headphones
                </li>
                <li data-type="shoes" className="active"
                    onClick={swithcSectionClass}
                    ref={addToMenuRef}
                >
                    Shoes
                </li>
            </>
            :
            <>
                <li data-type="all"   className="active"
                        onClick={swithcSectionClass}
                        ref={addToMenuRef}
                    >
                        All
                    </li>
                    <li data-type="men"
                        onClick={swithcSectionClass}
                        ref={addToMenuRef}
                    >
                        Shirts
                    </li>
                    <li data-type="headphones"
                        onClick={swithcSectionClass}
                        ref={addToMenuRef}
                    >
                        Headphones
                    </li>
                    <li data-type="shoes"
                        onClick={swithcSectionClass}
                        ref={addToMenuRef}
                    >
                        Shoes
                    </li>
            </>
    )
    return (
        <section className="products">
            <ul>
                {list}
            </ul>
            <div className='products-container'>
                {items}
            </div>
        </section>
    );
}
 
export default Products;