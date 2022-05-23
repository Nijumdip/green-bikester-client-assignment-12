import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/VwfhTzJ/images.jpg')] mb-10">
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Welcome to Green Bikester, your one-stop place for all kinds of bike
            parts and diagnostics.
          </p>
          <button className="btn w-64 rounded-full btn-outline hover:bg-emerald-900 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
