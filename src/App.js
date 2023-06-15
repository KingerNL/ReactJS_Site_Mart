import { useEffect, useState, useRef } from "react";
import "./styles/main.scss";
import Home from "./pages/Home";
import CanvasBackground from "./pages/Canvas";
import cv from "./styles/content/Mart_Veldkamp.pdf";
import NavigationBar from "./pages/NavigatonBar";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Skills from "./pages/Skills";


export default function App() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const connectRef = useRef(null);

  // Get the current time and format it as "HH:mm:ss"
  function getCurrentTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  const scrollToHome = () => {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToConnect = () => {
    connectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="background_objects">
      <NavigationBar
        handleHomeClick={scrollToHome}
        handleAboutClick={scrollToAbout}
        handleProjectsClick={scrollToProjects} // Fixed function name
        handleConnectClick={scrollToConnect}
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef = {projectsRef}
        connectRef = {connectRef}
      />
      <CanvasBackground />
      <div className="TopText">
        <h2>Fun Fact: I've participated in two Hackathons.</h2>
        <h2>{currentTime}</h2> {/* Display the current time */}
      </div>
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      {/* <div ref={projectsRef}>
        <Skills />
      </div> */}
      <div ref={connectRef}>
        <Footer />
      </div>
      <a href={cv} download="Mart_Veldkamp.pdf">
        <div className="PDF">
          <p>Can't get enough?</p>
          <p>See my resume</p>
        </div>
      </a>
    </div>
  );
}
