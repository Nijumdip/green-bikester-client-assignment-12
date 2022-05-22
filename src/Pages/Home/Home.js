import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            {/* <button className="btn w-64 rounded-full bg-emerald-900">Button</button> */}
        </div>
    );
};

export default Home;