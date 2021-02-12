import {FaFacebook} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {FaYoutube} from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <ul>
                <li>CATEGORIES</li>
                <li><a href="e">Men</a></li>
                <li><a href="e">Watches</a></li>
                <li><a href="e">Shoes</a></li>
            </ul>
            <ul>
                <li>help</li>
                <li><a href="e">Track Order</a></li>
                <li><a href="e">Returns</a></li>
                <li><a href="e">Shiping</a></li>
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
                <p>Copyright ©2021 All rights reserved | This template is made with  by Colorlib</p>
            </div>
        </footer>
    );
}
 
export default Footer;