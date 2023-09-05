import { useEffect, useState } from "react";
import Skills from "./Skills";

const About = (props) => {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const res = await fetch("./about.json");
    const data = await res.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <div className="about-container">
      <div className="info">
        <h2 className="name">{about.name}</h2>
        <h3>{about.email}</h3>
        <div className="bio-container">
          <p className="bio">{about.bio}</p>
        </div>
      </div>
      <div className="text-center">
        <Skills />
      </div>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
};

export default About;
