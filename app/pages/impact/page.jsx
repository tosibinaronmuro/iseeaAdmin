import PageHeader from "@/components/page-header";
import React from "react";
import Impact from "@/components/impact";

const page = async () => {
  const res = await fetch("https://iseea.onrender.com/api/v1/impacts", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data, typeof data.blogs);
  // https://blogging-haven-api.onrender.com/api/v1/blogs

  const action = () => {
    console.log("modal here!!!");
  };
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
