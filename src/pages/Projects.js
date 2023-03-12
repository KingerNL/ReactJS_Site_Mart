import React, { useState } from "react";
import Modal from "./Modal.js";
import { useRef } from "react";
import Project1 from '../Images/Project1.webp';
import Project2 from '../Images/Project2.webp';
import Project3 from '../Images/Project3.webp';
import {motion} from 'framer-motion';
import Airplane_Lottie from '../lotties/Airplane.json';
import Lottie from 'react-lottie';
import Airplane_webp from '../Images/Airplane.webp';

function Projects() {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.13
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Airplane_Lottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    const [show, setShow] = useState();
    const constraintsRef = useRef(null);

    return(
        <>
            <motion.div className="background"
                variants={container}
                initial="hidden"
                transition={{delay: 3}}
                animate="show" 
                ref={constraintsRef}
            >
                <motion.div style={{cursor: 'grab'}} whileDrag={{cursor: 'grabbing', scale: 1.1 }} variants={item} drag dragConstraints={constraintsRef} className="cirkel6" />
                <motion.div style={{cursor: 'grab'}} whileDrag={{cursor: 'grabbing', scale: 1.1 }} variants={item} drag dragConstraints={constraintsRef} animate={{ rotate: 290 }}    className="rechthoek" /> 
                <motion.div style={{cursor: 'grab'}} whileDrag={{cursor: 'grabbing', scale: 1.1 }} variants={item} drag dragConstraints={constraintsRef} className="cirkel2" /> 
                <motion.div style={{cursor: 'grab'}} whileDrag={{cursor: 'grabbing', scale: 1.1 }} variants={item} drag dragConstraints={constraintsRef} animate={{ rotate: 30 }}     className="driehoek2" />
                <motion.div style={{cursor: 'grab'}} whileDrag={{cursor: 'grabbing', scale: 1.1 }} variants={item} drag dragConstraints={constraintsRef} className="cirkel3" /> 
                <motion.div style={{cursor: 'grab'}} whileDrag={{cursor: 'grabbing', scale: 1.1 }} variants={item} drag dragConstraints={constraintsRef} animate={{ rotate: 240 }}   className="vierkant2" />
                <motion.div style={{cursor: 'grab'}} whileDrag={{cursor: 'grabbing', scale: 1.1 }} variants={item} drag dragConstraints={constraintsRef} animate={{ rotate: 160 }}    className="rechthoek2" />
                <motion.div style={{cursor: 'grab'}} whileDrag={{cursor: 'grabbing', scale: 1.1 }} variants={item} drag dragConstraints={constraintsRef} className="cirkel1" /> 
                <motion.div style={{cursor: 'grab'}} whileDrag={{cursor: 'grabbing', scale: 1.1 }} variants={item} drag dragConstraints={constraintsRef} animate={{ rotate: 120 }}   className="vierkant" />
                <motion.div style={{cursor: 'grab'}} whileDrag={{cursor: 'grabbing', scale: 1.1 }} variants={item} drag dragConstraints={constraintsRef} animate={{ rotate: 120 }}   className="vierkant1" /> 
                <motion.div style={{cursor: 'grab'}} whileDrag={{cursor: 'grabbing', scale: 1.1 }} variants={item} drag dragConstraints={constraintsRef} animate={{ rotate: 130 }}    className="driehoek" /> 
                <motion.div style={{cursor: 'grab'}} whileDrag={{cursor: 'grabbing', scale: 1.1 }} variants={item} drag dragConstraints={constraintsRef} animate={{ rotate: 210 }}    className="driehoek1" /> 
                <motion.div style={{cursor: 'grab'}} whileDrag={{cursor: 'grabbing', scale: 1.1 }} variants={item} drag dragConstraints={constraintsRef} animate={{ rotate: 110 }}    className="rechthoek1" /> 
                <motion.div style={{cursor: 'grab'}} whileDrag={{cursor: 'grabbing', scale: 1.1 }} variants={item} drag dragConstraints={constraintsRef} className="cirkel4" /> 
                <motion.div style={{cursor: 'grab'}} whileDrag={{cursor: 'grabbing', scale: 1.1 }} variants={item} drag dragConstraints={constraintsRef} className="cirkel5" /> 
            </motion.div>

            <motion.div className="projects"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 2}}>
                <div className="koptekst">
                    <motion.h2 animate={{ rotate: -10 }}>📋 </motion.h2>
                    <h1>&nbsp; Mijn Projecten &nbsp; </h1>
                    <motion.h2 animate={{ rotate: 10 }}> 💻</motion.h2>
                </div>
            </motion.div>
        </>
    )
}

export default Projects;