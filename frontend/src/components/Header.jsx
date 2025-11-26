import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <h2>College Hub</h2>
      </div>

      <div className="center">
        <Link to="/notices" className="nav-link">Notices</Link>
        <Link to="/lost-found" className="nav-link">Lost & Found</Link>
        <Link to="/cgpa" className="nav-link">CGPA Calculator</Link>
      </div>

      <div className="right">
        {/* Empty for spacing OR add profile later */}
      </div>
    </header>
  );
};

export default Header;
