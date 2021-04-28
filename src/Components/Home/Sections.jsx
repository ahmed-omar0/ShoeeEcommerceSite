import React from 'react';
import {Link} from 'react-router-dom';

const Sections = () => {
    const types = ['Men', 'HeadPhones', 'Shoes'];
    const sections = [];
    for (let i = 0; i < types.length; i++) {
        sections.push(
            <Link to="/products" key={"section_" + (i+1)}>
                <div className={"section_" + (i+1)}>
                    <div className="overlay">
                        <Link to="/products">{types[i]}</Link>
                    </div>
                </div>
            </Link>
        )}
    return ( 
        <section className="sections">
            {sections}
        </section>
    );
}
 
export default Sections;