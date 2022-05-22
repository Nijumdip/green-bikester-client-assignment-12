import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
          <BusinessSummary></BusinessSummary>
          <Review></Review>
      {/* <button className="btn w-64 rounded-full bg-emerald-900">Button</button> */}
    </div>
  );
};

export default Home;
