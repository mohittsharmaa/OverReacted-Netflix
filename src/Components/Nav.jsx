import React, { useEffect, useState } from "react";
import "../styles-sheets/Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <div className={`nav {/* ${show && "nav__black"} */}`}>
      <img
        className="logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        width="200"
        alt="netflix logo"
      />
      <img
        className="avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar"
      />
    </div>
  );
};

export default Nav;
