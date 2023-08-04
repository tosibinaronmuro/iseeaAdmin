import PageHeader from "@/components/page-header";
import React from "react";
import Impact from "@/components/impact";

const page = async () => {
  // refactor to react-query and axios and include header + token gotten from state management for post,delete and create requests
  const res = await fetch("https://iseea.onrender.com/api/v1/impacts", {
    cache: "no-store",
  });
  const data = await res.json(); 
  return (
    <div>
      <PageHeader name={"Impact"} />
      <div className="flex flex-wrap gap-7 mb-14 justify-center">
        {data.Impacts.map((inte, index) => {
          // put key=?
          return <Impact author={inte.author} story={inte.story} />;
        })}
      </div>
    </div>
  );
};

export default page;
