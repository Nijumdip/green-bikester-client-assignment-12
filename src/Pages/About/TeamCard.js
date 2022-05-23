import React from "react";

const TeamCard = ({ img, cardTitle, info }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="mask h-80" src={img} alt="Album" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default TeamCard;
