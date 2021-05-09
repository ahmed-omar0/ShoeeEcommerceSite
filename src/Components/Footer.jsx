import {FaFacebook, FaYoutube} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {Link} from 'react-router-dom';
//Redux
import { useDispatch } from 'react-redux';
import {changeSectionClass} from '../redux/products/actions';

const Footer = () => {
    const dispatch = useDispatch();
    return (
        <footer>
            <ul>
                <li>CATEGORIES</li>
                <li><Link to="/products" onClick={() => {
                    dispatch(changeSectionClass('men'))
                    window.scrollTo(0,0)
                    }
                }>Men</Link></li>
                <li><Link to="/products" onClick={() => {
                    dispatch(changeSectionClass('headphones'))
                    window.scrollTo(0,0)
                    }
                }>HeadPhones</Link></li>
                <li><Link to="/products" onClick={() => {
                    dispatch(changeSectionClass('shoes'))
                    window.scrollTo(0,0)
                }}>Shoes</Link></li>
            </ul>
            <ul>
                <li>help</li>
                <li><Link to="/contactus" onClick={() => window.scrollTo(0,0)}>Track Order</Link></li>
                <li><Link to="/contactus" onClick={() => window.scrollTo(0,0)}>Returns</Link></li>
                <li><Link to="/contactus" onClick={() => window.scrollTo(0,0)}>Shiping</Link></li>
            </ul>
            <div className="get-in-touch">
                <h2>GET IN TOUCH</h2>
                <p>
                    Any questions? Let us know in store at 8th floor, 
                    El Behyera, Egypt, Damanhour or call us on (+20) 01018360530
                </p>
                <ul className="social-media-icons">
                    <li>
                        <a href="#FaceBook" title="Facebook"><FaFacebook/></a>
                    </li>
                    <li>
                        <a href="#Instagram" title="Instagram"><AiFillInstagram/></a>
                    </li>
                    <li>
                        <a href="#Youtube" title="YouTube"><FaYoutube/></a>
                    </li>
                </ul>
            </div>
            <div className="newsletter">
                <h2>NEWSLETTER</h2>
                <form name="newsletter-form">
                    <input type="email" placeholder="Your Email"/>
                    <input type="submit" value="SUBSCRIBE"/>
                </form>
            </div>
            <div className="footer">
                <p>Copyright ©2021 All rights reserved | This template is made by Ahmed Omar</p>
            </div>
        </footer>
    );
}
 
export default Footer;