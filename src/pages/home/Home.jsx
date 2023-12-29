import React from "react";
import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import Category from "../../components/category/Category";
import Contact from "../../components/contactUs/Contact";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="Featured" />
      <Category />
      <FeaturedProducts type="Trending" />
    </div>
  );
};

export default Home;
