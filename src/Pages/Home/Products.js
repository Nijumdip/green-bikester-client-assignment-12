import React from "react";
import Product from "./Product";

const Products = () => {
  const products = [
    {
      _id: 1,
      name: "Bicycle Headsets",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.",
      img: "https://cdn.ready-market.com/101/3fdd3b61//Templates/pic/m/A01_Headsets.jpg?v=ce1e790e",
      minimumOrder: "50",
      quantity: "5000",
      price: "130",
    },
    {
      _id: 2,
      name: "Bicycle Bottom Brackets",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.",
      img: "https://cdn.ready-market.com/101/3fdd3b61//Templates/pic/m/A02_Bottom-Brackets.jpg?v=ce1e790e",
      minimumOrder: "50",
      quantity: "5000",
      price: "100",
    },
    {
      _id: 3,
      name: "Bicycle Chainwheels",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.",
      img: "https://cdn.ready-market.com/101/3fdd3b61//Templates/pic/m/A03_Chainwheels.jpg?v=ce1e790e",
      minimumOrder: "50",
      quantity: "5000",
      price: "160",
    },
    {
      _id: 4,
      name: "Bicycle and E-bicycle Pedals",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.",
      img: "https://cdn.ready-market.com/101/3fdd3b61//Templates/pic/m/A04_Pedals.jpg?v=ce1e790e",
      minimumOrder: "50",
      quantity: "5000",
      price: "140",
    },
    {
      _id: 5,
      name: "Bicycle Hubs",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.",
      img: "https://cdn.ready-market.com/101/3fdd3b61//Templates/pic/m/A05_Hub.jpg?v=ce1e790e",
      minimumOrder: "50",
      quantity: "5000",
      price: "100",
    },
    {
      _id: 6,
      name: "Green Bikester New Products",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.",
      img: "https://cdn.ready-market.com/101/3fdd3b61//Templates/pic/m/NECO%205.jpg?v=ce1e790e",
      minimumOrder: "50",
      quantity: "5000",
      price: "110",
    },
    {
      _id: 7,
      name: "E-BIKE MOTOR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.",
      img: "https://cdn.ready-market.com/101/3fdd3b61//Templates/pic/m/MM60.jpg?v=ce1e790e",
      minimumOrder: "50",
      quantity: "5000",
      price: "190",
    },
  ];
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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {
            products.map((product) => (<Product 
                key={product._id}
                product={product}
            ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
