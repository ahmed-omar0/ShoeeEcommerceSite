import React from 'react';
import Slide from "./Slide";
import Sections from "./Sections";
import MenSection from "./MenSection"

const Home = () => {
    return (
        <React.Fragment>
            <Slide/>
            <Sections/>
            <MenSection/>
        </React.Fragment>
    );
}
 
export default Home;