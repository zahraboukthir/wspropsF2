import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = (props) => {
  return (
    <div>
      <h1>{props.title} </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {props.listprop.map((el, i) => (
          <ProjectCard el={el} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
