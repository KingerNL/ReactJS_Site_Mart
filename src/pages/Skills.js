import React from "react"
import { motion } from "framer-motion"

function skills() {
    return(
        <motion.div className="skills_container">
            <div className="content_skills">
            <div className="skills_text">
                <h2 className="animate__animated animate__fadeIn animate__delay-1s">Skills &amp; Experience</h2>
                <p>Omdat ik een Mechatronica &amp; Robotica student ben met een mechanische achtergrond, ben ik redelijk breed opgeleid.</p>
                <p>De onderwerpen waar ik kennis in heb zijn:</p>
                <ul>
                    <li><p>AutoCAD Inventor</p></li>    
                    <li><p>Design for production / Design for Assembly</p></li>    
                    <li><p>( C ) ++ / Microntrollers</p></li>
                    <li><p>Python / Artificial Intelligence</p></li>
                    <li><p>LADDER / Structured text</p></li>    
                    <li><p>ReactJS / Framer Motion</p></li>
                </ul>
                <p>Voor meer informatie over werkervaring kan je altijd een kijkje nemen bij me <a href="https://www.linkedin.com/in/mart-veldkamp-b3a01220a/"> LinkedIn</a> profiel.</p>
            </div>
            <div className="skills-details">
                <div className="chart_box">
                    <div className="chart">
                        <span>Embedded programming</span>
                        <footer>
                            <div className="w90"></div>
                        </footer>
                    </div>
                    <div className="chart">
                        <span>Artificial Intelligence</span>
                        <footer>
                            <div className="w60"></div>
                        </footer>
                    </div>
                    <div className="chart"> 
                        <span>Front-end web development</span>
                        <footer>
                            <div className="w70"></div>
                        </footer>
                    </div>
                    <div className="chart"> 
                        <span>PLC programmeren</span>
                        <footer>
                            <div className="w50"></div>
                        </footer>
                    </div>
                </div>
                <div className="work-row">
                    <div className="work-box">
                        <header>
                            <div className="skills_explain">
                                <div className="skills_box">
                                    <header>actueel / toekomst</header>
                                    <p>Onderwerpen waar ik me momenteel mee bezig ben:</p>
                                    <p>- Robotics</p>
                                    <p>- Reactjs</p>
                                    <p>- PLC Programmeren</p>
                                </div>
                                <div className="skills_box">
                                    <header>school</header>
                                    <p>- Momenteel ben ik aan het studeren voor een bachelor in science: Mechatronica &amp; Robotica.</p>
                                    <p>- Ik ben een 4e jaars.</p>
                                    <p>- Ik wil na me studie graag doorstuderen.</p>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>  
    )
}


export default skills;