import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Cart from './pages/Cart';

import Footer from './components/Footer';
import Header from './components/Header';

import { CartProvider } from './context/CartContext';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </Router>
        </CartProvider>
    );
};

export default App;
