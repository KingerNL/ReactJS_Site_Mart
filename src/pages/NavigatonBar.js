import React, { useState } from "react";

export default function NavigationBar() {
  const [divId, setDivId] = useState("home");

  const handleDivClick = (id) => {
    if (divId !== id) {
      // Delay the state update by a small duration to allow fade-out animation
      setTimeout(() => {
        setDivId(id);
      }, 300);
    }
  };

  return (
    <div className="NavigationBarContainer">
      <a
        id="home"
        className={`nav-link ${divId === "home" ? "active" : "inactive"}`}
        onClick={() => handleDivClick("home")}
      >
        HOME
      </a>
      <a
        id="about"
        className={`nav-link ${divId === "about" ? "active" : "inactive"}`}
        onClick={() => handleDivClick("about")}
      >
        ABOUT
      </a>
      <a
        id="projects"
        className={`nav-link ${divId === "projects" ? "active" : "inactive"}`}
        onClick={() => handleDivClick("projects")}
      >
        PROJECTS
      </a>
      <a
        id="connect"
        className={`nav-link ${divId === "connect" ? "active" : "inactive"}`}
        onClick={() => handleDivClick("connect")}
      >
        CONNECT
      </a>
    </div>
  );
}
