import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import "./styles/main.scss"
import Home from "./pages/Home";
// import Footer from "./pages/Footer";
import CanvasBackground from './pages/Canvas';
// import NavigationBar from "./pages/NavigatonBar";
import cv from './styles/content/Mart_Veldkamp.pdf';
import NavigationBar from "./pages/NavigatonBar";

export default function App() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  // Get the current time and format it as "HH:mm:ss"
  function getCurrentTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
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

    return (
      <div className="background_objects">
        <NavigationBar />
        <CanvasBackground />
        <div className='TopText'>
          <h2>Fun Fact: I've participated in two Hackathons.</h2>
          <h2>{currentTime}</h2> {/* Display the current time */}
        </div>
          <Home />
          <a href={cv} download="Mart_Veldkamp.pdf">
            <div className="PDF">
              <p>Can't get enough?</p>
              <p>see my resume</p>
            </div>
          </a>
      </div>
  );
}