import { useEffect, useState } from "react";
import Skills from "./Skills";
import Footer from "../components/Footer";

const headshot = "https://i.imgur.com/s9aqFid.png"; // headshot image

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
      <img src={headshot} className="headshot" />
      <div className="info">
        <h2 className="header">{about.header}</h2>
        <h2 className="about">{about.about}</h2>
        <div className="bio-container">
          <p className="bio">{about.bio}</p>
        </div>
      </div>
      <div className="skills-center">
        <Skills />
      </div>
      <div className="about-footer">
        <Footer />
      </div>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
};

export default About;
