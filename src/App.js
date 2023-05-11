
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import SingleProductPage from './pages/SingleProductPage'
import ProductsPage from './pages/ProductsPage'
import CheckoutPage from './pages/CheckoutPage'
import CheckoutScreen from './pages/CheckoutScreen'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage'
function App() {
  return (
   <Router>
     <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/checkout' element={<CheckoutPage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/products/:id' element={<SingleProductPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
     </Routes>
    
   
        
     <Footer/>
   </Router>
  );
}

export default App;
