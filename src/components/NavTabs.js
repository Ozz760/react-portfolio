import React from "react";
import "./styles/NavTabs.css"

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
    </header>
  );
}

export default NavTabs;