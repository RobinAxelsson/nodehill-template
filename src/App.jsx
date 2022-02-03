import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import "./scss/main.scss";
import Header from './Header';
import Footer from './Footer';
import StartPage from './StartPage';
import AboutUsPage from './AboutUsPage';
import ProductsPage from './ProductsPage';

export default function App() {

  const [products, setProducts] = useState([]);

  // Load the complete list of products when the App mounts
  useEffect(() => {
    // not ok to set the function sent to useEffect to async
    // directly, but ok to run an async function inside that function:
    (async () => {
      let products = await (await fetch('/api/products')).json();
      setProducts(products);
    })();
  }, []); // [] -> useEffect only runs when the component mounts


  return <Router>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/products" element={<ProductsPage products={products} />} />
      </Routes>
    </main>
    <footer>
      <Footer />
    </footer>
  </Router>
};