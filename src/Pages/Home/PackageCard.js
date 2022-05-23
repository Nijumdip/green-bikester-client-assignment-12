import React from "react";

const PackageCard = ({ img, cardTitle, info, description, packageInfo, offer }) => {
  return (
    <div>
      <div class="card h-96 bg-base-100 shadow-xl">
        <div class="card-body text-left bg-emerald-100">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{info}</p>
        </div>
        <div class="card-body text-center">
        <h2 className="text-5xl text-emerald-900">{offer}</h2>
        <h2>{packageInfo}</h2>
        </div>
        <div class="card-body text-left">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
