import React, {useState, useEffect} from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import axios from 'axios';

const SingleSection = (props) => {
    const sections = []
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get("https://600c30e638fd25001702cf7e.mockapi.io/api/v1/products")
        .then(res => {
            setItems(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[]);
    for (let i = 0; i < items.length; i++) {
        if (items[i].title === props.type && sections.length < 3){
            sections.push(
                <div className={"item_" + items[i].id} key={"item_" + items[i].id}>
                    <a href="e">
                        <img src={items[i].image} alt="we" loading="lazy"/>
                    </a>
                    <a href="e">
                        <h2>{items[i].name}</h2>
                    </a>
                    <h3 className="brand">brand: {items[i].brand}</h3>
                    <span className="price">${items[i].price}</span>
                    <span className="old_price">${items[i].oldPrice}</span>
                    <div className="stars">
                        {
                            Array.from({length: 5}, (_, index) => {
                                return(
                                    <span key={index}>
                                        {
                                            items[i].stars >= index + 1 ? <BsStarFill/> :
                                            items[i].stars >= index + .5 ? <BsStarHalf/> :
                                            <BsStar/>
                                        }
                                    </span>
                                )
                            })
                        }
                    </div>
                    <p>{items[i].description}</p>
                </div>
            )
        }
    }
    return (
        <section className="single-section">
            <h2>{props.sectionName}</h2>
                {sections}
            <a href={props.loadMore} className="load_more">more ---&raquo;</a>
        </section>
    );
}
 
export default SingleSection;
/*
{
"id":"2",
"title":"shirt",
"name":"Shirt Education",
"brand":"xmpretty",
"price":85,
"oldPrice":125,
"best":false,
"featured":true,
"image":"https://i.pinimg.com/564x/bf/58/ab/bf58abcf1fe39b2c0c4abf48cc66c01a.jpg",
"gallarey":[
    {"sku":"v2SmiuNbZ8","url":"https://i.pinimg.com/564x/bf/58/ab/bf58abcf1fe39b2c0c4abf48cc66c01a.jpg"},
    {"sku":"GP7Mv3RZR2","url":"https://i.pinimg.com/564x/c8/89/f6/c889f6077d0da59f4b2d026950856221.jpg"},
    {"sku":"do4wJiZOc1","url":"https://i.pinimg.com/564x/1b/2c/a5/1b2ca591d76b2aabae627f564567ef5d.jpg"}
],
"stars":4.5,
"desription":"Donec tellus massa, tristique sit amet condim vel, 
            facilisis quis sapien. Praesent id engmin rae sitf amet odio vulputate eleifend in in tortor. 
            Sellus massa, tristique it amet cond coim vel, faci lisis rae Facilisis quis sapien. Praesent id enim sit amet odio vulputatefi."
}
*/