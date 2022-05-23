import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import HotProducts from "./HotProducts";
import Package from "./Package";
import Products from "./Products";
import Review from "./Review";
import WhyChoose from "./WhyChoose";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <BusinessSummary></BusinessSummary>
      <HotProducts></HotProducts>
      <Review></Review>
      <WhyChoose></WhyChoose>
      <Package></Package>
    </div>
  );
};

export default Home;
