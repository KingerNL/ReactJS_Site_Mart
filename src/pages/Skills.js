import React from "react"

export default function skills() {
    return(
        <div className="skills_container">
            <div className="content_skills">
            <div className="skills_text">
                <h2 className="animate__animated animate__fadeIn animate__delay-1s">Skills &amp; Experience</h2>
                <p>Because I'm a mechatronics &amp; robotics student with a mechanical background, I'm very multi-disciplined.</p>
                <p>I've expereience in:</p>
                <ul>
                    <li><p>AutoCAD Inventor</p></li>    
                    <li><p>Design for production / Design for Assembly</p></li>    
                    <li><p>( C ) ++ / Microntrollers</p></li>
                    <li><p>Python / Artificial Intelligence</p></li>
                    <li><p>LADDER / Structured text</p></li>    
                    <li><p>Frontend web / ReactJS</p></li>
                </ul>
                <p> For more information about me and my (current) work experience, you can always check out my <a href="https://www.linkedin.com/in/mart-veldkamp-b3a01220a/"> LinkedIn</a> profile.</p>
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
                        <span>Front-end web development</span>
                        <footer>
                            <div className="w60"></div>
                        </footer>
                    </div>
                    <div className="chart"> 
                        <span>Python / C(++)</span>
                        <footer>
                            <div className="w70"></div>
                        </footer>
                    </div>
                    <div className="chart"> 
                        <span>Artificial Intelligence</span>
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
                                    <header>currently</header>
                                    <p>I'm getting some more experience in:</p>
                                    <p>- Robotics (::ROS)</p>
                                    <p>- GNSS data</p>
                                    <p>- C++</p>
                                </div>
                                <div className="skills_box">
                                    <header>education</header>
                                    <p>- I'm currently finishing my bachelor's degree and doing an internship in the aerospace industry.</p>
                                    <p>- I'm in my final year.</p>
                                    <p>- I want to pursue a masters.</p>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    )
}