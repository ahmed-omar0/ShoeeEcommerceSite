import {useRef} from 'react';

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
                <a href="e">AL.F.N.C</a>
            </div>
            <button className="menu-icons" aria-label="close" onClick={menuTragger} ref={btnRef}>
                <span aria-hidden="true"></span>
            </button>
            <ul className="menu" ref={menuRef}>
                <li>
                    <a href="#e">Home</a>
                </li>
                <li>
                    <a href="#e">About-Us</a>
                </li>
                <li>
                    <a href="#e">Products</a>
                </li>
                <li>
                    <a href="#e">our-services</a>
                </li>
                <li>
                    <a href="#e">Contact-us</a>
                </li>
                <li>
                    <form name="search-form"> 
                        <label className="sr-only">Search</label>
                        <input type="search" id="search" placeholder="search"/>
                    </form>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;