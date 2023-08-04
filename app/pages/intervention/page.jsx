import React from 'react'
import Interventions from "@/components/intervention";
import PageHeader from "@/components/page-header";

const page = async  () => {
   // refactor to react-query and axios and include header + token gotten from state management for post,delete and create requests
  const res = await fetch('https://iseea.onrender.com/api/v1/interventions',{cache:'no-store'});
  const data = await res.json()
    console.log(data,typeof(data.blogs))
  
  return (
    <div>
      <PageHeader name={"Intervention"} />
      <div className="flex flex-wrap gap-7 mb-14 justify-center">
        {data.interventions.map((inte, index) => {
          return <Interventions number={inte.number} key={index} story={inte.story} />;
        })}
       
        
      </div>
    </div>
  );
};

export default page;
