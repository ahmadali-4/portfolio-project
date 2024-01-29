import React, { useRef } from "react";
import "./parallex.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import StarsCanvas from "./StarsCanvas";

export const Parallex = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 2], ["0%", "100%"]);

  return (
    <div className="container" ref={ref}>
      <motion.h1 style={{ y: yText }}>PROJECTS</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg }} className="planets"></motion.div>
      {/* <motion.div style={{ x: yBg }} className="stars"></motion.div> */}
      <StarsCanvas />
      <video autoPlay muted loop src="/blackhole.webm"></video>
    </div>
  );
};
