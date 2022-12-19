import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import Product from '../pages/Product'
import Catagory from '../pages/Catagory';
import Checkoutpage from '../pages/CheckoutPage';
import Profilepage from '../pages/ProfilePage';

class Myroutes extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                    <Route exact path="/cart" element={<CartPage />} />
                    <Route exact path="/product" element={<Product />} />
                    <Route exact path="/catagory" element={<Catagory />} />
                    <Route exact path="/checkout" element={<Checkoutpage />} />
                    <Route exact path="/profile" element={<Profilepage />} />
                </Routes>
            </div>
        );
    }
}

export default Myroutes;
