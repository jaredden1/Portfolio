import "./Projects.css";
import { useEffect, useState } from "react";

const Projects = (props) => {
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
    return projects.map((project) => (
      <div className="project-container">
        <h1>{project.name}</h1>
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
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
};

export default Projects;
