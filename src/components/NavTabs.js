import React from "react";
import "./styles/NavTabs.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1 id="header">Oscar Silva</h1>
      <nav>
        <ul className="nav justify-content-end">
          <li id="nav-item">
            <a
              href="#AboutMe"
              onClick={() => handlePageChange("AboutMe")}
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </li>
          <li id="nav-item">
            <a
              href="#Portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li id="nav-item">
            <a
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact Me
            </a>
          </li>
          <li id="nav-item">
            <a
              href="#Resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="Icons">
        <ul>
          <li>
            <a href="https://github.com/Ozz760" target="_blank" rel="noreferrer">
              <FaGithub />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/oscar-silva-b53684156/" target="_blank" rel="noreferrer">
              {" "}
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="mailto:oscarsilva2356@gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope />{" "}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavTabs;
