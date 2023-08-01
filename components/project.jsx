import React from "react";
import Image from "next/image";
import Edit from "./icons/edit";
import Delete from "./icons/delete";

const Project = ({ projectName, projectDetails, projectsPhoto }) => {
  return (
    <div className="flex flex-col mb-10 mt-3">
      <div className=" bg-slate-600">
        <Image
          src={`https://iseea.onrender.com/uploads/projects/${projectsPhoto}`}
          alt="team photo"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          priority
        />
        {/* <img
  alt="Developer"
  src={projectsPhoto}
  className=" h-full w-full object-cover "
 /> */}
      </div>
      <div className=" flex bg-primary justify-between text-2xl text-black">
        <p className=" p-2  font-bold  py-5 pl-10 pr-[15%]">{projectName}</p>
        <div className="flex items-center mx-2 justify-end space-x-3">
          <Edit />
          <Delete />
        </div>
      </div>
      <div className="bg-black  py-5 px-2 lg:px-10 ">
        <p className="mt-1 text-base text-white font-Poiret text-justify pb-6">
          {projectDetails}
        </p>
      </div>
    </div>
  );
};

export default Project;
