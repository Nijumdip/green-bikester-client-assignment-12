import React from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
    
  return (
    <div className="px-12">
    <h2 className="text-4xl text-emerald-900 font-bold pb-5">Customers Testimonial</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-10 my-5">
        <ReviewCard
          cardTitle="Robertson Edwards"
          info="I love their selection, prices, and staff members. Best place in town to get Best Comfort Bikes For Women And Men"
          img={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiC1_uzxIQfYg39OcuD4Usm-W0Zj2td5v_nQ&usqp=CAU`}
        ></ReviewCard>
        
        <ReviewCard
          cardTitle="Ralph Henry"
          info="Best Hybrid Bikes for Men & Women. Hybrid bikes are a very popular choice for bike commuters, thanks to their versatility. "
          img={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7K3DQcmkabPGdLpTRcY50dz-NXtKBmKurA&usqp=CAU`}
        ></ReviewCard>
        
        <ReviewCard
          cardTitle="Brooklyn Simmons"
          info="Road bikes are best for riding on smooth, asphalted roads.I love their selection, prices, and staff members."
          img={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXelQrudtekgHUh2qjo-S3QEExMku8QoVfuw&usqp=CAU`}
        ></ReviewCard>
        
        <ReviewCard
          cardTitle="Edwards Ralph"
          info="Best Electric Bike for 2022. This bikes are built for the road less travelled, and also make excellent commuters for rough city roads "
          img={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUL6Kp3fqgd4SkjcWqbNWJ5PQNx-c_xCVqyw&usqp=CAU`}
        ></ReviewCard>
      </div>
    </div>
  );
};

export default Review;
