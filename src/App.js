import React from 'react';
import './Sass/app.scss';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Home/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
