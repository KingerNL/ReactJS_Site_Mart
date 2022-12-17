import { BrowserRouter as Router, Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import "./styles/main.scss"
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills"
import Projects from "./pages/Projects";
import NoPage from "./pages/NoPage";
import { motion } from "framer-motion";
import Github from './Images/Github.svg';
import LinkedIn from './Images/LinkedIn.svg';
import M from './Images/M_logo.svg';
import cv from './styles/content/Mart_Veldkamp.pdf';

const PageLayout = ({ children }) => children;

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.7
};

const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};

export default function App() {
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                  <a href={cv} download="Mart_Veldkamp.pdf">
                    <div className="PDF">
                      <p>Liever een pdf?</p>
                      <p>Klik Hier!</p>
                    </div>
                  </a>
                  <div className="sidebar">
                      <div className="menu-photo">
                                  <motion.img style={{cursor: 'grab'}} whileDrag={{cursor: 'grabbing', scale: 1.1 }} drag dragConstraints={{ left: 0, top:0, right: 0, bottom: 0 }} src={M} alt="Mart Logo"/>
                          <div className="p2">engineer</div>
                      </div>
                      <nav className="links">
                          <Link to="/"> Home </Link>
                          <Link to="/About"> About </Link>
                          <Link to="/Skills"> Skills </Link>
                          <Link to="/Projects"> Projects </Link>
                      </nav>
                      <ul className="menu-icons">
                            <li><a href="https://www.linkedin.com/in/mart-veldkamp-b3a01220a/"><img src={LinkedIn} alt="My LinkedIn link"/></a></li>
                            <li><a href="https://github.com/KingerNL/"><img src={Github} alt="My Github link"/></a></li>                 
                      </ul>
                  </div>                    
                  <div className="content">
                      <motion.div
                      initial="initial"
                      animate="in"
                      variants={pageVariants}
                      transition={pageTransition}>
                          <span className="tags top-tags"> &lt;html&gt; </span>
                          <span className="tags bottom-tags"> &lt;/html&gt; </span>
                          <Routes>
                              <Route element={<AnimationLayout />}>
                                  <Route path="/" element={<Home />} />
                                  <Route path="/About" element={<About />} />
                                  <Route path="/Skills" element={<Skills />} />
                                  <Route path="/Projects" element={<Projects />} />
                                  <Route path="*" element={<NoPage />} />
                              </Route>
                          </Routes>
                      </motion.div>                    
                  </div>
                </div>
            </div>
        </Router>
  );
}