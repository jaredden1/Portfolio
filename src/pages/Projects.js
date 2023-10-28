import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    const res = await fetch("./projects.json");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  const loaded = () => {
    return (
      <div className="projects-wrapper">
        {projects.map((project) => (
          <div className="project-container" key={project.id}>
            <h1 className="title">{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <div className="button-container">
              <a href={project.git}>
                <button>Github</button>
              </a>
              <a href={project.live}>
                <button>live site</button>
              </a>
            </div>
          </div>
        ))}
        <div className="project-footer">
          <Footer />
        </div>
      </div>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
};

export default Projects;
