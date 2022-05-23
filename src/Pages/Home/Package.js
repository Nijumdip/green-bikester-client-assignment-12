import React from "react";
import PackageCard from "./PackageCard";

const Package = () => {
  return (
    <div className="px-12">
      <div className="flex flex-col w-full border-5 border-opacity-50 lg:w-full">
        <div className="grid h-20 card rounded-box place-items-center text-4xl font-bold text-emerald-900">
          Select Your Package
        </div>
        <div className="divider grid place-items-center h-1 px-24 bg-gradient-to-r from-white via-emerald-900 to-white"></div>
        <div className="text-xl text-emerald-900">
          Take a look at our pricing plans and select the computer repair
          services that <br /> meet your needs the most.
        </div>
        <div className="divider grid place-items-center h-1 px-24 bg-gradient-to-r from-white via-emerald-900 to-white"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10 my-5">
        <PackageCard
          cardTitle="Basic"
          info="PERFECT FOR SIMPLE SERVICE"
          offer="10 % OFF"
          packageInfo="Minimum Order 50pc"
          description="Other services can be ordered at an extra rate."
        ></PackageCard>

        <PackageCard
          cardTitle="Standard"
          info="MOST POPULAR"
          offer="15 OFF%"
          packageInfo="Minimum Order 100pc"
          description="Thermal paste replacement and cleaning are available for additional $20."
        ></PackageCard>

        <PackageCard
          cardTitle="Ultimate"
          info="ALL SERVICES ARE INCLUDED"
          offer="20 OFF%"
          packageInfo="Minimum Order 200pc"
          description="Replacing Thermal Paste,Bicycle Assembly, Repair,Free delivered,Free Diagnostics"
        ></PackageCard>
      </div>
    </div>
  );
};

export default Package;
