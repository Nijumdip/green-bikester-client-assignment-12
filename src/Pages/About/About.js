import React from "react";
import SummeryGraph from "./SummeryGraph";
import Team from "./Team";

const About = () => {
  return (
    <div className="p-12">
      <div className="text-left text-emerald-900 bg-gray-100 p-5 rounded-lg shadow-lg lg:w-full">
        <h2 className="text-2xl font-bold">WELCOME TO Green Bikester</h2>
        <h4 className="text-xl font-bold">
          Green Bikester - Professional Bike Parts Manufacturers
        </h4>
        <br />
        <p>
          We at Green Bikester Technology Industry Co. Ltd., founded in 1900 in
          Taichung, Taiwan, have been in the forefront of machinery tooling
          design and development. Having acquired more than 30 years of
          experience in the cycling field, general manager Mr. Green Bikester
          Wang has been extensively making contributions to not only the growth,
          development and success of the company, but to the global bicycle
          industry as well.
        </p>
        <br />
        <p>
          In order to offer high quality products and expand plant capacity, we
          specialize in manufacturing headsets and bottom bracket components.
          Not only can we cover a wide range of applications and finishes, but
          we can also extend the capacities of alloy cold forging, steel press,
          hole taping and CNC finishing, etc.
        </p>
        <br />
        <p>
          Starting from 2010, Green Bikester Ltd. has extended its product
          categories to include CNC pedals, hubs and chainwheels. To offer the
          best service and shortest lead-time, Green Bikester Ltd. has
          established 3 factories in China; one in Shunde City, Guangdong (since
          1997), one in Tianwang Town, Jurong City (since 2000) and the latest
          factory in Tianjin, which finished construction in 2013. After
          constant improvement and efficient management, every Green Bikester
          factory is well established and play an important role in the Green
          Bikester group.
        </p>
        <br />
        <p>
          Our Taiwanese factory continuously focuses on higher-end products and
          expanding design capabilities with our state-of-the-art research
          facility. However, we at Green Bikester Ltd. believe in meeting the
          entire range of market demands from economic models to technologically
          cold forged CNC components. Meanwhile, Green Bikester Ltd. will always
          strive to meet the commitments to all of the customers and provide
          competitive, high-value products.
        </p>
        <br />
        <p className="font-bold">Green Bikester - Professional Bike Parts Manufacturers</p>
        <br />
        <p className="font-bold">Green Bikester-Jurongtianwang-Environmental Report</p>
        <br />
        <p className="font-bold">Environment and Health Related Information.pdf</p>
        <br />
        <p className="font-bold ">Environment Emergency Measure.pdf</p>
      </div>
      <Team></Team>
      <SummeryGraph></SummeryGraph>
    </div>
  );
};

export default About;
