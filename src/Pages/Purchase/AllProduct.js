import React from 'react';
import { Link } from 'react-router-dom';

const AllProduct = ({product}) => {
    const { name, img, description, minimumOrder, quantity, price } = product;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10">
        <img src={img} alt="bike parts" className="rounded-xl" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{name}</h2>
        <h6>{description}</h6>
        <h6>Minimum Order : {minimumOrder}</h6>
        <h6>Available Quantity : {quantity}</h6>
        <h6>Price : $ {price}</h6>
      </div>
      <Link to="/purchase"><button className=" btn w-64 rounded-full bg-emerald-900 btn-outline hover:bg-emerald-900 text-white mb-4">order now</button></Link>
    </div>
  );
};

export default AllProduct;