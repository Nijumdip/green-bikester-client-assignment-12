import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
      <div className="px-12">
      <div class="flex flex-col w-full border-5 border-opacity-50 lg:w-full">
      <div class="grid h-20 card rounded-box place-items-center text-4xl font-bold text-emerald-900">
      Why Choose Us 
      </div>
      <div class="divider grid place-items-center h-1 px-24 bg-gradient-to-r from-white via-emerald-900 to-white"></div>
      <div className="text-xl text-emerald-900">
      There are dozens of reasons why our clients choose Green Bikester <br /> as their bike service provider of choice.
      </div>
      <div class="divider grid place-items-center h-1 px-24 bg-gradient-to-r from-white via-emerald-900 to-white"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10 my-5">
        <WhyChooseCard
          cardTitle="Reliable Services"
          info="Every service our bike technicians provide is guaranteed to be prompt & reliable."
          img={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB41zov_YZXm_1_SOHf_EETOchO2HilnjKfA&usqp=CAU`}
        ></WhyChooseCard>
        <WhyChooseCard
          cardTitle="Skilled Personal"
          info="All the experts at Green Bikester have the skills & experience to get the job done right."
          img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Q3KAVSxKFqxXOoz_0PyCDD1MGtyxmFRdOA&usqp=CAU"}
        ></WhyChooseCard>
        <WhyChooseCard
          cardTitle="Licensed & Certified"
          info="For your safety and peace of mind, we're fully licensed, certified, and insured!"
          img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMtg0S4YUl2exZ4BsGqgU_sSBDoP6KbG_Lg&usqp=CAU"}
        ></WhyChooseCard>
      </div>
    </div>
  );
};

export default WhyChoose;
