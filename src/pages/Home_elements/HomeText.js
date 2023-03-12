// import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

const line1 = "Hi,"
const line2 = "I'm Mart"
const line3 = "Engineer."

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

    return(
        <div className="hometext">
            <motion.h1
            className="load-screen--message"
            variants={sentence}
            initial= "hidden"
            animate= "visible">
            {line1.split("").map((word, index) => {
            return (
                <motion.span key={word + "-" + index} variants={letter} whileHover={{ transition:{duration: 0.2, type: "spring", stiffness: 600}, scale: 1.3}} style={{ display: "inline-block" }}>
                    {word}
                </motion.span>
            )
            })}
            <br />
            {line2.split("").map((word, index) => {
            return (
                <motion.span className={`letter ${word === ' ' ? 'space' : ''}`} key={word + "-" + index} variants={letter} whileHover={{ transition:{duration: 0.2, type: "spring", stiffness: 600}, scale: 1.3}} style={{ display: "inline-block" }}>
                    {word}
                </motion.span>
            )
            })}
            <br />
            {line3.split("").map((word, index) => {
            return (
                <motion.span 
                key={word + "-" + index} 
                variants={letter} 
                style={{ display: "inline-block" }} 
                whileHover={{ transition:{duration: 0.2, type: "spring", stiffness: 600}, scale: 1.3}}>
                    {word}
                </motion.span>
            )
            })}
            </motion.h1>
    </div>
    )
}