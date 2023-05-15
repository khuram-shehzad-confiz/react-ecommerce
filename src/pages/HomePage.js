import React from "react";
// import { FeaturedProducts, Hero, Services, Contact } from '../components'
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
    </main>
  );
};

export default HomePage;
