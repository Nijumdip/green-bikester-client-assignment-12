import React from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    return (
        <div className="px-12">
        <h2 className="text-4xl text-emerald-900 font-bold pt-10">Meet our Team</h2>
        <p className=" text-emerald-900 pb-5">All our technicians are fully qualified and licensed. Moreover, they are <br /> incredibly skillful and proficient in various aspects of computer repair.</p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-10 my-5">
        <TeamCard
          cardTitle="Edwards Robertson "
          info="General Manager"
          img={'https://ld-wt73.template-help.com/tf/fixoria_v1/images/person-01-292x340.jpg'}
        ></TeamCard>
        
        <TeamCard
          cardTitle="Henry Ralph "
          info="Customer Service Manager"
          img={'https://ld-wt73.template-help.com/tf/fixoria_v1/images/person-03-292x340.jpg'}
        ></TeamCard>
        
        <TeamCard
          cardTitle="Simmons Brooklyn "
          info="Repair Technician"
          img={'https://ld-wt73.template-help.com/tf/fixoria_v1/images/person-04-292x340.jpg'}
        ></TeamCard>
        
        <TeamCard
          cardTitle="Ralph Edwards "
          info="Field Technician"
          img={'https://ld-wt73.template-help.com/tf/fixoria_v1/images/person-02-292x340.jpg'}
        ></TeamCard>
      </div>
    </div>
    );
};

export default Team;