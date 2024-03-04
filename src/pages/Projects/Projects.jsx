import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
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
            <div className="image-container">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.name} />
              </a>
            </div>
            <div className="project-info">
              <h1 className="title">{project.name}</h1>
              <p className="text">{project.text}</p>
              <div className="button-container">
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  <button>View Github</button>
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                <button>Live Site</button></a>
              </div>
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
