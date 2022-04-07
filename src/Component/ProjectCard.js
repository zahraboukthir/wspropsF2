import React from "react";

const ProjectCard = ({ el }) => {
  return (
    <div style={{ width: "18rem" }}>
      <p>{el.projet.namep}</p>
      <img width="200px" height="200px" src={el.projet.photo} alt="" />
      <p>{el.projet.des}</p>
      <p>{el.projet.rate}</p>
    </div>
  );
};

export default ProjectCard;
