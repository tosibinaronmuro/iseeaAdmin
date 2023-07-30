import React from 'react'
import Interventions from "@/components/intervention";

import PageHeader from "@/components/page-header";

const page = async  () => {
// const formComponent=()=>

   
   const res = await fetch('https://iseea.onrender.com/api/v1/interventions',{cache:'no-store'});
  const data = await res.json()
    console.log(data,typeof(data.blogs))
  // https://blogging-haven-api.onrender.com/api/v1/blogs

  const action = () => {
    console.log("modal here!!!");
  };
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
