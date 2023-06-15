import React, { useState, useEffect } from "react";
import sectionIds from "./lib/sectionIds";

export default function NavigationBar({ handleHomeClick, handleAboutClick, handleProjectsClick, handleConnectClick, homeRef, aboutRef, projectsRef, connectRef}) {
  const [divId, setDivId] = useState("home-section");
  const [isScrolling, setIsScrolling] = useState(false);

  const handleDivClick = (id) => {
    if (divId !== id) {
      setTimeout(() => {
        setDivId(id);
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        const homeSectionPosition       = homeRef.current.getBoundingClientRect().top;
        const aboutSectionPosition      = aboutRef.current.getBoundingClientRect().top;
        // const projectsSectionPosition   = projectsRef.current.getBoundingClientRect().top;
        const connectedSectionPosition  = connectRef.current.getBoundingClientRect().top;

        const isScrolledToHome     = homeSectionPosition      >= 0 && homeSectionPosition       < window.innerHeight;
        const isScrolledToAbout    = aboutSectionPosition     >= 0 && aboutSectionPosition      < window.innerHeight;
        // const isScrolledToProjects = projectsSectionPosition  >= 0 && projectsSectionPosition   < window.innerHeight;
        const isScrolledToConnect  = connectedSectionPosition >= 0 && connectedSectionPosition  < window.innerHeight;

        if (isScrolledToHome) {
          setDivId("home-section");
        } else if (isScrolledToAbout) {
          setDivId("about-section");
        } 
        // else if (isScrolledToProjects) {
        //   setDivId("project-section");
        // } 
        else if (isScrolledToConnect) {
          setDivId("connect-section");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  useEffect(() => {
    let scrollTimeout;

    const handleScrollStart = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener("scroll", handleScrollStart);

    return () => {
      window.removeEventListener("scroll", handleScrollStart);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="NavigationBarContainer">
      <button
        id={sectionIds.home}
        className={`nav-link ${divId === "home-section" ? "active" : "inactive"}`}
        onClick={() => {
          handleDivClick("home-section");
          handleHomeClick(); // Using the handleClick prop directly
        }}
      >
        HOME
      </button>
      <button
        id={sectionIds.about}
        className={`nav-link ${divId === "about-section" ? "active" : "inactive"}`}
        onClick={() => {
          handleDivClick("about-section");
          handleAboutClick(); // Using the handleClick prop directly
        }}
      >
        ABOUT
      </button>
      <button
        id={sectionIds.projects}
        className={`nav-link ${divId === "projects-section" ? "active" : "inactive"}`}
        onClick={() => {
          handleDivClick("projects-section");
          handleProjectsClick(); // Using the handleClick prop directly
        }}
      >
        PROJECTS
      </button>
      <button
        id={sectionIds.connect}
        className={`nav-link ${divId === "connect-section" ? "active" : "inactive"}`}
        onClick={() => {
          handleDivClick("connect-section");
          handleConnectClick(); // Using the handleClick prop directly
        }}
      >
        CONNECT
      </button>
    </div>
  );
}
