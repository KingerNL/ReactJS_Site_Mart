import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

const line1 = "Hi,"
const line2 = "I'm Mart"
const line3 = "Engineer."

const stringArray = ['Innovative', 'A&nbsp;sports&nbsp;fanatic', 'A&nbsp;teamplayer', 'A&nbsp;"nolive"&nbsp;programmer', 'Curious', 'A&nbsp;rubiks&nbsp;cube&nbsp;magician', 'A&nbsp;critical&nbsp;thinker', 'Logical', 'A&nbsp;hardware&nbsp;collector', 'Creative', 'knowledgeable&nbsp;(*ugh)', 'enthusiastic', 'A&nbsp;good&nbsp;book&nbsp;enjoyer'];

const sentence = {
    hidden: { opacity: 1},
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.09,
        },
    },
}

const letter = {
    hidden: { opacity: 0, rotate: 250},
    visible: { opacity: 1, rotate: 360 },
}

export default function HomeText() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
  
    const handleAnimationEnd = () => {
      setIsAnimating(false); // Animation has ended, stop the animation
    };
  
    useEffect(() => {
      const intervalDuration = 3000;
  
      const interval = setInterval(() => {
        setIsAnimating(true); // Start the animation
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % stringArray.length); // Update the text or reset to 0
        }, 1000); // Wait for 1 second (adjust as needed) before changing the text
      }, intervalDuration);
  
      return () => {
        clearInterval(interval);
      };
    }, []);

    return(
        <div className="hometext">
            <div className="HeaderHomeText">
                <h2>Some might say he's:</h2>
                <h2
                key={stringArray[currentIndex]} // Add a dynamic key to trigger re-rendering and restart the animation
                className={`typing-animation ${isAnimating ? 'animating' : ''}`}
                onAnimationEnd={handleAnimationEnd}
                >
                    <span dangerouslySetInnerHTML={{ __html: stringArray[currentIndex] }}></span>
                </h2>
            </div>
            <motion.h1
                className="load-screen--message"
                variants={sentence}
                initial= "hidden"
                animate= "visible">
                {line1.split("").map((word, index) => {
                return (
                    <motion.span shouldOptimize={true} key={word + "-" + index} variants={letter} whileHover={{ transition:{duration: 0.2, type: "spring", stiffness: 600}, scale: 1.3}} style={{ display: "inline-block" }}>
                        {word}
                    </motion.span>
                )
            })}
            <br />
            {line2.split("").map((word, index) => {
            return (
                <motion.span shouldOptimize={true} className={`letter ${word === ' ' ? 'space' : ''}`} key={word + "-" + index} variants={letter} whileHover={{ transition:{duration: 0.2, type: "spring", stiffness: 600}, scale: 1.3}} style={{ display: "inline-block" }}>
                    {word}
                </motion.span>
            )
            })}
            <br />
            {line3.split("").map((word, index) => {
            return (
                <motion.span shouldOptimize={true}
                key={word + "-" + index} 
                variants={letter} 
                style={{ display: "inline-block" }} 
                whileHover={{ transition:{duration: 0.2, type: "spring", stiffness: 600}, scale: 1.3}}>
                    {word}
                </motion.span>
            )
            })}
            </motion.h1>
            <div className="FooterHomeText">
                <h3>A Complete Portfolio of My Science Stuff</h3>
            </div>
    </div>
    )
}