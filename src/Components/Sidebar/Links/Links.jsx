import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export const Links = () => {
  const items = ["Home Page", "About", "Projects", "Contact Me"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((items) => (
        <motion.a href={`#${items}`} key={items} variants={itemVariants} whileHover={{scale: 1.2}} whileTap={{scale: 0.95}}>
          {items}
        </motion.a>
      ))}
    </motion.div>
  );
};
