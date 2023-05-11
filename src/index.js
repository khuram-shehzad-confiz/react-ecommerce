import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './context/user_context';
import { ProductsProvider } from './context/products_context';
import { CartProvider } from './context/cart_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <UserProvider>
  <ProductsProvider>
    <CartProvider>
<App />
    </CartProvider>
  </ProductsProvider>
 </UserProvider>

);