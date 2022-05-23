import React, { useEffect, useState } from 'react';
import AllProduct from './AllProduct';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "/products.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-12 px-12">
      <div class="flex flex-col w-full border-5 border-opacity-50 lg:w-full">
        <div class="grid h-20 card rounded-box place-items-center text-4xl font-bold text-emerald-900">
        Services We Provide
        </div>
        <div class="divider grid place-items-center h-1 px-24 bg-gradient-to-r from-white via-emerald-900 to-white"></div>
        <div className="text-xl text-emerald-900">
        Select Your Products
        </div>
        <div class="divider grid place-items-center h-1 px-24 bg-gradient-to-r from-white via-emerald-900 to-white"></div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            products.map((product) => (<AllProduct 
                key={product._id}
                product={product}
            ></AllProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;