import { useEffect, useState } from "react";
import "./styles/main.scss"
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills"
import { motion } from "framer-motion";
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
  
  const difference = y - height/2;

    return (
        <div className="background_objects">
            <motion.div shouldOptimize={true} style={{y: difference/5}} className="green_orb"></motion.div>
            <motion.div shouldOptimize={true} style={{y: difference/3}} className="yellow_orb"></motion.div>
            <motion.div shouldOptimize={true} style={{y: difference/8}} className="red_orb"></motion.div>
          <Home />
          <About />
          <Skills />
          <a href={cv} download="Mart_Veldkamp.pdf">
            <div className="PDF">
              <p>Meer weten?</p>
              <p>Bekijk me cv</p>
            </div>
          </a>
          <svg className="svg_background">
                {/* <path fill="none" strokeLinecap="round" stroke="#4285F4" strokeDasharray="30,22" strokeWidth="6" d="M 0.3699 28.2896 C 363.6305 40.086 247.4526 383.0245 470.8171 491.4341 S 787.7537 290.6413 910.2106 332.4458 S 1179.6821 -56.496 1395.8435 52.0406 S 1480.6277 870.1356 1901.2348 718.0924"></path>
                <motion.path fill="none" strokeLinecap="round" stroke="#1d1d1d" strokeWidth="7.0" d="M1901.2348,718.0924C1480.6277,870.1356 1612.0049,160.5772 1395.8435,52.0406C1179.6821,-56.496 1032.6675,374.25030000000004 910.2106,332.4458C787.7537,290.6413 694.1816,599.8437 470.8171,491.4341C247.4526,383.0245 363.6305,40.086 0.3699,28.2896"
                    initial={{ pathLength: 1 }}
                    animate={{ pathLength: 0 }}
                    transition={transition1}>
                </motion.path>
                <path fill="none" strokeLinecap="round" stroke="#34A853" strokeDasharray="10,20" strokeWidth="6" d="M 1736.0766 160.8928 C 1477.7562 250.8224 1596.109 559.7852 1378.0908 691.842 S 953.682 647.823 741.4776 625.8136 S 503.5264 730.4624 411.3358 756.6246 A 2 2 90 0 0 437.498 871.2398 A 2 2 90 0 0 408.8442 756.6245 C 180.8595 715.5125 263.0835 644.5009 106.1104 578.4726 S 143.4849 399.0747 -2.2758 339.2754 S -146.7425 178.5738 -72.4906 175.038 S 182.0872 192.717 311.144 -44.1818 S 649.4052 57.1766 818.5359 107.8557 S 1066.042 -33.5764 1189.7951 -104.2924 M 1736.0768 160.8928 C 1868.0681 112.1113 1923.2903 253.8484 2037.4162 253.8484 S 2311.6866 3.5076 2521.531 97.3854 S 2685.3569 -176.8841 2919.131 -178.7257"></path>
                <motion.path fill="none" strokeLinecap="round" stroke="#1d1d1d" strokeWidth="7.0" d="M 1736.0766 160.8928 C 1477.7562 250.8224 1596.109 559.7852 1378.0908 691.842 S 953.682 647.823 741.4776 625.8136 S 503.5264 730.4624 411.3358 756.6246 A 2 2 90 0 0 437.498 871.2398 A 2 2 90 0 0 408.8442 756.6245 C 180.8595 715.5125 263.0835 644.5009 106.1104 578.4726 S 143.4849 399.0747 -2.2758 339.2754 S -146.7425 178.5738 -72.4906 175.038 S 182.0872 192.717 311.144 -44.1818 S 649.4052 57.1766 818.5359 107.8557 S 1066.042 -33.5764 1189.7951 -104.2924 M 1736.0768 160.8928 C 1868.0681 112.1113 1923.2903 253.8484 2037.4162 253.8484 S 2311.6866 3.5076 2521.531 97.3854 S 2685.3569 -176.8841 2919.131 -178.7257"
                    initial={{ pathLength: 1 }}
                    animate={{ pathLength: 0 }}
                    transition={transition1}>
                </motion.path>
                <path fill="none" strokeLinecap="round" stroke="#FBBC04" strokeDasharray="3,20" strokeWidth="6" d="M 22 902 C 176 929 166 1089 311 1096 S 456 1167 669 923 S 950 1068 1231 951 S 1231 1202 1844 923 C 2055 818 2254 1031 2392 957 S 2711 604 2985 849"></path>
                <motion.path fill="none" strokeLinecap="round" stroke="#1d1d1d" strokeWidth="7.0" d="M2985,849C2711,604 2530,883 2392,957C2254,1031 2055,818 1844,923C1231,1202 1512,834 1231,951C950,1068 882,679 669,923C456,1167 456,1103 311,1096C166,1089 176,929 22,902"
                    initial={{ pathLength: 1 }}
                    animate={{ pathLength: 0 }}
                    transition={transition2}> 
                </motion.path>
                <path fill="none" strokeLinecap="round" stroke="#E5443F" strokeDasharray="6,35" strokeWidth="6" d="M -355 319 L -277 445 Q -54 505 139 554 A 1 1 0 0 0 179 479 A 1 1 0 0 0 139 554 S 194 577 173 667 S 45 762 247 856 S -308 1211 51 1408"></path>
                <motion.path fill="none" strokeLinecap="round" stroke="#1d1d1d" strokeWidth="7.0" d="M -355 319 L -277 445 Q -54 505 139 554 A 1 1 0 0 0 179 479 A 1 1 0 0 0 139 554 S 194 577 173 667 S 45 762 247 856 S -308 1211 51 1408"
                    initial={{ pathLength: 1 }}
                    animate={{ pathLength: 0 }}
                    transition={transition2}>
                </motion.path> */}
          </svg>
        </div>
  );
}