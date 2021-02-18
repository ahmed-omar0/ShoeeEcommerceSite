import React from 'react';
import Slide from "./Slide";
import Sections from "./Sections";
import SingleSection from "./SingleSection"

const Home = () => {
    return (
        <React.Fragment>
            <Slide/>
            <Sections/>
            {/*Add Men Section*/}
            <SingleSection type="shirt" sectionName="Men Section" loadMore="link"/>
            {/*Add HeadPhones Section*/}
            <SingleSection type="headphones" sectionName="HeadPhones Section" loadMore="link"/>
            {/*Add Watches Section*/}
            <SingleSection type="shoes" sectionName="Shoes Section" loadMore="link"/>
        </React.Fragment>
    );
}
 
export default Home;
