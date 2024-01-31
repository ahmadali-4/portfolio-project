import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>AHMAD ALI</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and UI designer
          </motion.h1>
          <motion.h3 variants={textVariants}>
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
          </motion.h3>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See My Latest Work
            </motion.button>
            <motion.button variants={textVariants} style={{backgroundColor: "white", color: "#111132", fontWeight: "bold"}}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingText"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        SOFTWARE ENGINEER AND DEVELOPER
      </motion.div>
      <motion.div className="imageContainer" >
        <motion.img whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} src="/mainIconsdark.svg" alt="" />
      </motion.div>
    </div>
  );
};
