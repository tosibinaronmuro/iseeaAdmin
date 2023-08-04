import React from "react";
import Edit from "./icons/edit";
import Delete from "./icons/delete";

const Interventions = ({number,story }) => {
  return (
    <div className="rounded-t-xl   bg-black p-2  mt-5 mx-1 w-[100%] md:w-[60%] lg:w-[40%]   lg:p-8">
      <div className="flex justify-end space-x-3">
        <Edit  />
        <Delete/>
      </div> 
      <span className="  inset-x-0 rounded-b-xl bottom-0 h-1 bg-gradient-to-r from-black to-primary"></span>
      <div className="flex items-start  gap-5 flex-row">
       
        <div className=" ">
        <div className=" text-primary   flex float-left pr-4  items-center  ">
            <p className="text-[5rem]  lg:text-[10rem] md:text-[10rem]  font-crimson ">{number}</p>
        </div>
          <p className="mt-1 text-base text-white font-Poiret text-justify  pb-6">
            <span className="text-4xl font-garmond text-primary">“</span>
            {story}
            <span className="text-4xl font-garmond text-primary">”</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interventions;
