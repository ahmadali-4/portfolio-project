import React from 'react'
import "./project.scss"
import {motion} from "framer-motion";

export const ProjectCard = () => {
  return (
    <motion.div className="cards" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
    <div className="image">
      <img src="about-image.png" alt="" />
    </div>
    <div className="text">
      <h1>Project Name</h1>
      <p>
        Project Discription Project Discription Project
        DiscriptionProject DiscriptionProject DiscriptionProject
      </p>
    </div>
  </motion.div>
  )
}
