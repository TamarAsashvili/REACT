import React from "react";

//stateles functional component
const NavBar = ({ totalCounters }) => {
  console.log("navbar-rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="http://youtube.com">
        Navbar{" "}
        <span className="badge badge-pill badge-success ">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
