import React from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <div className="px-12">
    <h2 className="text-5xl text-emerald-900 font-bold pb-5">Our Team</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-10 my-5">
        <ReviewCard
          cardTitle="Robertson Edwards"
          info="General Manager"
          img={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiywPscw9IyDRPebVldthoIs5nT1pTi2Nn2A&usqp=CAU`}
        ></ReviewCard>
        <ReviewCard
          cardTitle="Ralph Henry"
          info="Field Technician"
          img={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiywPscw9IyDRPebVldthoIs5nT1pTi2Nn2A&usqp=CAU`}
        ></ReviewCard>
        <ReviewCard
          cardTitle="Brooklyn Simmons"
          info="Customer Service Manager"
          img={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiywPscw9IyDRPebVldthoIs5nT1pTi2Nn2A&usqp=CAU`}
        ></ReviewCard>
        <ReviewCard
          cardTitle="Edwards Ralph"
          info="Repair Technician"
          img={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiywPscw9IyDRPebVldthoIs5nT1pTi2Nn2A&usqp=CAU`}
        ></ReviewCard>
      </div>
    </div>
  );
};

export default Review;
