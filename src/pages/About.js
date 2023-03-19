import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import Lottie from 'react-lottie';
// import Wave_animation from '../lotties/Me_Wave_Animation.json';



export default function About() {

    const  {ref, inView} = useInView();
    const animation = useAnimation();



    useEffect(() => {
        if(inView) {
            animation.start({
                x: 0,
            });
        }
        if(!inView) {
            animation.start({x: '-100vw'})
        }
    // eslint-disable-next-line
    }, [inView]);

    return (
    <div ref={ref} className="home_about">
        <motion.div className="about_text">
            <motion.h2> Me, Myself &amp; I</motion.h2>
            <motion.p> Hoewel ik Mechatronica &amp; Robotica studeer. Begon ik als Mechanical Engineer, ik kon in het 3e jaar van me studie een afstudeerrichting kiezen, en had gekozen voor Mechatronica &amp; Robotica. Daarnaast als hobby vind ik front-end web development ook super leuk. (Daarom ook deze site 😉)</motion.p>
            <motion.p> ✨ 4e Jaars Mechatronica &amp; Robotica student aan de HvA ✨. Ik vind klimmen/boulderen super leuk om te doen. Daarnaast loop ik ook veel hard (vooral 5 of 13km). 🏃‍💨 </motion.p>
            <motion.p> Wat me momenteel erg interreseert is 🦾embedded systems🦾 gecombineerd met 🧠computer vision / AI🧠.</motion.p>
        </motion.div>
        {/* <div className="about_lottie">
            <Lottie options={defaultOptions}/>
        </div> */}
    </div>
    )
}