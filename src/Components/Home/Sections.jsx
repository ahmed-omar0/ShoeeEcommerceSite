import React from 'react';
import Section1 from '../../assets/section1.jpg';
import Section2 from '../../assets/section2.jpg';
import Section3 from '../../assets/section3.jpg';

const Sections = () => {
    const images = [Section1, Section2, Section3];
    const types = ['Men', 'Watches', 'Shoes'];
    const sections = [];
    for (let i = 0; i < images.length; i++) {
        sections.push(
            <div className={"section_" + (i+1)} key={"section_" + (i+1)}>
                <img src={images[i]} alt={types[i] + 'section'}/>
                <a href="#3">{types[i]}</a>
            </div>
        )}
    return ( 
        <section className="sections">
            {sections}
        </section>
    );
}
 
export default Sections;