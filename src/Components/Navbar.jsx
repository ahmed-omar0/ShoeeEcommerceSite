import {useRef, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
//import Icons
import {FaUserCircle ,FaShoppingCart} from 'react-icons/fa';
import {BiHelpCircle} from 'react-icons/bi';
import {ImSearch} from 'react-icons/im';
import {BsTrashFill, BsExclamationCircleFill} from 'react-icons/bs'
import { useSelector , useDispatch} from 'react-redux';
import { removeFromCart } from '../redux/products/actions';


const Navbar = () => {
    // Redux
    let products = useSelector(state => state.products);
    let cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    // Refs
    const menuRef = useRef(null);
    const btnRef = useRef(null);
    const searchBoxRef = useRef(null);
    const inputRef = useRef(null);
    const cartRef = useRef(null);
    // State
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });

        setCartCount(count);
    }, [cart, cartCount]);

    const menuTragger = () => {
        menuRef.current.classList.toggle("open");
        return btnRef.current.classList.toggle("open");
    }
    const switchSearchBox = () => {
        searchBoxRef.current.classList.toggle('open');
        inputRef.current.focus()
    }
    const switchCart = _ => {
        cartRef.current.classList.toggle('open')
    }
    return ( 
        <nav>
            <div className="logo">
                <Link to="/">Shoeee</Link>
            </div>
            <div ref={menuRef} className="menu-collapse">
                <ul className="menu">
                    <li>
                        <Link to="/" onClick={() => (
                                menuRef.current.className.includes('open') ?
                                    menuTragger() :
                                cartRef.current.className.includes('open') ?
                                    switchCart() :
                                searchBoxRef.current.className.includes('open') ?
                                    switchSearchBox():
                                console.log(false)
                            )}>
                                Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" onClick={() => (
                            menuRef.current.className.includes('open') ?
                            menuTragger() :
                            cartRef.current.className.includes('open') ?
                                switchCart() :
                            searchBoxRef.current.className.includes('open') ?
                                switchSearchBox() :
                            console.log(false)
                            )}>
                                Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutus" onClick={() => (
                            menuRef.current.className.includes('open') ?
                            menuTragger() :
                            cartRef.current.className.includes('open') ?
                                switchCart() :
                            searchBoxRef.current.className.includes('open') ?
                                switchSearchBox() :
                            console.log(false)
                            )}>
                                About-Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contactus" onClick={() => (
                            menuRef.current.className.includes('open') ?
                            menuTragger() :
                            cartRef.current.className.includes('open') ?
                                switchCart() :
                            searchBoxRef.current.className.includes('open') ?
                                switchSearchBox() :
                            console.log(false)
                            )}>
                                Contact-us
                        </Link>
                    </li>
                </ul>
            </div>
            <form name="search-form" ref={searchBoxRef}> 
                <label className="sr-only" for="product">Search</label>
                <input list="products" name="product" id="product"  ref={inputRef}/>
                <datalist id="products" title="Search">
                    {products.map(product => 
                        <option value={product.name} key={product.id}/>
                    )}
                </datalist>
            </form>
            <div className="cart" ref={cartRef}>
                {   
                    cart.length > 0 ?
                        cart.map(el => {
                            return (
                                <div key={el.id}>
                                    <div>
                                        <img src={el.image} alt={el.name}/>
                                        <span className="items-number">{el.qty}</span>
                                    </div>
                                    <h2>{el.name}</h2>
                                    <BsTrashFill className="trash-icon" onClick={() => dispatch(removeFromCart(el.id))}/>
                                    <h3>Total Price: {el.qty * el.price} $</h3>
                                </div>
                            )
                        }) : console.log(false)
                }
                {
                    console.log(cart)
                }
                {
                    cart.length === 0 ?
                        <div className="no-products">
                            <BsExclamationCircleFill/>
                            <h2>There is no products yet. Choice some.</h2>
                            <Link to="/products" onClick={switchCart}>
                                Products
                            </Link>
                        </div> 
                        : 
                        <Link to="/checkout" onClick={switchCart}>
                            check out
                        </Link>
                }
            </div>
            <div className="icons">
                    <ImSearch onClick={switchSearchBox}/>
                    <FaUserCircle/>
                    <div className="cart-icon"  onClick={switchCart}> 
                        <span>{cartCount}</span>
                        <FaShoppingCart/>
                    </div>
                    <BiHelpCircle/>
            </div>
            <button className="menu-icons" aria-label="close" onClick={menuTragger} ref={btnRef}>
                <span aria-hidden="true"></span>
            </button>
        </nav>
    );
}
 
export default Navbar;