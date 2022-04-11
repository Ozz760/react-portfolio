import React from "react";
import "../styles/Resume.css";
const resumeS = require("../images/Oscar Silva Software Developer Resume.pdf");

function Resume() {
  return (
    <div>
      <h2 id="Headerr">Resume</h2>
      <p id="resume">
        Download My{" "}
        <a href={resumeS} target="_blank" rel="noreferrer">
          Resume
        </a>
      </p>

      <h3 id="fEnd">Front-end Proficiencies</h3>
      <ul id="list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h3 id="bEnd">Back-end Proficiencies</h3>
      <ul id="listb">
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}

export default Resume;
