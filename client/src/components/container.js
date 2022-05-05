import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewItem from "./pages/New-Item";
import Profile from "./pages/Profile";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "New-Item") {
      return <NewItem />;
    }
    if (currentPage === "Profile") {
      return <Profile />;
    }
    if (currentPage === "Login") {
      return <Login />;
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
