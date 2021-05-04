// Import React Structure
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {useSelector} from 'react-redux';
//Import Style
import './Sass/app.scss';
// Import Pages
import Spinner from "./Components/Spinner";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products"
import SingleProduct from "./Components/singleProduct/SingleProduct";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import CheckOut from "./Components/CheckOut";
import Footer from "./Components/Footer";
// Redux Persist
import {persistor} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  const loading = useSelector(state => state.loading);
  return (
        loading ? 
        <Spinner/> :
        <BrowserRouter>
        <Navbar/>
          <PersistGate loading={<Spinner/>} persistor={persistor}>
            <Route exact path="/" component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/singleProduct" component={SingleProduct}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/contactus" component={ContactUs}/>
            <Route path="/checkout" component={CheckOut}/>
          </PersistGate>
        <Footer/>
        </BrowserRouter>
  );
}

export default App;
