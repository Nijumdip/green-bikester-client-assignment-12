import React from "react";

const ReviewCard = ({ img, cardTitle, info }) => {
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure>
      <img className="mask mask-circle" src={img} alt="Album" />
      </figure>
      <div class="card-body text-left">
      <h2 className="card-title">{cardTitle}</h2>
      <p>{info}</p>
        
      </div>
    </div>
    
  );
};

export default ReviewCard;
