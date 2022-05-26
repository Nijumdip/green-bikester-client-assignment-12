import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "https://floating-basin-11908.herokuapp.com/service";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-12 px-12">
      <div className="flex flex-col w-full border-5 border-opacity-50 lg:w-full">
        <div className="grid h-20 card rounded-box place-items-center text-4xl font-bold text-emerald-900">
          Services We Provide
        </div>
        <div className="divider grid place-items-center h-1 px-24 bg-gradient-to-r from-white via-emerald-900 to-white"></div>
        <div className="text-xl text-emerald-900">Our Products</div>
        <div className="divider grid place-items-center h-1 px-24 bg-gradient-to-r from-white via-emerald-900 to-white"></div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.slice(0, 3).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
