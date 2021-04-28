import {useRef} from 'react';
import {Link} from 'react-router-dom';
import {FaUserCircle ,FaShoppingCart} from 'react-icons/fa';
import {BiHelpCircle} from 'react-icons/bi';

const Navbar = () => {
    const menuRef = useRef(null);
    const btnRef = useRef(null);
    const menuTragger = () => {
        menuRef.current.classList.toggle("open");
        return btnRef.current.classList.toggle("open");
    }
    return ( 
        <nav>
            <div className="logo">
                <Link to="/">Shoeee</Link>
            </div>
            <div ref={menuRef} className="menu-collapse">
                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/aboutus">About-Us</Link>
                    </li>
                    <li>
                        <Link to="/contactus">Contact-us</Link>
                    </li>
                </ul>
                <form name="search-form"> 
                    <label className="sr-only">Search</label>
                    <input type="search" id="search" placeholder="search"/>
                </form>
            </div>
            <div className="icons">
                    <FaUserCircle/>
                    <FaShoppingCart/>
                    <BiHelpCircle/>
            </div>
            <button className="menu-icons" aria-label="close" onClick={menuTragger} ref={btnRef}>
                <span aria-hidden="true"></span>
            </button>
        </nav>
    );
}
 
export default Navbar;