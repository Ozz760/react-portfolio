import React from "react";
import "../styles/AboutMe.css";
const profile = require("../images/Portfolio-Profile.jpg");

function AboutMe() {
  return (
    <div>
      <h2 id="AboutM">About Me</h2>
      <img src={profile} id="imgO" alt="Oscar Silva" />
      <p id="AboutP">
        My name is Oscar Silva. Full Stack Web Developer leveraging background
        in Business Administration to provide business acumen on how user
        interact with websites and software platforms. Earned a certificate in
        Full Stack Web Development from the University of California San Diego
        Coding Boot Camp. Innovative problem-solver who is passionate about
        developing apps with a focus on mobile-first design and development.
        Strengths in creativity, teamwork, and building projects from ideation
        to execution. Bilingual in English and Spanish.
      </p>
    </div>
  );
}

export default AboutMe;
