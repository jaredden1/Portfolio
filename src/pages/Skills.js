import "./About.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import express from "../assets/express.png";
import mongo from "../assets/mongo.png";
import python from "../assets//python.png";
import django from "../assets/django.png";

export default function Skills() {
  return (
    <div className="grid-wrapper">
      <div className="grid-container">
        <div className="grid-item">
          <img src={html} alt="HTML" />
          <span className="grid-text">HTML</span>
        </div>
        <div className="grid-item">
          <img src={css} alt="CSS" />
          <span className="grid-text">CSS</span>
        </div>

        <div className="grid-item">
          <img src={js} alt="JS" />
          <span className="grid-text">JavaScript</span>
        </div>
        
        <div className="grid-item">
          <img src={react} alt="React" />
          <span className="grid-text">React</span>
        </div>

        <div className="grid-item">
          <img src={express} alt="Express" />
          <span className="grid-text">Express</span>
        </div>

        <div className="grid-item">
          <img src={node} alt="Node" />
          <span className="grid-text">NodeJS</span>
        </div>

        <div className="grid-item">
          <img src={mongo} alt="Mongo" />
          <span className="grid-text">Mongo</span>
        </div>

        <div className="grid-item">
          <img src={python} alt="Python" />
          <span className="grid-text">Python</span>
        </div>

        <div className="grid-item">
          <img src={django} alt="Django" />
          <span className="grid-text">Django</span>
        </div>
      </div>
    </div>
  );
}
