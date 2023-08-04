import PageHeader from "@/components/page-header";
import React from "react";
import Project from "@/components/project";

const page = async () => {
   // refactor to react-query and axios and include header + token gotten from state management for post,delete and create requests
  const res = await fetch("https://iseea.onrender.com/api/v1/projects", {
    cache: "no-store",
  });
  const data = await res.json();
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
                projectsPhoto={project.projectImage}
              />
            );
          })}
      
      </div>
    </div>
  );
};

export default page;
