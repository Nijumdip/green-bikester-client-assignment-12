import React from "react";
import { Link } from "react-router-dom";

const BusinessSummary = () => {
  return (
    <div className="px-5 pb-10">
      <div className="flex flex-col w-full border-5 border-opacity-50 lg:w-full">
        <div className="grid h-20 card rounded-box place-items-center text-4xl font-bold text-emerald-900">
          Welcome to Green Bikester
        </div>
        <div className="divider grid place-items-center h-1 px-24 bg-gradient-to-r from-white via-emerald-900 to-white"></div>
        <div className="text-xl text-emerald-900">
          Green Bikester is a professional bike parts manufacturer and focus on
          higher-end <br /> products and expending design capabilities.
        </div>
        <div className="divider grid place-items-center h-1 px-24 bg-gradient-to-r from-white via-emerald-900 to-white"></div>
      </div>

      <div className="hero min-h-screen bg-gray-100 rounded-lg p-5">
        <div className="hero-content flex-col lg:flex-row-reverse bg-white py-20 rounded-lg">
          <img
            className="max-w-sm rounded-lg shadow-2xl"
            src="https://i.ibb.co/y66NvM6/images.jpg"
            alt=""
          />
          <div className="text-left mr-5 text-emerald-900">
            <h1 className="text-3xl font-bold">
              Green Bikester - Professional Bike Parts Manufacture
            </h1>
            <p className="py-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut <br />{" "}
              assumenda excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
            <Link to="/about">
              <button className=" btn w-64 rounded-full bg-emerald-900 btn-outline hover:bg-emerald-900 text-white">
                read more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
