import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-[url('https://i.ibb.co/VwfhTzJ/images.jpg')] mb-10">
            <div class="hero-overlay bg-opacity-90"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                    <p class="mb-5">Welcome to Green Bikester, your one-stop place for all kinds of bike parts and diagnostics.</p>
                    <button className="btn w-64 rounded-full btn-outline hover:bg-emerald-900 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;