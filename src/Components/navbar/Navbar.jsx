import React from "react";
import { motion } from "framer-motion";
import "./navbar.scss";
import { Sidebar } from "../Sidebar/Sidebar";

export const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ahmad Ali
        </motion.span>
        <div className="social">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </div>
  );
};
