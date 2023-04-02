import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./styles/main.scss"
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills"
import Footer from "./pages/Footer";
// import Github from './Images/Github.svg';
// import LinkedIn from './Images/LinkedIn.svg';
// import Projects from "./pages/Projects";
// import M from './Images/M_logo.svg';
import cv from './styles/content/Mart_Veldkamp.pdf';

export default function App() {

  // const transition1 = { duration: 10, ease: "linear" };
  // const transition2 = { duration: 15, ease: "linear" };

  const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
      useEffect(() => {
        const updatePosition = () => {
          setScrollPosition(window.pageYOffset);
        }
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
      }, []);
    return scrollPosition;
  };
  
  const y = useScrollPosition();
  var body = document.body,
      html = document.documentElement;

  var height = Math.max( body.scrollHeight, body.offsetHeight, 
                      html.clientHeight, html.scrollHeight, html.offsetHeight );

  const style_background = {
    right: "-676px",
    maxWidth: "calc(230vw + 1670px)"
  };
  
  const difference = y - height/2;

    return (
        <div className="background_objects">
                  <picture>
            <source media='(max-width:768px)' type='images/webp' srcSet='https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp' />
            <source media={"(min-width: 1280px)"} type="image/webp" srcSet="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp 1x, https://github.githubassets.com/images/modules/site/home-campaign/hero-bg-2x.webp 2x"></source>
            <img alt='planet background' aria-hidden="true" width="4377" className="home_background" style={style_background} src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"></img>
          </picture>
            <motion.div shouldOptimize={true} style={{y: difference/5}} className="green_orb"></motion.div>
            <motion.div shouldOptimize={true} style={{y: difference/4}} className="yellow_orb"></motion.div>
          <Home />
          <About />
          <div className="grid_container">
            <div className="grid_layout">
              <div className="grid_fade_in"/>
            </div>
          </div>
          <Skills />
          <div className="grid_container">
            <div className="grid_layout">
              <div className="grid_fade_out"/>
            </div>
          </div>
          <Footer />
          <a href={cv} download="Mart_Veldkamp.pdf">
            <div className="PDF">
              <p>Meer weten?</p>
              <p>Bekijk me cv</p>
            </div>
          </a>
        </div>
  );
}