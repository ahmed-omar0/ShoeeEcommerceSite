import { useDispatch, useSelector } from "react-redux";
import {removeFromCart} from '../redux/products/actions';
import React, {useRef, useState} from "react";
import {Link} from 'react-router-dom';
import {BsTrashFill, BsExclamationCircleFill} from 'react-icons/bs';
//import images
import payment1 from '../assets/images/payment1.png';
import payment2 from '../assets/images/payment2.png';
import payment3 from '../assets/images/payment3.png';
import { useEffect } from "react";

const CheckOut = () => {
    let checkOutMethodRef = useRef(null);
    let [total, setTotal] = useState(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let prices = []
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    let items = cart.map(el => {
        prices.push(el.qty * el.price)
        return (
            <React.Fragment key={el.id}>
                <div className="item">
                    <div>
                        <img src={el.image} alt={el.name}/>
                        <span className="items-number">{el.qty}</span>
                    </div>
                    <h2>{el.name}</h2>
                    <h3>Total Price: {el.qty * el.price} $</h3>
                    <BsTrashFill className="trash-icon" onClick={() => dispatch(removeFromCart(el.id))}/>
                </div>
                <hr/>
            </React.Fragment>
        )
    });
    let switchCheckOutMethod = () => {
        checkOutMethodRef.current.classList.toggle('open');
    }
    useEffect(() => {
        let total;
        cart.length === 0 ? 
            total = prices.reduce((accum, currentValue) => {
                return accum + currentValue;
            }, 0) :
            total = prices.reduce((accum, currentValue) => {
                return accum + currentValue;
            })
        setTotal(total)
    }, [prices, cart])
    return (
            cart.length > 0 ?
                <section className="check-out">
                    {items}
                    <h4>Total: {total}</h4>
                    <div className='checkout-method' ref={checkOutMethodRef}>
                        <div>
                            <img src={payment1} alt="payment1"/>
                            <img src={payment2} alt="payment2"/>
                            <img src={payment3} alt="payment3"/>
                        </div>
                        <form name="checkout">
                            <input type="text" placeholder="Card number"/>
                            <input type="text" placeholder="Name on card"/>
                            <input type="text" placeholder="Expiration date"/>
                            <input type="submit" value="Check Out"/>
                        </form>
                        <span onClick={switchCheckOutMethod}>close</span>
                    </div>
                    <button onClick={switchCheckOutMethod}>Check Out</button>
                </section>
            :
                <div className="alert">
                    <BsExclamationCircleFill/>
                    <h1>There is no products to check out</h1>
                    <Link to="/products">
                        Products
                    </Link>
                </div>
    );
}
 
export default CheckOut;