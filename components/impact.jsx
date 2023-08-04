import React from "react";
import Edit from "./icons/edit";
import Delete from "./icons/delete";

const Impact = ({ story, author }) => {
  return (
    <div className="rounded-t-xl relative bg-black p-2 mx-1  mt-5 w-[100%] md:w-[60%] lg:w-[40%]   lg:p-8">
    <div className="flex justify-end space-x-3">
      <Edit  />
      <Delete/>
    </div> 
      <span className="absolute inset-x-0 rounded-b-xl bottom-0 h-1 bg-gradient-to-r from-black to-primary"></span>
      <div className="absolute right-0 bottom-0 bg-primary h-14  flex justify-center items-center p-2 rounded-tl-2xl ">
        <p className="text-sm font-medium font-garmond text-black  uppercase tracking-widest ">
          {author}
        </p>
      </div>
      <div className="flex items-start sm:gap-8">
        <div>
          <p className="mt-1 text-lg text-white   font-Poiret text-justify  pb-6">
            <span className="text-4xl font-garmond text-primary">“</span>
            {story}
            <span className="text-4xl font-garmond text-primary">”</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impact;
