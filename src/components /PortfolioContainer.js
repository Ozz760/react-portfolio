import React, { useState } from "react";
import Resume from "./Pages/Resume";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import NavTabs from "./NavTabs";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    switch (currentPage) {
      case "AboutMe":
        return <AboutMe />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      default:
        return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
