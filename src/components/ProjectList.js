import React from "react";
import Project from "./Project";
import projectListData from "../data/project-list-data";

function ProjectList() {
  return (
    <div
      id='project-list'
      className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'
    >
      {projectListData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
