import PageHeader from "@/components/page-header";
import React from "react";
import Project from "@/components/project";

const page = async () => {
  const res = await fetch("https://iseea.onrender.com/api/v1/projects", {
    cache: "no-store",
  });
  const data = await res.json();
  const action = () => {
    console.log("modal here!!!");
  };
  return (
    <div>
      <PageHeader name={"Project"} />
       
        <div className="grid   md:grid-cols-2 lg:grid-cols-3 mx-3 gap-4">
          {data.projects.map((project, index) => {
            return (
              <Project
                key={index}
                projectDetails={project.content}
                projectName={project.name}
                projectsPhoto={`https://iseea.onrender.com/uploads/projects/${project.projectImage}`}
              />
            );
          })}
      
      </div>
    </div>
  );
};

export default page;
