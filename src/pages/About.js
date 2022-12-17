import React from "react"
import Lottie from 'react-lottie';
import Wave_animation from '../lotties/Me_Wave_Animation.json';

function About() {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: Wave_animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
    <div className="home_about">
        <div className="about_text">
            <h2>Me, Myself &amp; I</h2>
            <p>✨ 4e Jaars Mechatronica &amp; Robotica student aan de HvA ✨. Ik vind klimmen/boulderen super leuk om te doen. Daarnaast loop ik ook veel hard (vooral 5 of 13km). 🏃‍💨 </p>
            <p>Hoewel ik Mechatronica &amp; Robotica studeer. Begon ik als Mechanical Engineer, ik kon in het 3e jaar van me studie een afstudeerrichting kiezen, en had gekozen voor Mechatronica &amp; Robotica. Daarnaast als hobby vind ik front-end web development ook super leuk. (Daarom ook deze site 😉)</p>
            <p>Wat me momenteel erg interreseert is 🦾embedded systems🦾 gecombineerd met 🧠computer vision / AI🧠.</p>
        </div>
        <div className="about_lottie">
            <Lottie options={defaultOptions}/>
        </div>
    </div>
    )
}


export default About;