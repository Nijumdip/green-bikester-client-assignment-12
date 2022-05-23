import React from "react";

const HotProducts = () => {
  return (
    <div className="my-10 shadow-lg">
      <h2 className="text-4xl text-emerald-900 font-bold pb-5">Hot Products</h2>
      <div className="carousel carousel-end rounded-box">
        <div className="carousel-item">
          <img
            src="https://cdn.ready-market.com/101/3fdd3b61//Templates/pic/m/Assebling%20H324MP.jpg?v=ce1e790e"
            className=" w-64 h-96 rounded-lg shadow-2xl"
            alt="Bike"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.ready-market.com/101/3fdd3b61//Templates/pic/A0601.jpg?v=ce1e790e"
            className=" w-64 h-96 rounded-lg shadow-2xl"
            alt="Bike"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.ready-market.com/101/3fdd3b61//Templates/pic/m/NECO14%E7%B7%8A%E5%9B%BA%E9%8E%96.jpg?v=ce1e790e"
            className=" w-64 h-96 rounded-lg shadow-2xl"
            alt="Bike"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.ready-market.com/101/3fdd3b61//Templates/pic/m/H324MP.jpg?v=ce1e790e"
            className=" w-64 h-96 rounded-lg shadow-2xl"
            alt="Bike"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.ready-market.com/101/3fdd3b61//Templates/pic/m/NECO%205.jpg?v=ce1e790e"
            className=" w-64 h-96 rounded-lg shadow-2xl"
            alt="Bike"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.ready-market.com/101/3fdd3b61//Templates/pic/A04_Pedals.jpg?v=ce1e790e"
            className="w-64 h-96 rounded-lg shadow-2xl"
            alt="Bike"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.ready-market.com/101/3fdd3b61//Templates/pic/m/H322MP.jpg?v=ce1e790e"
            className="w-64 h-96 rounded-lg shadow-2xl"
            alt="Bike"
          />
        </div>
      </div>
    </div>
  );
};

export default HotProducts;
