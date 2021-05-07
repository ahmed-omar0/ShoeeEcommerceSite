import React from 'react';
import Slide from "./Slide";
import TopSelling from "./TopSelling";
import SingleSection from "./SingleSection";

const Home = () => {
    return (
        <React.Fragment>
            <Slide/>
            <TopSelling/>
            {/*Add Men Section*/}
            <SingleSection type="shirt" sectionName="Men Section" loadMore="/products"/>
            {/*Add HeadPhones Section*/}
            <SingleSection type="headphones" sectionName="HeadPhones Section" loadMore="/products"/>
            {/*Add Watches Section*/}
            <SingleSection type="shoes" sectionName="Shoes Section" loadMore="/products"/>
        </React.Fragment>
    );
}
 
export default Home;
