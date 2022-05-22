import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import HotProducts from "./HotProducts";
import Review from "./Review";
import WhyChoose from "./WhyChoose";

const Home = () => {
  return (
    <div>
          <Banner></Banner>
          <BusinessSummary></BusinessSummary>
          <HotProducts></HotProducts>
          <Review></Review>
          <WhyChoose></WhyChoose>
    </div>
  );
};

export default Home;
